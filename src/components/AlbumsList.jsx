import { useFetchAlbumsQuery } from "../store/apis/albumsApi";

export default function AlbumsList({ user }) {
  const { data, isLoading } = useFetchAlbumsQuery(user);
  console.log(data, isLoading);
  return <div>Albums for {user.name}</div>;
}
