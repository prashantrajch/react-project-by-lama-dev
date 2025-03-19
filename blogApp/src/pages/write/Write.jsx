import { FaPlus } from "react-icons/fa";

export default function Write() {
  return (
    <div className="pt-[50px]  ">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="w-[70vw] h-[250px] rounded-[10px] object-cover "
      />
      <form action="">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FaPlus />
          </label>
          <input type="file" name="fileInput" id="fileInput" />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name="desc"
            id="desc"
            placeholder="Tell your story...."
            className="writeInput"
          ></textarea>
        </div>
        <button type="submit" className="">
          Publish
        </button>
      </form>
    </div>
  );
}
