import { Link } from "react-router-dom";
import "./sidebar.scss";
import {
  MdCreditCard,
  MdDashboard,
  MdExitToApp,
  MdInsertChart,
  MdLocalShipping,
  MdNotificationsNone,
  MdOutlineAccountCircle,
  MdOutlinePsychology,
  MdOutlineSettingsSystemDaydream,
  MdPersonOutline,
  MdSettingsApplications,
  MdStore,
} from "react-icons/md";
import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const lists = [
  {
    title: "MAIN",
    items: [
      {
        icon: <MdDashboard className="icon" />,
        label: "Dashboard",
        path: null,
      },
    ],
  },
  {
    title: "LISTS",
    items: [
      {
        icon: <MdPersonOutline className="icon" />,
        label: "Users",
        path: "/users",
      },
      {
        icon: <MdStore className="icon" />,
        label: "Products",
        path: "/products",
      },
      {
        icon: <MdCreditCard className="icon" />,
        label: "Orders",
        path: null,
      },
      {
        icon: <MdLocalShipping className="icon" />,
        label: "Delivery",
        path: null,
      },
    ],
  },
  {
    title: "USEFUL",
    items: [
      {
        icon: <MdInsertChart className="icon" />,
        label: "Stats",
        path: null,
      },
      {
        icon: <MdNotificationsNone className="icon" />,
        label: "Notifications",
        path: null,
      },
    ],
  },
  {
    title: "SERVICE",
    items: [
      {
        icon: <MdOutlineSettingsSystemDaydream className="icon" />,
        label: "System Health",
        path: null,
      },
      {
        icon: <MdOutlinePsychology className="icon" />,
        label: "Logs",
        path: null,
      },
      {
        icon: <MdSettingsApplications className="icon" />,
        label: "Settings",
        path: null,
      },
    ],
  },
  {
    title: "USER",
    items: [
      {
        icon: <MdOutlineAccountCircle className="icon" />,
        label: "Profile",
        path: null,
      },
      {
        icon: <MdExitToApp className="icon" />,
        label: "Logout",
        path: null,
      },
    ],
  },
];

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <aside className="sidebar">
      <section className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">prashadmin</span>
        </Link>
      </section>
      <hr />
      <section className="center">
        <ul>
          {lists?.map((section, idx) => (
            <React.Fragment key={idx}>
              <p className="title">{section.title}</p>
              {section?.items?.map((item, ind) => (
                <li key={ind}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <span>
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  )}
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </section>
      <section className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </section>
    </aside>
  );
};

export default Sidebar;
