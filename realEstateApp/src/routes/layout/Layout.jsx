import { Outlet } from "react-router-dom";
import "./layout.scss";
import { Navbar } from "../../components";

const Layout = () => {
  return (
    <main className="layout">
      <header className="navbar">
        <Navbar />
      </header>
      <section className="content">
        <Outlet />
      </section>
      {/* Sidebar */}
    </main>
  );
};

export default Layout;
