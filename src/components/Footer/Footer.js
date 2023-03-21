import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'

import '../Footer/Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='row'>
                <p>Jake Wallace</p>
                <div className='logos row'>

                    <motion.div whileHover={{ y: -12, scale: 1.4 }}>
                        <Link to='https://github.com/Jake-W95'>
                            <BsGithub size={'1.7em'} />
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ y: -12, scale: 1.4 }}>
                    <Link to='https://www.linkedin.com/in/jw-fed/'>
                        <BsLinkedin size={'1.7em'} />
                    </Link>
                    </motion.div>

                </div>
            </footer>

        </>
    )
}


export default Footer