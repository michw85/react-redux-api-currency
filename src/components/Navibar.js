import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;

export default function NaviBar() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Сurrency converter</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/"> Home </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/exchangerates"> Exchange rates </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

// <NavBar collapsOnSelect -> property toggles expand to false after firing OnSelect on the NavBar component
// expand="lg"(large) -> breakpoint - minimizing the navigation bar
// NavBar.Brand -> Logo
// NavBar.Toggle - button to collapse the menu
// NavBar.Collapse -the menu that will expand
// Nav.Link - links
// Link to -> transition for routing
