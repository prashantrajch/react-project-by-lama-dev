import {
  MdLanguage,
  MdDarkMode,
  MdFullscreenExit,
  MdNotificationsNone,
  MdChatBubbleOutline,
  MdList,
  MdOutlineSearch,
} from "react-icons/md";
import "./navbar.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const topbarItems = [
  { type: "icon", icon: "MdLanguage", label: "English" },
  { type: "icon", icon: "MdDarkMode", action: "TOGGLE" },
  { type: "icon", icon: "MdFullscreenExit" },
  { type: "icon", icon: "MdNotificationsNone", counter: 1 },
  { type: "icon", icon: "MdChatBubbleOutline", counter: 2 },
  { type: "icon", icon: "MdList" },
  {
    type: "avatar",
    src: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
];

const iconMap = {
  MdLanguage,
  MdDarkMode,
  MdFullscreenExit,
  MdNotificationsNone,
  MdChatBubbleOutline,
  MdList,
};

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search...."
          />
          <MdOutlineSearch />
        </div>
        <div className="items">
          {topbarItems?.map((item, ind) => {
            if (item.type === "avatar") {
              return (
                <div key={ind} className="item">
                  <img src={item.src} alt="avatar" className="avatar" />
                </div>
              );
            }
            const IconComponent = iconMap[item.icon];

            return (
              <div key={ind} className="item">
                {item.action === "TOGGLE" ? (
                  <IconComponent
                    className="icon"
                    onClick={() => dispatch({ type: "TOGGLE" })}
                  />
                ) : (
                  <IconComponent className="icon" />
                )}
                {item.label}
                {item.counter && <div className="counter">{item.counter}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
