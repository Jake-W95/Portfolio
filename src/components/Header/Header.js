import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";

import './Header.css'
import Logo from '../../images/Logos_Designs/JW_Logo.png'

function Header() {
    return (
        <>
            <header >

                {/* <div className="logo"></div> */}
                <Link to={'/'} style={{height: '100%'}}>
                    <img src={Logo} alt="logosdcjns" width={'auto'} height={'110%'} />
                </Link>
                <NavBar />

            </header>
        </>
    )
}
export default Header