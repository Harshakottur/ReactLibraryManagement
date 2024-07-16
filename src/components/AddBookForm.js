import React, { useState } from 'react';
import axios from '../axiosConfig';

const AddBookForm = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('Available'); // Default to 'Available'
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/books', { name, author, status });
      console.log('Book added:', res.data);
      setName('');
      setAuthor('');
      setStatus('Available'); // Reset to default
      setSuccessMessage('Book added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
    } catch (error) {
      console.error('Error adding book:', error);
      setErrorMessage('Failed to add book.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Book</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Book Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Book Name"
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            required
          />
        </label>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Available">Available</option>
            <option value="Borrowed">Borrowed</option>
          </select>
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
