import { useEffect } from "react";
import { fetchUsers, addUser } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

export default function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);
  const handleUserAdd = () => {
    doCreateUser();
  };
  const { data } = useSelector((state) => state.users);

  const renderedUsers = data.map((user) => (
    <UsersListItem key={user.id} user={user} />
  ));
  console.log(isCreatingUser);
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
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
