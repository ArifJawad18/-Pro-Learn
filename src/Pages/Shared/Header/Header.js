import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';



const Header = () => {
  
  const { user } = useContext (AuthContext)
    return (
        <div>
       <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        

        <Navbar.Brand href="/">Pro-Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-2"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>

          <Form className="d-flex">
          <Link to={`/login`}>
          <Button variant="primary">Login</Button>
          </Link>
          <Link to={`/login`}>
          <Button variant="primary">Reg</Button>
          </Link>
          <Nav.Link href='#'>{user?.displayName}</Nav.Link>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  </div>
    );
};

export default Header;