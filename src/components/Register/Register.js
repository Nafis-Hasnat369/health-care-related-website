import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { setUser, email, password, setEmail, setPassword, error, setError, newSignIn, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    // set email
    const handleSetEmail = e => {
        setEmail(e.target.value)
        console.log(email)
    }
    // set password
    const handleSetPassword = e => {
        setPassword(e.target.value)
        console.log(password)
    }
    // email sign in
    const handleEmailSignIn = _ => {
        newSignIn()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                console.log(result.user)
            })
            .catch(error => setError(error.message))
    }
    // google sign in
    const handleGoogleSignIn = _ => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri);
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
                        <Button onClick={handleEmailSignIn} className="btn btn-success" variant="primary" type="submit">
                            Sign In
                        </Button>
                    </Form> : <div>
                        <h2>{error}</h2>
                        <button onClick={handleTryAgain} className="btn btn-warning">Try again</button>
                    </div>
                }
                <div className="m-3">
                    <small>Already have an account?</small> <Link to="/login"> <button className="btn btn-warning">Sign In</button></Link>
                </div>
                <div>---------------or--------------</div>
                <button onClick={handleGoogleSignIn} className="btn btn-dark">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;