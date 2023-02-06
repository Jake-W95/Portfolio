import React from "react";
import { NavLink } from "react-router-dom";

// import style from '../../src/'


const linkStyle = {
    //Links
    fontSize: '145%',
    fontWeight: 'bold',
    marginLeft: '1.3rem',
}

function NavBar() {
    return (
        <>
            <nav >
                <NavLink to={'/'} style={linkStyle}>Home |</NavLink>
                <NavLink to={'/'} style={linkStyle}>Projects |</NavLink>
                <NavLink to={'/'} style={linkStyle}>About Me |</NavLink>
                <NavLink to={'/'} style={linkStyle}>Contact</NavLink>
            </nav>

        </>
    )
}

export default NavBar
