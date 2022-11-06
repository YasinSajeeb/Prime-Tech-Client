import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/Logo.png'
import '../Header/header.css';

const Header = () => {
    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='header-left'>
        <Navbar.Brand href="#home" className='logo'> <img src={logo} alt="" srcset="" />Prime<strong>TECH</strong> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses">Courses</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/others">Others</Link>
            
          </Nav>
          <Nav>
            <Link to="#deets">More deets</Link>
            <Link eventKey={2} to="#memes">
              Dank memes
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;