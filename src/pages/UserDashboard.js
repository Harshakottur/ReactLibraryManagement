// frontend/src/pages/UserDashboard.js
import React from 'react';
import BookList from '../pages/BookList';
import UserTransactionList from '../components/UserTransactionList';

const UserDashboard = () => {
    return (
        <div className="container">
            <h1>User Dashboard</h1>
            <BookList />
            <UserTransactionList />
        </div>
    );
};

export default UserDashboard;
