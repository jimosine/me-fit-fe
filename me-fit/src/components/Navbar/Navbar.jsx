import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FaDumbbell, FaUserCircle } from 'react-icons/fa'
import { storageDelete } from '../../utils/storage'

function NavBar() {

    const navDropdownTitle = <FaUserCircle size={40} />

    //Misschien ook nog setProfile([]) doen, maar lijkt goed te gaan
    const onCancel = () => {
        storageDelete('profile')
    }

    return (
        <Navbar className="navbar">
            <Navbar.Brand className="navbar-brand">

                <FaDumbbell size={40}
                />{' '}
                MeFit
            </Navbar.Brand>

            <Nav className="me-auto">
                <Nav.Link > <Link className="nav-links" to="/dashboard"> Dashboard </Link></Nav.Link>
                <Nav.Link > <Link className="nav-links" to="/library"> Library </Link></Nav.Link>
                {/* <Nav.Link > <Link className="text-decoration-none text-white" to="/profile"> Profile </Link></Nav.Link> */}
            </Nav>

            <Nav className="ml-auto">
                <NavDropdown title={navDropdownTitle} id="collasible-nav-dropdown" drop="start">
                    <NavDropdown.Item as="button" className="navbar-dropdown-item"><Nav.Link > <Link className="text-decoration-none text-black" to="/profile"> Profile </Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item as="button" className="navbar-dropdown-item"><Nav.Link > <Link className="text-decoration-none text-black" to="/profile"> Settings </Link></Nav.Link></NavDropdown.Item>
                    <NavDropdown.Item as="button" onClick={onCancel} className="navbar-dropdown-item"><Nav.Link > <Link className="text-decoration-none text-black" to="/dashboard"> Logout </Link></Nav.Link></NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Navbar>
    )
}

export default NavBar

// <NavLink to="/"><li>Home</li></NavLink>
// <NavLink to="/profile"><li>Profile</li></NavLink>
// <NavLink to="/library"><li>Library</li></NavLink>