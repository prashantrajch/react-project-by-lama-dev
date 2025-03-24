import { FaUserCircle } from "react-icons/fa";
import { Sidebar } from "../../components";

export default function Settings() {
  return (
    <div className="flex ">
      <div className="settingWrapper flex-9/12 p-5 ">
        <div className="settingTitle flex items-center justify-between ">
          <span className="settingsUpdateTitle text-3xl mb-5 text-[lightcoral] ">
            Update Your Account
          </span>
          <span className="settingsDeleteTitle text-[red] text-xs cursor-pointer ">
            Delete Account
          </span>
        </div>
        <form
          action=""
          className="settingsForm flex flex-col [&_label]:text-[20px] [&_label]:mt-5 [&_input]:text-[gray] [&_input]:my-2.5 [&_input]:h-[30px] [&_input]:focus:outline-none [&_input]:border-b [&_input]:border-b-[lightgray] "
        >
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP flex items-center my-2.5  ">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[70px] h-[70px] rounded-[20px] object-cover "
            />
            <label htmlFor="fileInput">
              <FaUserCircle className="settingsPPIcon w-[25px] h-[25px] rounded-[50%] text-[lightcoral] ml-2.5 cursor-pointer   " />
            </label>
            <input
              type="file"
              name="fileInput"
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Prashant"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button className="settingsSubmit w-[150px]  self-center bg-[teal] text-white rounded-[10px] p-2.5 mt-5 cursor-pointer ">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
