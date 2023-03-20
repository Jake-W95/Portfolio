import React from "react";
import NavBar from "../NavBar";

import './Header.css'
import Logo from '../../images/Logos_Designs/JW_Logo.png'

function Header() {
    return (
        <>
            <header >
                
               {/* <div className="logo"></div> */}
               <img src={Logo} alt="logosdcjns" width={'auto'} height={'110%'}/>
                <NavBar />

            </header>
        </>
    )
}
export default Header