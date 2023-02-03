import React from 'react'
import { NavLink } from "react-router-dom";

const styles = {
    width: '40%',
    backgroundColor: '#388',
    padding: '1rem',
    display: 'flex',
    justifyContent:'space-between'
}
function projectItem(props) {
    return (
        <>
            <section className='projectItems' style={styles}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h3>{props.projectName}</h3>
                    <p>{props.projectDescription}</p>
                    <NavLink to={props.projectLink}>{props.projectLinkText}</NavLink>
                </div>


                <img src={props.projectImgSource} style={{width:'25%'}}></img>


            </section>


        </>
    )
}

export default projectItem 