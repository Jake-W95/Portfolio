import React from "react";
import NavBar from "./NavBar";



const styles = {
    //Wrapper
    backgroundColor: '#aab',
    padding: '1.3rem 7%',
    fontSize: '140%',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-between'
}




function Header() {
    return (
        <>
            <header style={styles}>
                <h1>Jake Wallace</h1>
                <NavBar />

            </header>
        </>
    )
}

export default Header