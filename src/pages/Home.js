// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated, isAdmin }) => {
    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1>Welcome to the Online Library Management System</h1>
                    {isAdmin ? (
                        <div>
                            <h2>Admin Links</h2>
                            <ul>
                                <li><Link to="/books/add">Add Book</Link></li>
                                <li><Link to="/admin-users/add">Add Admin User</Link></li>
                                <li><Link to="/admin-users">Admin User List</Link></li>
                                <li><Link to="/transactions">Transaction List</Link></li>
                                <li><Link to="/users/add">Add User</Link></li>
                                <li><Link to="/users">User List</Link></li>
                                <li><Link to="/transactions/add">Add Transaction</Link></li>
                                <li><Link to="/books">Book List</Link></li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <h2>User Links</h2>
                            <ul>
                                <li><Link to="/dashboard">User Dashboard</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <h1>Unauthorized. Please log in to access the system.</h1>
            )}
        </div>
    );
};

export default Home;
