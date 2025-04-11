import "./navbar.css";
import Notification from "../../assets/icon/notification.svg";
import Message from "../../assets/icon/message.svg";
import Settings from "../../assets/icon/settings.svg";
import { useEffect, useState } from "react";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([
    { senderName: "Hello", type: 1 },
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket, notifications]);

  const DisplayNotification = ({ senderName, type }) => {
    let action;
    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span className="notification">
        {senderName} {action} you post
      </span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Prash App</span>
      <div className="icons">
        <div className="icon" onClick={() => setOpen(!open)}>
          <img src={Notification} alt="" className="iconImg" />
          {notifications.length > 0 && (
            <div className="counter">{notifications.length}</div>
          )}
        </div>
        <div className="icon">
          <img src={Message} alt="" className="iconImg" />
        </div>
        <div className="icon">
          <img src={Settings} alt="" className="iconImg" />
        </div>
      </div>

      {open && (
        <div className="notifications">
          {notifications?.map((n, ind) => (
            <DisplayNotification
              key={ind}
              senderName={n.senderName}
              type={n.type}
            />
          ))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
