import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Topbar() {
  const user = false;

  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center font-josefin z-[999] ">
      <div className="topLeft flex-3 flex items-center justify-center text-xl text-[#444] gap-2.5 ">
        <FaFacebookSquare className="cursor-pointer" />
        <FaTwitterSquare className="cursor-pointer" />
        <FaPinterestSquare className="cursor-pointer" />
        <FaInstagramSquare className="cursor-pointer" />
      </div>
      <div className="topCenter flex-6">
        <ul className="topList flex justify-center list-none">
          <li className="topListItem">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="topListItem ">
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/"}>Contact</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/write"}>Write</NavLink>
          </li>
          <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="topRight flex-3 flex items-center justify-center ">
        {user ? (
          <Link to={"/settings"}>
            <img
              src="https://images.unsplash.com/photo-1636041246191-7a73c36ccbe7?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-10 h-10 rounded-[50%] object-cover"
            />
          </Link>
        ) : (
          <ul className="topList flex justify-center list-none">
            <li className="topListItem">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="topListItem">
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>
        )}
        <FaSearch className="text-lg text-[#666] cursor-pointer ml-3.5" />
      </div>
    </div>
  );
}
