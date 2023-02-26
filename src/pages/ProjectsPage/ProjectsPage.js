
import ProjectGen from '../../components/Project/ProjectsGen';
import ProjectText from '../../components/Project/ProjectText';
import '../ProjectsPage/ProjectsPage.css'

import { useState, useEffect } from 'react';


function ProjectPage() {
    const [textData, setTextData] = useState(undefined);
    const hoverText = (textData) => setTextData(textData);

    // console.log(textData.name)
    return (
        <section className='page projectPage'>
            <section className="projectContainer">
                <ProjectGen hoverText={hoverText} />
            </section>
            <div className="projectDescription" >

                <ProjectText textData={textData} />

            </div>

        </section>
    )
}

export default ProjectPage