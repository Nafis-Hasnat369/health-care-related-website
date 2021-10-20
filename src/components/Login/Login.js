import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { email, setEmail, setPassword, error, setError, signInUsingEmail, signInUsingGoogle } = useAuth();

    const handleSetEmail = e => {
        setEmail(e.target.value)
        setError('')
        console.log(email)
    }
    const handleSetPassword = e => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-25" style={{ height: "80vh" }}>
                <h2>Login</h2>
                {
                    !error ? <Form onSubmit={signInUsingEmail}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleSetEmail} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handleSetPassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className="btn btn-success" variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form> : <div>
                        <h2>{error}</h2>
                        <Link to="/login"> <button className="btn btn-warning">Try again</button></Link>
                    </div>
                }
                <div className="m-3">
                    <small>New here?</small> <Link to="/register"> <button className="btn btn-warning">Sign Up</button></Link>
                </div>
                <div>---------------or--------------</div>
                <button onClick={signInUsingGoogle} className="btn btn-dark">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;