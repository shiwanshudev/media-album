import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, addUser } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const handleUserAdd = () => {
    dispatch(addUser());
  };
  const { data, isLoading, error } = useSelector((state) => state.users);

  const renderedUsers = data.map((user) => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));

  if (error) {
    return <div>Error</div>;
  } else if (isLoading) {
    return <Skeleton times={5} className="h-10 w-full" />;
  } else {
    return (
      <div>
        <div className="flex flex-row justify-between m-3">
          <h1 className="m-2 text-xl">Users</h1>
          <Button onClick={handleUserAdd}>+ Add User</Button>
        </div>
        {renderedUsers}
      </div>
    );
  }
}
