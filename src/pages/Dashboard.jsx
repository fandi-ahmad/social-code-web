import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [name, setname] = useState('')
  const [token, setToken] = useState('')
  const [userList, setUserList] = useState([])

  const auth = (token) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }

  const refreshToken = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const response = await axios.get('http://localhost:8000/api/v1/token', auth(accessToken))
      // setToken(response.data.accessToken)
      // const decode = jwtDecode(response.data.accessToken)
      // console.log(decode)
      console.log(response, '<-- refresh token')
    } catch (error) {
      console.log(error, '<-- error refresh token')
    }
  }


  const getAllUser = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      const response = await axios.get('http://localhost:8000/api/v1/user', auth(accessToken));

      const dataList = response.data.data
      setUserList(dataList)
      // console.log(dataList, '<-- data list (rsponse)');
      // console.log(userList, '<-- user list');
    } catch (error) {
      console.log(error, '<-- error get all user');
    }
  };



  useEffect(() => {
    getAllUser()
    console.log(userList, '<-- user list');
  }, [])


  useEffect(() => {
    console.log(userList, '<-- user list');
  }, [userList]);

 
  return (
    <>
      <div>
        <div>
          <h1>dashboard</h1>
          <button>logout</button>
        </div>
        <br />
        <table border={'1'}>
          <thead>
            <tr>
              <th>no</th>
              <th>nama</th>
            </tr>
          </thead>
          <tbody>
          {userList.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard