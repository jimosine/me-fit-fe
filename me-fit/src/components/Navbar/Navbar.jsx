import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand >MeFit</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link > <Link className="text-decoration-none text-white" to="/dashboard"> Dashboard </Link></Nav.Link>
                    <Nav.Link > <Link className="text-decoration-none text-white" to="/library"> Library </Link></Nav.Link>
                    <Nav.Link > <Link className="text-decoration-none text-white" to="/profile"> Profile </Link></Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    )
}

export default NavBar

// <NavLink to="/"><li>Home</li></NavLink>
// <NavLink to="/profile"><li>Profile</li></NavLink>
// <NavLink to="/library"><li>Library</li></NavLink>