import React, { useContext } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import bg from '../Image/background.jpeg';
import logo from '../Image/hero-logo.png';
import './Header.css';
const Header = () => {  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                                    <Link className="nav-link active item" aria-current="page" to="/home">Home</Link>
                                    <Link className="nav-link active item" to="/signin">Booking</Link>
                                    {(loggedInUser.success||loggedInUser.name) ?<h4 style={{backgroundColor:'black',fontSize:"30px",color:'white'}} > Welcome {loggedInUser.name || loggedInUser.email}</h4 >:<Link className="nav-link active item"  to="/signin">Login</Link>}
                                    
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