import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = ({ isAdmin, isAuthenticated }) => {
    return (
        <nav>
            <ul className="breadcrumbs">
                {isAuthenticated &&
                <>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                </>
                }
                
                {isAdmin && isAuthenticated &&(
                    <>
                        <li><NavLink to="/books/add" activeclassname="active">Add Book</NavLink></li>
                        <li><NavLink to="/books" activeclassname="active">Book List</NavLink></li>
                        <li><NavLink to="/admin-users/add" activeclassname="active">Add Admin User</NavLink></li>
                        <li><NavLink to="/admin-users" activeclassname="active">Admin User List</NavLink></li>
                        <li><NavLink to="/users/add" activeclassname="active">Add User</NavLink></li>
                        <li><NavLink to="/users" activeclassname="active">User List</NavLink></li>
                        <li><NavLink to="/transactions" activeclassname="active">Transaction List</NavLink></li>
                        <li><NavLink to="/transactions/add" activeclassname="active">Add Transaction</NavLink></li>
                        <li></li>
                    </>
                )}
                {!isAdmin && isAuthenticated &&(
                    <>
                        <li><NavLink to="/dashboard" activeclassname="active">User Dashboard</NavLink></li>

                    </>
                )}

            </ul>
        </nav>
    );
};

export default Breadcrumbs;
