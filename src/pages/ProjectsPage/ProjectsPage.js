
import ProjectGen from '../../components/Project/ProjectsGen';
import ProjectText from '../../components/Project/ProjectText';
import '../ProjectsPage/ProjectsPage.css'

import { useState, useEffect } from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';


function ProjectPage() {
    const [textData, setTextData] = useState(undefined);
    const hoverText = (textData) => setTextData(textData);




    // console.log(textData)
    return (
        <section className='page projectPage'>
            <section className="projectContainer">
                <ProjectGen hoverText={hoverText} textData={textData}/>
            </section>
            {/* <h2 style={{ color: 'white' }}>{textData}</h2> */}
            <div className="projectDescription" >
                <ProjectText textData={textData} />

            </div>

        </section>
    )
}

export default ProjectPage