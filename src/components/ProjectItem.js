import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from 'react'

// import '../globalStyles.css'

function ProjectItem(props) {
    const [isHover, setIsHover] = useState(false);
    const mouseEnter = () => {
        setIsHover(true);
    }
    const mouseLeave = () => {
        setIsHover(false)
    }

    const projectItemStyle = {
        height: '20rem',
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
        backgroundImage: `url(${props.data.imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const overlayItemStyle = {
        padding: isHover ? '4rem 2rem': '0',
        backgroundColor: '#008CBA',
        overflow: 'hidden',
        height: isHover ? '100%' : '0%',
        transition: '.5s ease',
        backgroundImage:`url(${props.data.imgSrc2})`
        // height: '0%' 
    }

    return (
        <>

            <div className='projectItem'
                style={projectItemStyle}
                onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            >

                <div 
                className='overlay' 
                style={overlayItemStyle}
                                >                     
                
                    <h3>{props.data.name}</h3>
                    <p>{props.data.description}</p>
                    <p>{props.data.technologies}</p>
                    <NavLink to={props.data.link}>{props.data.linkText}</NavLink>
                </div>
            </div>








        </>






    )
}

export default ProjectItem

