import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/profile"><li>Profile</li></NavLink>
        </nav>
    )
}

export default NavBar