import {
  Bookmark,
  Chat,
  Event,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@mui/icons-material";
import "./sidebar.css";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const lists = [
  {
    text: "Feed",
    icon: <RssFeed className="sidebarIcon" />,
  },
  {
    text: "Chats",
    icon: <Chat className="sidebarIcon" />,
  },
  {
    text: "Videos",
    icon: <PlayCircleFilledOutlined className="sidebarIcon" />,
  },
  {
    text: "Bookmarks",
    icon: <Bookmark className="sidebarIcon" />,
  },
  {
    text: "Questions",
    icon: <HelpOutline className="sidebarIcon" />,
  },
  {
    text: "Jobs",
    icon: <WorkOutline className="sidebarIcon" />,
  },
  {
    text: "Events",
    icon: <Event className="sidebarIcon" />,
  },
  {
    text: "Courses",
    icon: <School className="sidebarIcon" />,
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {lists &&
            lists?.map((list, index) => (
              <li className="sidebarListItem" key={index}>
                {list?.icon}
                <span className="sidebarListItemText">{list?.text}</span>
              </li>
            ))}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
