import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar sticky="top" bg="light" expand="lg" className="shadow">        
        <NavLink to="/" className="navbar-brand default-navbar-brand text-danger">eazy.my</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mr-auto ml-5">            
            <NavLink className="nav-link ml-3" to="/categories">Categories</NavLink>
            <NavLink className="nav-link ml-3" to="/notification">Notification</NavLink>
            <NavLink className="nav-link ml-3" to="/login">Login / Sign up</NavLink>
            <NavLink className="nav-link ml-3" to="/help">Help</NavLink>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
