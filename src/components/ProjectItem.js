import React from 'react'
import { NavLink } from "react-router-dom";

const styles = {
    width: '70%',
    height:'15rem',
    backgroundColor: '#aab',
    padding: '1.3rem',
    border: '0.3rem grey solid',
    margin: '.5rem',
    display: 'flex',
    justifyContent: 'space-between'
}
function projectItem(props) {
    return (
        <>
            <section className='projectItem' style={styles}>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.description}</p>
                    <p>{props.data.technologies}</p>
                    <NavLink to={props.data.link}>{props.data.linkText}</NavLink>
                </div>


                <img src={props.data.imgSrc} style={{width:'35%', height:'100%'}}></img>


            </section>

         
        </>






    )
}

export default projectItem

