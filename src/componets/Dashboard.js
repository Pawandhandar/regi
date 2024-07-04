import React from 'react';
import { Table } from 'react-bootstrap';

const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <div>
      <h1>Welcome, {userInfo.name}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{userInfo.name}</td>
            <td>{new Date(userInfo.dob).toLocaleDateString()}</td>
            <td>{userInfo.email}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
