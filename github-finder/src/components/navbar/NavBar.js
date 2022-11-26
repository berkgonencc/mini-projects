import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="nav-link text-black">
            <VscGithub className="mb-2 text-black"/> Github Finder
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link text-black" to="/search">
            Search
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
