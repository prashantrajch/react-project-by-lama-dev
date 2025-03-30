import "./sidebar.css";
import Skeleton from "../skeleton/Skeleton";
import {
  Explore,
  Home,
  Menu,
  Subscriptions,
  VideoLibrary,
} from "@mui/icons-material";

export default function Sidebar({ isLoading }) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Menu />
        {isLoading ? (
          <Skeleton type="menu" />
        ) : (
          <>
            <div className="sidebarItem active">
              <Home />
              <span>Home</span>
            </div>
            <div className="sidebarItem">
              <Explore />
              <span>Explore</span>
            </div>
            <div className="sidebarItem">
              <Subscriptions />
              <span>Subsriptions</span>
            </div>
            <div className="sidebarItem">
              <VideoLibrary />
              <span>Library</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
