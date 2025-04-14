import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import "./app.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar />
      <div className="appContainer">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
