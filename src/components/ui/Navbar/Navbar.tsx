import React from 'react';
import {Navbar as Nvb, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  return (
    <Nvb bg="primary" data-bs-theme="dark">
      <Container>
        <Nvb.Brand as={Link} to="/">Home</Nvb.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/thumbnail">Thumbnail</Nav.Link>
          <Nav.Link as={Link} to="/editor">New</Nav.Link>
          <Nav.Link as={Link} to="/editor/0">Edit 0</Nav.Link>
        </Nav>
      </Container>
    </Nvb>
  );
}

export default Navbar;
