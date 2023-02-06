import React from "react";
import background from '../../src/images/Tree.JPG'

const col = {
    display: 'flex',
    flexDirection: 'column'

}
const row = {
    display: 'flex'
}

function Hero() {
    return (
        <>
        <section style={{ 
            height: '50rem',
            
            backgroundImage:`url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '10% 100%'
            
            }}>
            <h1>Jake Wallace hi Web Deveopment</h1>
            <div style={row}>
                <div style={col}>
                <h3>Welcome to my portfolio</h3>
                <p>brand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statementbrand statement</p>
                </div>
<h1></h1>

            </div>




        </section>

        </>
    )
}

export default Hero