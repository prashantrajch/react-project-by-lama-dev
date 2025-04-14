import { createUserWithEmailAndPassword } from "firebase/auth";
import Add from "../assets/icons/addAvatar.png";
import { auth } from "../firebase";
import { useState } from "react";

const Register = () => {
  const [err, setErr] = useState({
    status: false,
    msg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const { email, password, file, username } = data;
    console.log(email, password, file, username);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
    } catch (err) {
      console.log(err);
      setErr({
        status: true,
        msg: err,
      });
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Prash Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input name="username" type="text" placeholder="display name" />
          <input name="email" type="email" placeholder="email" />
          <input name="password" type="password" placeholder="password" />
          <input
            name="file"
            type="file"
            id="file"
            style={{ display: "none" }}
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err.status && <span>{err.msg || "Something went wrong"}</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
