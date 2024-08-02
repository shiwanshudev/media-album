import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";

export default function UsersList() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);
  console.log(data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  if (error) {
    return <div>Error</div>;
  } else if (isLoading) {
    return <Skeleton times={5} />;
  } else {
    return <div>{data.length}</div>;
  }
}
