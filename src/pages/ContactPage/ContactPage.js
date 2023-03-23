import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiJquery, SiReact, SiNodedotjs } from 'react-icons/si'

import ContactForm from './ContactForm'
import './ContactPage.css'


function Contact() {

    return (

        <section className="page row">
            <motion.section className='contactContainer'
                initial={{ x: -750 }}
                animate={{ x: 0 }}
                transition={{
                    type: 'spring',
                    duration: 0.9
                }}>


                <div className='list'>
                    <h2>Please get in contact with me if you have any queries using the contact form, emailing me directly or through Linkedin and Github</h2>
                    <ul>
                        <li className="contact lightText"><b className="lightText">Email: </b>jakewallace368@gmail.com</li>
                        <li className="contact lightText"><a href="https://github.com/Jake-W95" ><b className="lightText">GitHub</b></a></li>
                        <li className="contact lightText"><a href="https://www.linkedin.com/in/jake-wallace-b2b85a25a/"><b className="lightText">Linkedin</b></a></li>
                    </ul>
                </div>
                <div className="formDiv">
                    <ContactForm />
                </div>

                {/* </div> */}

            </motion.section>

            <motion.section className='CVContainer row'

                initial={{ x: 750 }}
                animate={{ x: 0 }}
                transition={{
                    type: 'spring',
                    duration: 0.9
                }}>
                <div className='CVSkills'>
                    <h1 >My Skills</h1>
                    <ul >
                        <li><div className='row CVBP'><p>HTML</p> <SiHtml5 size={'2em'} className="techLogo" /></div></li>
                        <li><div className='row CVBP'><p>CSS</p> <SiCss3 size={'2em'} className="techLogo" /></div></li>
                        <li><div className='row CVBP'><p>JavaScript</p> <SiJavascript size={'2em'} className="techLogo" /></div></li>
                        <li><div className='row CVBP'><p>BootStrap</p> <SiBootstrap size={'2em'} className="techLogo" /></div></li>
                        <li><div className='row CVBP'><p>JQuery</p> <SiJquery size={'2em'} className="techLogo" /></div></li>
                        <li><div className='row CVBP'><p>React</p> <SiReact size={'2em'} className="techLogo" /></div></li>
                        <li><div className='row CVBP'>Node<SiNodedotjs size={'2em'} className="techLogo" /></div></li>

                    </ul>
                </div>

                <div className='CVLinkContainer'>
                    <div className='CVLink'>
                        <Link to='https://drive.google.com/file/d/1OrYMwmh4oVTYN0RRZ7ALqUdDwR-MJ0vb/view?usp=sharing'>
                            <h1>Take a look at my CV</h1>
                        </Link>
                        <Link to='https://github.com/Jake-W95'><h1>My Github</h1> </Link>
                        <Link to='https://www.linkedin.com/in/jw-fed/'>
                            <h1>Or my Linkedin</h1>
                        </Link>
                    </div>
                </div>


            </motion.section>
        </section>

    )
}

export default Contact