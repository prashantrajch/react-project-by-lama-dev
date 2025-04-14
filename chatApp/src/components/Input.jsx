import Img from "../assets/icons/img.png";
import Attach from "../assets/icons/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something...." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" name="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
