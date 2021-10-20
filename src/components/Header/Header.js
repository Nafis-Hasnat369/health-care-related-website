import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Health City</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link to="/services">Services</Nav.Link>
                        <Nav.Link to="/about">About Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as:{user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;