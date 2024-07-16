import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchBooks();
        checkAdminStatus();
    }, []);

    const fetchBooks = async () => {
        try {
            const res = await axios.get('/api/books');
            setBooks(res.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const checkAdminStatus = () => {
        const adminStatus = localStorage.getItem('isAdmin') === 'true';
        setIsAdmin(adminStatus);
    };

    const handleStatusChange = async (id, newStatus) => {
        if (!isAdmin) return;
        try {
            await axios.put(`/api/books/${id}`, { status: newStatus });
            fetchBooks();
            setSuccessMessage('Book status updated successfully.');
            setTimeout(() => setSuccessMessage(''), 4000);
        } catch (error) {
            console.error('Error updating book status:', error);
            setErrorMessage('Failed to update book status.');
        }
    };

    const handleDelete = async (id) => {
        if (!isAdmin) return;
        const confirmDelete = window.confirm('Are you sure you want to delete this book?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`/api/books/${id}`);
            fetchBooks(); 
            setSuccessMessage('Book deleted successfully.');
            setTimeout(() => setSuccessMessage(''), 4000); 
        } catch (error) {
            console.error('Error deleting book:', error);
            setErrorMessage('Failed to delete book.');
        }
    };

    return (
        <div className="container">
            <h2>Book List</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <ul>
                {books.map(book => (
                    <li key={book._id} className="book-item">
                        <span className="book-info">
                            {book.name} by {book.author} - {book.status}
                        </span>
                        {isAdmin && (
                            <div className="admin-actions">
                                <select 
                                    value={book.status} 
                                    onChange={(e) => handleStatusChange(book._id, e.target.value)}
                                    className="status-select"
                                >
                                    <option value="available">Available</option>
                                    <option value="borrowed">Borrowed</option>
                                </select>
                                <button onClick={() => handleDelete(book._id)} className="delete-button">
                                    Delete
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
