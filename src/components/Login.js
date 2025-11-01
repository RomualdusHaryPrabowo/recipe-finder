import React from 'react';
import { useNavigate } from 'react-router-dom';

const loginStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4'
    },
    form: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '300px'
    },
    inputGroup: {
        marginBottom: '15px'
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        color: '#555'
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box'
    },
    button: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#5cb85c',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer'
    }
};


function Login({ onLogin }) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        onLogin();

        navigate('/');
    };

    return (
        <div style={loginStyles.container}>
            <form style={loginStyles.form} onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <div style={loginStyles.inputGroup}>
                    <label htmlFor="username" style={loginStyles.label}>Username</label>
                    <input type="text" id="username" style={loginStyles.input} />
                </div>
                <div style={loginStyles.inputGroup}>
                    <label htmlFor="password" style={loginStyles.label}>Password</label>
                    <input type="password" id="password" style={loginStyles.input} />
                </div>
                <button type="submit" style={loginStyles.button}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
