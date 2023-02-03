import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#aaa',
        padding: '0 3rem'

       
    }

function Header () {
    return (
        <>
        <header style={styles}>
            <h1>Jake Wallace</h1>

            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/'}>Projects</NavLink>
            </nav>


        </header>
        </>
    )
}

export default Header