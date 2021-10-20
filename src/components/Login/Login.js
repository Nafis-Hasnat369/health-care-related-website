import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ height: "100vh" }}>
            <h2>Login page</h2>
            <Link to="/register"><button className="btn btn-primary">Sign Up</button></Link>
        </div>
    );
};

export default Login;