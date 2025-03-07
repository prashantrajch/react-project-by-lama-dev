import "./Topbar.scss";
import { Mail, Person } from "@mui/icons-material";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 95256 71743</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>prashantraj9281@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
