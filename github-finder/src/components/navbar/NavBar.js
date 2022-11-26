import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/"><VscGithub style={{color:'yellow'}}/> Github Finder</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
