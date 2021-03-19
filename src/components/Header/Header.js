import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../Image/background.jpeg';
import logo from '../Image/hero-logo.png';
import './Header.css';
const Header = () => {  
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                       <Navbar collapseOnSelect expand="lg" >
                            <Navbar.Brand className='header-logo' href="/"><img src={logo} alt=""/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link className="nav-link active item" aria-current="page" to="/">Home</Link>
                                    <Link className="nav-link active item" to="/register">Booking</Link>
                                    <Link className="nav-link active item" to="/profile">Profile</Link>
                                    <Link className="nav-link active item"  to="#">Login</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <img className='background-image' src={bg} alt="" fluid/>
        </div>
    );
};

export default Header;