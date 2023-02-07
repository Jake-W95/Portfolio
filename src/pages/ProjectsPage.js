import React from "react";
import ProjectGen from '../components/projectsGen';

const styles = {
        display: 'flex',
    flexDirection: 'column',
    alignItems:'center'
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