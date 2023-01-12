import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';

function Navigation({pageState,setPageState}) {
    const handleHome = () => {
        setPageState({...pageState,about:false,main:true,policies:false,contact:false})
    }

    const handleAbout = () => {
        setPageState({...pageState,about:true,main:false,policies:false,contact:false})
    }

    const handlePolicies = () => {
        setPageState({...pageState,about:false,main:false,policies:true,contact:false})
    }

    const handleContact = () => {
        setPageState({...pageState,about:false,main:false,policies:false,contact:true})
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
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;