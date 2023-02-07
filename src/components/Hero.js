import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'


import background from '../../src/images/chess.jpg'

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
                padding: '4rem',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                // paddingBottom: '20px'

            }}>

                <div style={{
                    fontSize: '300%',
                    backgroundColor: 'rgba(10,120,150,0.75)',
                    padding: '2.5rem',
                    borderRadius: '10px',
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



                <h5 style={{
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