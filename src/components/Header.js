import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, CloseButton } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("#home");
  const handleNavLinkClick = (hash) => {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();
      const targetOffset = targetRect.top + window.scrollY;
      const correctedOffset = targetOffset - 25; // Adjust as needed
      window.scrollTo({ top: correctedOffset, behavior: "smooth" });
      setActiveLink(hash);
    }
  };

  // Function to check if a link is active
  const isActive = (hash) => {
    console.log(
      location.hash,
      hash,
      activeLink,
      "location.hash , hash, activelink"
    );
    return location.hash === hash || activeLink === hash;
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Navbar.Brand href="/">Perfect Spring Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link
              href="#home"
              active={isActive("#home")}
              onClick={() => handleNavLinkClick("#home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              active={isActive("#about")}
              onClick={() => handleNavLinkClick("#about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#products"
              active={isActive("#products")}
              onClick={() => handleNavLinkClick("#products")}
            >
              Products
            </Nav.Link>
            <Nav.Link
              href="#customers"
              active={isActive("#customers")}
              onClick={() => handleNavLinkClick("#customers")}
            >
              Customers
            </Nav.Link>
            <Nav.Link
              href="#contact"
              active={isActive("#contact")}
              onClick={() => handleNavLinkClick("#contact")}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
