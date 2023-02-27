
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react'

import '../../pages/ProjectsPage/ProjectsPage.css'
// import { hover } from "@testing-library/user-event/dist/hover";

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
        height: '10rem',
        margin: '1rem',
        backgroundImage: `url(${props.data.imgSrcA})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '10px',
    }
    const overlayItemStyle = {
        backgroundImage: `url(${props.data.imgSrcB})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: isHover ? '100%' : '0%',
        paddingRight: '5rem',
        overflow: 'hidden',
        transition: '1s ease',
        borderRadius: '10px'
    }

    return (
        <>
            <div className='projectItem'
                style={projectItemStyle}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}>
                <div className='overlay'
                    style={overlayItemStyle}>
                </div>
            </div>
        </>
    )
}
export default ProjectItem
