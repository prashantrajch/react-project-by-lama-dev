import { Sidebar, SinglePost } from "../../components";

export default function Single() {
  return (
    <div className="flex">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
