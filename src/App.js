import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BookList from './pages/BookList';
import UserDashboard from './pages/UserDashboard';
import Home from './pages/Home';
import AddBookForm from './components/AddBookForm';
import UserForm from './components/AddUserForm';
import UserList from './components/UserList';
import AdminUserForm from './components/AddAdminUserForm';
import AdminUserList from './components/AdminUserList';
import TransactionForm from './components/AddTransactionForm';
import TransactionList from './components/TransactionList';
import LoginForm from './components/Login';
import Breadcrumbs from './components/Breadcrumbs';
import './App.css';

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const isAdminStored = localStorage.getItem('isAdmin');
        const userId = localStorage.getItem('userId');

        if (token && isAdminStored && userId) {
            setIsAuthenticated(true);
            setIsAdmin(isAdminStored === 'true');
        } else {
            setIsAuthenticated(false);
            setIsAdmin(false);
        }
    }, []);

    const handleLogin = (isAdminLoggedIn) => {
        setIsAuthenticated(true);
        setIsAdmin(isAdminLoggedIn);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('userId');
        setIsAuthenticated(false);
        setIsAdmin(false);
        window.location.href = '/login';
    };

    return (
        <Router>
            <div className="App">
                <header>
                    {isAuthenticated && (
                        <div className="logout">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                    <Breadcrumbs isAdmin={isAdmin} isAuthenticated={isAuthenticated}/>

                </header>
                <Routes>
                    <Route path="/login" element={!isAuthenticated ? <LoginForm handleLogin={handleLogin} /> : <Navigate to="/"/>} />

                    {isAuthenticated && isAdmin && (
                        <>
                            <Route path="/books/add" element={<AddBookForm />} />
                            <Route path="/admin-users/add" element={<AdminUserForm />} />
                            <Route path="/admin-users" element={<AdminUserList />} />
                            <Route path="/transactions" element={<TransactionList />} />
                            <Route path="/users/add" element={<UserForm />} />
                            <Route path="/users" element={<UserList />} />
                            <Route path="/transactions/add" element={<TransactionForm />} />
                            <Route path="/books" element={<BookList />} />
                        </>
                    )}

                    {isAuthenticated && !isAdmin && (
                        <>
                            <Route path="/dashboard" element={<UserDashboard />} />
                        </>
                    )}
                    <Route path="/" element={<Home isAuthenticated={isAuthenticated} isAdmin={isAdmin} />} />
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
