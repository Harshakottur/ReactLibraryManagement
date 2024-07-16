import React, { useState } from 'react';
import axios from '../axiosConfig';

const AdminUserForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin', { username, name, password, email, contactNumber });
      setSuccessMessage('Admin User added successfully!');
      setTimeout(() => setSuccessMessage(''), 4000); 
      setUsername('');
      setName('');
      setPassword('');
      setEmail('');
      setContactNumber('');
    } catch (error) {
      console.error('Error adding admin user:', error);
      setErrorMessage('Failed to add admin user');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Admin User</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contact Number:
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        </label>
        <button type="submit">Add Admin User</button>
      </form>
    </div>
  );
};

export default AdminUserForm;
