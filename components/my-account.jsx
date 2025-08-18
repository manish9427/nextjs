import React, { useState } from 'react';

const MyAccount = () => {
    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim()) {
            setIsLoggedIn(true);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            {!isLoggedIn ? (
                <>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={handleInputChange}
                            style={{ padding: '8px', margin: '10px', width: '200px' }}
                        />
                        <br />
                        <button
                            type="submit"
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            Login
                        </button>
                    </form>
                </>
            ) : (
                <>
                    <h1>My Account</h1>
                    <h2>Welcome, {name}!</h2>
                    <button
                        onClick={() => {
                            setIsLoggedIn(false);
                            setName('');
                        }}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#f44336',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    );
};

export default MyAccount;