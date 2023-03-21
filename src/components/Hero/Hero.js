import { motion } from 'framer-motion'

import '../Hero/Hero.css'
import mugshot from '../../images/Headshot.jpg'



function Hero() {
    return (
        <>
            <section className='heroSection page'>
                <motion.div className='heroTextBox'
                initial={{x:-750}}
                animate={{x:0}}
                transition={{
                    type: 'spring',
                    duration:0.9
                }}
                
                >
                    <div className='heroHeaders'>
                        <h1 id='heroTitle'>Jake Wallace </h1>
                        <p className='heroText'>
                            Passionate and technically minded, I always strive to deliver the best possible product. With a hunger to develop both impeccable applications and my own skills, I am constantly learning new languages and abilities. </p>
                        <p className='heroText'>
                            Having recently completed a Front-End Web Development course provided by edX & Birmingham University, I am comfortable working in the following languages:
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>Javascript ES6</li>
                                <li>JQuery</li>
                                <li>SASS</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </p>
                    </div>

                </motion.div>

                <motion.img src={mugshot} alt="That'd be me" width={'auto'} height={'75%'}
                initial={{x: 750}}
                animate={{x:0}}
                transition={{
                    type: 'spring',
                    duration:0.9
                }}
                />
            </section>
        </>
    )
}
export default Hero