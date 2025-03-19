import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex-3 m-5 pb-7.5 bg-[#fdfbfb] rounded-[10px] flex flex-col items-center  ">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          data-avatar
          src="https://images.unsplash.com/photo-1480406266260-49c193257b6d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          exercitationem ratione nostrum aspernatur at
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="mt-3.5 w-[250px] flex items-center justify-center text-base gap-2.5 ">
          <FaFacebookSquare className="cursor-pointer" />
          <FaTwitterSquare className="cursor-pointer" />
          <FaPinterestSquare className="cursor-pointer" />
          <FaInstagramSquare className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
