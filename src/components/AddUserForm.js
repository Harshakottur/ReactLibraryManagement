import React, { useState } from 'react';
import axios from '../axiosConfig';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users', { username, name, email, contactNumber });
      setSuccessMessage('User added successfully!');
      setUsername('');
      setName('');
      setEmail('');
      setContactNumber('');
      setTimeout(() => setSuccessMessage(''), 4000); // Clear success message after 3 seconds
    } catch (error) {
      console.error('Error adding user:', error);
      setErrorMessage('Failed to add user');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New User</h2>
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
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contact Number:
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
