import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { setUser, error, setError, signInUsingEmail, signInUsingGoogle } = useAuth();

    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const handleSetEmail = e => {
        setEmail(e.target.value)
        setError('')
        console.log(email)
    }
    const handleSetPassword = e => {
        setPassword(e.target.value)
        console.log(password)
    }
    const handleGoogleSignIn = _ => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
            })
            .catch(error => setError(error.message))
    }

    const handleEmailSignIn = (email, password) => {
        signInUsingEmail(email, password)
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                console.log(result.user)
            })
            .catch(error => setError(error.message))
    }
    const handleTryAgain = _ => {
        setError("")
        history.push("/login")
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-25" style={{ height: "80vh" }}>
                <h2>Login</h2>
                {
                    !error ? <Form >
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
                        <Button onClick={handleEmailSignIn} className="btn btn-success" variant="primary">
                            Sign In
                        </Button>
                    </Form> : <div>
                        <h2>{error}</h2>
                        <button onClick={handleTryAgain} className="btn btn-warning">Try again</button>
                    </div>
                }
                <div className="m-3">
                    <small>New here?</small> <Link to="/register"> <button className="btn btn-warning">Sign Up</button></Link>
                </div>
                <div>---------------or--------------</div>
                <button onClick={handleGoogleSignIn} className="btn btn-dark">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;