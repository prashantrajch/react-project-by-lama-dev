import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register h-[calc(100vh-50px)] flex flex-col items-center justify-center">
      <span className="text-[50px] ">Register</span>
      <form className="registerForm mt-5 flex flex-col [&_label]:my-2.5 ">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton mt-5 cursor-pointer bg-[lightcoral] border-none p-2.5 text-white rounded-[10px]   ">
          Register
        </button>
      </form>
      <button className="registerRegisterButton absolute top-[60px] right-5 bg-[lightcoral] cursor-pointer p-2.5 border-none text-white rounded-[10px]  ">
        <Link to={"/login"}>Login</Link>
      </button>
    </div>
  );
}
