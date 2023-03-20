import React from "react";
import NavBar from "./NavBar";

import Logo from '../images/Logos_Designs/JW_Logo.png'

function Header() {
    return (
        <>
            <header >
                
               {/* <div className="logo"></div> */}
               <img src={Logo} alt="logosdcjns" width={'100'} height={'70'}
            //    style={{
            //     width:'5em',
            //     height:'3.5em'}}
                />
                <NavBar />

            </header>
        </>
    )
}
export default Header