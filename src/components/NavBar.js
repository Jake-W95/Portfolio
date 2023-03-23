import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function NavBar() {
    
    return (
        <>
            <nav>
                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    className='link'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link to={'/'} >Home </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='link'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link to={'/projects'} >Projects</Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4 }}
                    className='link'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link to={'/contact'} >Contact</Link>
                    </motion.div>
                </motion.div>

                {/* <motion.div
                    initial={{ y: -200 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6 }}
                    className='link'>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link to={'/CV'} >My CV </Link>
                    </motion.div>
                </motion.div> */}

            </nav>
        </>
    )
}

export default NavBar
