import React from 'react'
import { NavLink } from "react-router-dom";

const styles = {
    width: '40%',
    backgroundColor: '#388',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between'
}
function projectItem(props) {
    return (
        <>
            <section className='projectItems' style={styles}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.description}</p>
                    <p>{props.data.technologies}</p>
                    <NavLink to={props.data.link}>{props.data.linkText}</NavLink>
                </div>


                <img src={props.data.imgSrc} style={{width:'35%'}}></img>


            </section>

         
        </>






    )
}

export default projectItem

