import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { p1 } from "../../assets";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={p1} alt="" className="shareProfileImg" />
          <input
            type="text"
            name="share"
            id="share"
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
                <Label htmlColor="blue"  className="shareIcon" />
                <span className="shareOptionText">Tage</span>
            </div>
            <div className="shareOption">
                <Room htmlColor="green"  className="shareIcon" />
                <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
                <EmojiEmotions htmlColor='goldenrod'  className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
