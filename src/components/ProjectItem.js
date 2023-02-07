import React from 'react'
import { NavLink } from "react-router-dom";

// const styles = {
//     width: '70%',
//     height:'15rem',
//     backgroundColor: '#aab',
//     padding: '1.3rem',
//     border: '0.3rem grey solid',
//     margin: '.5rem',
//     display: 'grid',
//     // justifyContent: 'space-between'
// }
function projectItem(props) {
    return (
        <>

            <div
                style={{
                    // width: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '1rem',
                    padding: '4rem 2rem',
                    backgroundImage: `url(${props.data.imgSrc})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <h3>{props.data.name}</h3>
                <p>{props.data.description}</p>
                <p>{props.data.technologies}</p>
                <NavLink to={props.data.link}>{props.data.linkText}</NavLink>
            </div>








        </>






    )
}

export default projectItem

