import React from 'react'

const Dashboard = () => {
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
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>fandi</td>
              <td>12345678</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard