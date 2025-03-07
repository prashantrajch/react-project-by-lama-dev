import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social App</h3>
          <span className="registerDesc">
            Connect with friends and the around you on social app
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
            />
            <input type="text" placeholder="Email" className="registerInput" />
            <input
              type="text"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="text"
              placeholder="Password Again"
              className="registerInput"
            />
            <button className="registerButton">Sign up</button>
            <button className="registerRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
