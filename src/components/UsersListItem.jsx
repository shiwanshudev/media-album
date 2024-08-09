import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleDelete = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDelete}>
        <GoTrashcan />
      </Button>
      {error && "Error..."}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
