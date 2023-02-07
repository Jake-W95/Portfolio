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
        backgroundImage: `url(${props.data.imgSrcA})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    const overlayItemStyle = {
        
        backgroundColor: '#008CBA',
        overflow: 'hidden',
        height: isHover ? '100%' : '0%',
        transition: '.5s ease',
        backgroundImage: `url(${props.data.imgSrcB})`,




        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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

                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.7)',
                        padding:'2rem 3rem',
                        height: '100%',
                        width: '100%',
                        fontSize:'120%'
                    }}>

                        <h3>{props.data.name}</h3>
                        <p>{props.data.description}</p>
                        <p>{props.data.technologies}</p>
                        <NavLink to={props.data.link}>{props.data.linkText}</NavLink>
                    </div>
                </div>
            </div>

        </>






    )
}

export default ProjectItem

