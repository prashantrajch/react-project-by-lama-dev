import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login h-[calc(100vh-50px)] flex flex-col items-center justify-center">
      <span className="text-[50px] ">Login</span>
      <form className="loginForm mt-5 flex flex-col [&_label]:my-2.5 ">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton mt-5 cursor-pointer bg-[lightcoral] border-none p-2.5 text-white rounded-[10px]   ">
          Login
        </button>
      </form>
      <button className="loginRegisterButton absolute top-[60px] right-5 bg-[teal] cursor-pointer p-2.5 border-none text-white rounded-[10px]  ">
        <Link to={"/register"}>Register</Link>
      </button>
    </div>
  );
}
