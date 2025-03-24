import { FaPlus } from "react-icons/fa";

export default function Write() {
  return (
    <div className="pt-[50px]  ">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="w-[70vw] h-[250px] rounded-[10px] object-cover ml-[150px] "
      />
      <form action="" className="relative">
        <div className="writeFormGroup">
          <label htmlFor="fileInput" className="text-xs">
            <FaPlus className="w-[25px] h-[25px] text-[20px] rounded-[50%] border flex items-center justify-center text-[rgb(129,125,125)] cursor-pointer " />
          </label>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name="desc"
            id="desc"
            placeholder="Tell your story...."
            className="writeInput h-[100vh] !text-[20px] "
          ></textarea>
        </div>
        <button
          type="submit"
          className="absolute top-5 right-[50px] text-white bg-[teal] p-2.5 border-none rounded-[10px] cursor-pointer text-base  "
        >
          Publish
        </button>
      </form>
    </div>
  );
}
