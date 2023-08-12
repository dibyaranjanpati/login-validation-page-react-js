import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="warning" expand="lg">
        <Container>
          <NavLink
            className=" text-black"
            to={"/"}
            style={{ textDecoration: "none" }}
          >
            LoginPage
          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <NavLink className='mx-3 text-black' to={'/'} style={{textDecoration:'none'}}>Login</NavLink> */}
              <NavLink
                className="mx-3 text-black"
                to={"/"}
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
              <NavLink
                className="mx-3 text-black"
                to={"/about"}
                style={{ textDecoration: "none" }}
              >
                About Us
              </NavLink>
              <NavLink
                className="mx-3 text-black"
                to={"/ourservices"}
                style={{ textDecoration: "none" }}
              >
                Our Services
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
