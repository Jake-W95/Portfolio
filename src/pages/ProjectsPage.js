import React from "react";
import ProjectGen from '../components/projectsGen';

const styles = {
    width: '80%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns : '1fr 1fr'
    // flexDirection: 'column',
    // alignItems:'center'
}



function ProjectPage() {
    return (
        <>
            <section style={styles}>
                <ProjectGen />
            </section>
        </>
    )
}

export default ProjectPage