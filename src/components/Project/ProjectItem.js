import { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import '../../pages/ProjectsPage/ProjectsPage.css'

function ProjectItem(props) {
    const [isHover, setIsHover] = useState(false);
    function getText() { props.hoverText(props.data) }

    const mouseEnter = () => {
        setIsHover(true);
        getText()
    }
    const mouseLeave = () => {
        setIsHover(false)
    }

    const projectItemStyle = {
        height: '9em',
        backgroundImage: `url(${props.data.imgSrcA})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    // console.log()
    console.log(props.index)
    return (
        <>
            <motion.div whileHover={{ scale: 1.05 }}>
                <Link to={props.data.link} style={{ height: '9em', width: '100%' }}>
                    <motion.div className='projectItem'
                        style={projectItemStyle}
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                        initial={{ x: -1000 }}
                        animate={{ x: -0 }}
                        transition={{ delay: props.index * 0.1, type: 'spring', stiffness: 50 }}                    >


                        <div className='overlay'>
                            <h2 className='projectName'>{props.data.name}</h2>
                        </div>
                    </motion.div>
                </Link>
            </motion.div>

        </>
    )
}
export default ProjectItem
