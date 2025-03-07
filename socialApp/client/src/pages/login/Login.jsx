import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Social App</h3>
                <span className='loginDesc'>Connect with friends and the around you on social app</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Email' className="loginInput" />
                    <input type="text" placeholder='Password' className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login