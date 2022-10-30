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
       <Navbar bg="light" expand="lg" variant="light">
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

          {/* user */}
          <Nav.Link className="mr-5" href='#'>{user?.displayName}</Nav.Link>
           {/* user end */}

          <Link to={`/login`}>
          <Button className='mr-5' variant="primary">Login</Button>
          </Link>
          <Link to={`/register`}>
          <Button className='mr-5' variant="primary">Register</Button>
          </Link>
          <Form className="d-flex">
          <label for="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer text-blue-800">
	<span>Light</span>
	<span className="relative">
		<input id="Toggle2" type="checkbox" className="hidden peer" />
		<div className="w-10 h-4 rounded-full shadow bg-gray-400 peer-checked:bg-blue-600"></div>
		<div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-blue-600"></div>
	</span>
	<span>Dark</span>
</label>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  
  </div>
    );
};

export default Header;