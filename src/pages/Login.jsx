import React from 'react';

const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' />
        <br /> <br />
        <input type="password" placeholder='password' />
        <br /> <br />
        <button>login</button>
      </div>
    </>
  );
};

export default Login;