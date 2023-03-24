
import ProjectGen from '../../components/Project/ProjectsGen';
import ProjectText from '../../components/Project/ProjectText';
import '../ProjectsPage/ProjectsPage.css'

import { useState } from 'react';

function ProjectPage() {
    const [textData, setTextData] = useState(undefined);
    const hoverText = (textData) => setTextData(textData);

    return (
        <section className='page projectPage'>
            <section className="projectContainer">
                <ProjectGen hoverText={hoverText} textData={textData} />
            </section>

            <div className="projectDescription" >
                <ProjectText textData={textData} />
            </div>
        </section>
    )
}

export default ProjectPage