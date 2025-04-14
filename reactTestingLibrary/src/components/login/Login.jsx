import React from 'react'

const Login = () => {
  return (
    <form>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' id='username' />
        <label htmlFor="password">Password</label>
        <input type="text" name='password' id='password' />
    </form>
  )
}

export default Login