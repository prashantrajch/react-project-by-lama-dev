import { MdOutlineDriveFolderUpload } from "react-icons/md";
import "./new.scss";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  console.log(file);

  return (
    <section className="list">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form action="">
            <div className="formInput">
              <label htmlFor="file">
                Image: <MdOutlineDriveFolderUpload size={28} />
              </label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            {inputs?.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default New;
