import React from "react";


const styles = [
    {
        //Wrapper
        backgroundColor: '#aab',
        padding: '1.3rem 7%',
        fontSize: '130%',
    },

]

function Header() {
    return (
        <>
            <header style={styles[0]}>
                <h1>Jake Wallace</h1>
            </header>
        </>
    )
}

export default Header