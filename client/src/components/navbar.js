import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import logo from '../../src/assets/Freetail Candle Co-logos_black.png';

function Navigation({pageState,setPageState}) {
    const handleBrand = () => {
        setPageState({...pageState,about:false,main:true,work:false,contact:false})
    }
    
    const handleAbout = () => {
        setPageState({...pageState,about:true,main:false,work:false,contact:false})
    }

    const handleWork = () => {
        setPageState({...pageState,about:false,main:false,work:true,contact:false})
    }

    const handleContact = () => {
        setPageState({...pageState,about:false,main:false,work:false,contact:true})
    }

    return (
        <Navbar className="ms-3 me-3" expand="sm">
            <Navbar.Brand href="#" onClick={handleBrand}>Freetail Candle Co.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-grow-1 justify-content-evenly">
                <Nav.Link href="#" onClick={handleAbout}>About</Nav.Link>
                <Nav.Link href="#" onClick={handleWork}>Work</Nav.Link>
                <Nav.Link href="#" onClick={handleContact}>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;