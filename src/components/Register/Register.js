import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{ height: "100vh" }} >
            <h2>Register page</h2>
            <Link to="/login"><button className="btn btn-primary">Sign In</button></Link>
        </div>
    );
};

export default Register;