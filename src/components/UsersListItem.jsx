import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleDelete = () => {
    doRemoveUser(user);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className="mr-3" loading={isLoading} onClick={handleDelete}>
            <GoTrashcan />
          </Button>
          {error && "Error..."}
          {user.name}
        </div>
      </div>
    </div>
  );
}
