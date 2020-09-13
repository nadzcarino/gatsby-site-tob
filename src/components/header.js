import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Navbar.Brand>
        <Link className="nav-link" to="/">
          {siteTitle}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-item mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/service/">
            Services
          </Link>
          <Link className="nav-link" to="/contact/">
            Contact
          </Link>
          <Link className="nav-link" to="/about/">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
