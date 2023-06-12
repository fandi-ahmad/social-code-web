import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginUser = async () => {
    try {
      const respons = await axios.post('http://localhost:8000/api/v1/login', {
        username: username,
        password: password
      })
      console.log(respons)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder='username'
          value={username} onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <input type="password" placeholder='password'
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button onClick={loginUser}>login</button>
      </div>
    </>
  );
};

export default Login;