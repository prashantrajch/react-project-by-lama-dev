import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "./components";

export default function Layout() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
