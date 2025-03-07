import { add, gift, p1, p2, p3 } from "../../assets";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={gift} alt="Birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Fooster </b>
            and <b> 3 other friends </b> have a birthday today{" "}
          </span>
        </div>
        <img src={add} alt="Add" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Motihari</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Rajendra Nagar</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Realtionship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={p1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Prashant</span>
          </div>
          <div className="rightbarFollowing">
            <img src={p2} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Prashant</span>
          </div>
          <div className="rightbarFollowing">
            <img src={p3} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Prashant</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default RightBar;
