import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import avatar from '../../src/assets/person-circle.svg';
import cart from '../../src/assets/cart.svg';

function Navigation({pageState,setPageState}) {
    const handleHome = () => {
        setPageState({...pageState,about:false,main:true,policies:false,contact:false,login:false})
    }

    const handleAbout = () => {
        setPageState({...pageState,about:true,main:false,policies:false,contact:false,login:false})
    }

    const handlePolicies = () => {
        setPageState({...pageState,about:false,main:false,policies:true,contact:false,login:false})
    }

    const handleContact = () => {
        setPageState({...pageState,about:false,main:false,policies:false,contact:true,login:false})
    }

    const handleLogin = () => {
        setPageState({...pageState,about:false,main:false,policies:false,contact:false,login:true})
    }

    const handleCart = () => {
        setPageState({...pageState,about:false,main:false,policies:false,contact:false,login:false,cart:true})
    }

    return (
        <Navbar className="ms-3 me-3" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-grow-1 justify-content-evenly">
                <Nav.Link href="#" onClick={handleHome}>Home</Nav.Link>
                <Nav.Link href="#" onClick={handleAbout}>About</Nav.Link>
                <Nav.Link href="#" onClick={handlePolicies}>Policies</Nav.Link>
                <Nav.Link href="#" onClick={handleContact}>Contact</Nav.Link>
                <Nav.Link href="#" onClick={handleLogin}><img src={avatar} id="avatar" alt="avatar" /></Nav.Link>
                <Nav.Link href="#" onClick={handleCart}><img src={cart} id="cart" alt="cart" /></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;