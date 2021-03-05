import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

export default function MenuBar() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav" >
        <Navbar.Brand href="/">My Senpai</Navbar.Brand>
      </Navbar.Collapse>
      <Nav className="mr-auto">
        <Link to="/login" className="btn btn-dark btn-outline-light mr-3">Login</Link>
        <Link to="/signup" className="btn btn-dark btn-outline-light mr-2">Registrieren</Link>
      </Nav>
    </Navbar>
  )
}
