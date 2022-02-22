import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import AuthNav from "./auth-nav";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid className="colr">
    <Navbar.Brand href="/"><img
                      width="95"
                      src="../assets/nike-logo.png"
                      alt="Nike logo"
                    /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/shop">Shop</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <NavDropdown title="Dropdown" className="justify-content-center" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      </Navbar.Collapse>
      <AuthNav />
      </Container>
<Link to="/cart">
      <span class="material-icons" >
shopping_cart
</span> 
</Link>
</Navbar>
  );
}

export default Header;
