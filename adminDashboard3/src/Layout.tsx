import { Outlet } from "react-router-dom";
import { Footer, Menu, Navbar } from "./components";

const Layout = () => {
  return (
    <main className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
