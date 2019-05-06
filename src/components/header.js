import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = ({ siteTitle }) => (

<Navbar collapseOnSelect expand="lg" variant="dark" className="top-navbar">
  <Container>
    <Link to="/"><Navbar.Brand className="logo"> {siteTitle}<span className="solution"> Solution</span></Navbar.Brand></Link> 
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/services" className="link nav-link">Web Services</Link>
        <Link to="/workprojects" className="link nav-link">Works and Projects</Link>
        <Link to="/contact" className="link nav-link">Contact</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
