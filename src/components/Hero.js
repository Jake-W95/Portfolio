import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'




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
            <section className='heroSection'>

                <div className="heroTextBox" style={{
                    
                    // marginBottom: '13%'
                }}>
                    <h1>
                        I'm Jake <br></br>
                        I'm a Web Developer</h1>

                    <h4>
                        Welcome to my portfolio,
                        take a look at my work
                    </h4>
                </div>



                <h5  style={{
                    fontSize: '150%',
                    backgroundColor: 'rgba(10,120,150,0.9)',
                    padding: '1rem',
                    borderRadius: '10px'

                }}>Continue to learn more
                </h5>


                <FontAwesomeIcon icon={faCircleChevronDown} size='3x' />




            </section>

        </>
    )
}

export default Hero