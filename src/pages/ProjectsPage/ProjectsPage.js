
import ProjectGen from '../../components/projectsGen';
import ProjectText from '../../components/ProjectText';
import '../ProjectsPage/ProjectsPage.css'


function ProjectPage() {
    return (
        <section className='page projectPage'>
            <section className="projectContainer">
                <ProjectGen />
            </section>
            <div className="projectDescription">
                
                <ProjectText />
                
            </div>
        </section>
    )
}

export default ProjectPage