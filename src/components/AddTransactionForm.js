import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const TransactionForm = () => {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [transactionType, setTransactionType] = useState('borrowed');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));

    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/transactions', {
        user: selectedUser,
        book: selectedBook,
        dueDate,
        transactionType
      });
      setSuccessMessage('Transaction recorded successfully!');
      setSelectedUser('');
      setSelectedBook('');
      setDueDate('');
      setTransactionType('borrowed');
      setTimeout(() => setSuccessMessage(''), 4000); 
    } catch (error) {
      console.error('Error recording transaction:', error);
      setErrorMessage('Failed to record transaction');
    }
  };

  return (
    <div className="form-container">
      <h2>Record New Transaction</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          User:
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} required>
            <option value="">Select User</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>{user.name} ({user.username})</option>
            ))}
          </select>
        </label>
        <label>
          Book:
          <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)} required>
            <option value="">Select Book</option>
            {books.map(book => (
              <option key={book._id} value={book._id}>{book.name} by {book.author}</option>
            ))}
          </select>
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </label>
        <label>
          Transaction Type:
          <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)} required>
            <option value="borrowed">Borrow</option>
            <option value="returned">Returned</option>
          </select>
        </label>
        <button type="submit">Record Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
