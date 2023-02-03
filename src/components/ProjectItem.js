import React from 'react'
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
                    <a src={props.projectLink}>{props.projectLinkText}</a>
                </div>


                <img src='https://dummyimage.com/300x220/000/fff&text=this+is+an+image' ></img>


            </section>


        </>
    )
}

export default projectItem 