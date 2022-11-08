import React from 'react';
import { useContext } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/Logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import '../Header/header.css';

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then( ()=> {})
    .catch( error => console.error(error))
  }

    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='header'>
        <Row>
       <Col> <Navbar.Brand className='logo'> <img src={logo} alt="" srcset="" /> <Link to="/"> Prime<strong>TECH</strong></Link> 
        </Navbar.Brand></Col>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Col xs={8}>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
           <Link to="/courses">Courses</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/others">Others</Link>
            
          </Nav>
          <Nav>
            {
            user?.displayName ?
            <>
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut} className='mx-2'>Log Out</button>
            </>
          : <>
          <Link to="/login">Login</Link>
          <Link eventKey={2} to="/signup">Signup</Link>
            </>
          }
            <Link>
        {user?.photoURL ?
        <Image
        style={{height: '30px'}} roundedCircle
        src={user?.photoURL}>
        </Image>
        : <FaUser></FaUser>
        }
        </Link>
          </Nav>
        </Navbar.Collapse>
        
        </Col>
        </Row>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;