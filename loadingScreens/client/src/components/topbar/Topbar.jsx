import "./topbar.css";
import Skeleton from "../skeleton/Skeleton";
import {
  Apps,
  Mic,
  Notifications,
  Search,
  VideoCall,
} from "@mui/icons-material";

export default function Topbar({ isLoading = false, user }) {
  return (
    <div className="topbar">
      <div className="topLeft">
        <img className="logo" src="https://i.ibb.co/KDtnJVY/logo.png" alt="" />
        <span className="logoText">LamaTube</span>
      </div>
      <div className="topCenter">
        <div className="topSearch">
          <input type="text" placeholder="Search" />
          <div className="topSearchIconContainer">
            <Search className="topSearchIcon" />
          </div>
          <Mic />
        </div>
      </div>
      {isLoading ? (
        <Skeleton type="top" />
      ) : (
        <div className="topRight">
          <VideoCall className="topIcon" />
          <Apps className="topIcon" />
          <Notifications className="topIcon" />
          <img className="topImg" src={user?.avatar} alt="" />
        </div>
      )}
    </div>
  );
}
