import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const AdminUserList = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/admin')
      .then(response => setAdminUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="list-container">
      <h2>Admin Users List</h2>
      <ul>
        {adminUsers.map(adminUser => (
          <li key={adminUser._id}>
            <strong>{adminUser.name}</strong> ({adminUser.username}) - {adminUser.email} - {adminUser.contactNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUserList;
