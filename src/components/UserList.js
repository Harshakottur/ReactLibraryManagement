import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('/api/users');
                setUsers(res.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="list-container">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.name} - {user.email} - {user.contactNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
