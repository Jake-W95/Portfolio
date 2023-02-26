
import { NavLink } from "react-router-dom";
import { useState } from 'react'

import '../../pages/ProjectsPage/ProjectsPage.css'
import { hover } from "@testing-library/user-event/dist/hover";

function ProjectItem(props) {
    const [isHover, setIsHover] = useState(false);
    const [textData, setTextData] = useState(undefined);
    const hoverText = (textData) => setTextData(textData);
    const mouseEnter = () => {
        setIsHover(true);
hoverText(props.data)
console.log(textData)
    }
    const mouseLeave = () => {
        setIsHover(false)
    }

    const projectItemStyle = {
        height: '10rem',
        // width:'100%',
        display: 'flex',
        flexDirection: 'column',
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
        transition: '.5s ease',
        borderRadius: '10px'
    }


    return (
        <>
            <div className='projectItem'
                style={projectItemStyle}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}>
                <div
                    className='overlay'
                    style={overlayItemStyle}>
                    {/* <div class='overlayText'>
                        <h3>{props.data.name}</h3>
                        <p>{props.data.description}</p>
                        <p>{props.data.technologies}</p>
                        <NavLink to={props.data.link}>{props.data.linkText}</NavLink>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default ProjectItem

