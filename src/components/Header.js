import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#aab',
        padding: '1.3rem 7%',
        textDecoration: 'none'

     
       
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