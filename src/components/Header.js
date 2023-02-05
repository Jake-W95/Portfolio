import React from "react";

const styles = [
    {
        //Wrapper
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#aab',
        padding: '1.3rem 7%',
        textDecoration: 'none',
        fontSize: '130%',
        fontFamily: 'Bahnschrift'
    },
  
]

function Header () {
    return (
        <>
        <header style={styles[0]}>
            <h1>Jake Wallace</h1>
        </header>
        </>
    )
}

export default Header