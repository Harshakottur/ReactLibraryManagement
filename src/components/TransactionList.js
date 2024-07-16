import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        const fetchTransactions = async () => {
            const res = await axios.get('/api/transactions');
            setTransactions(res.data);
        };
        fetchTransactions();
    }, []);

    return (
        <div className="list-container">
            <h2>Transaction List</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction._id}>
                        {transaction.transactionType} - {transaction.book.name} by {transaction.user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
