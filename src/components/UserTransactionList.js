import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const UserTransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const userId = localStorage.getItem('userId');  

    useEffect(() => {
        const fetchUserTransactions = async () => {
            try {
                const res = await axios.get(`/api/transactions/${userId}`);
                setTransactions(res.data);
            } catch (error) {
                console.error('Error fetching user transactions:', error);
            }
        };
        fetchUserTransactions();
    }, [userId]);

    return (
        <div className="list-container">
            <h2>Your Transactions</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction._id}>
                     {transaction.transactionType} by {transaction.user.name}   - {transaction.book.name} by {transaction.book.author} (Due Date: {new Date(transaction.dueDate).toLocaleDateString()})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserTransactionList;
