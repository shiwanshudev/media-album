import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, addUser } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function UsersList() {
  const dispatch = useDispatch();
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(false);

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((error) => setLoadingUsersError(error))
      .finally(() => setIsLoadingUsers(false));
    // BAD because fetchUsers is asynchronous in nature
    // setIsLoadingUsers(false); // NO
  }, []);
  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((error) => setCreatingUserError(error))
      .finally(() => setIsCreatingUser(false));
  };
  const { data } = useSelector((state) => state.users);

  const renderedUsers = data.map((user) => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));
  console.log(isCreatingUser);
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && "Error creating user..."}
      </div>

      {isLoadingUsers ? (
        <Skeleton times={5} className="h-10 w-full" />
      ) : (
        renderedUsers
      )}

      {loadingUsersError && "Error displaying users..."}
    </div>
  );
}
