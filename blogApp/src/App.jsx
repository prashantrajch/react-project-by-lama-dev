import { Outlet } from "react-router-dom";
import { Topbar } from "./components";

const App = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default App;
