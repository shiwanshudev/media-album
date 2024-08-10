import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";
import { useFetchAlbumsQuery } from "../store/apis/albumsApi";

export default function ExpandablePanel({ children, header }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(!expanded);
  const data = useFetchAlbumsQuery("6f7b");
  console.log(data);
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
}
