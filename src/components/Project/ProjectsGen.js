import ProjectItem from './ProjectItem'
import projectArray from '../../projectClasser'

// console.log(ProjectItem)
function ProjectSection() {

    return (
        <>
            {projectArray.map(
                (project, i) => {
                    return (
                        <ProjectItem key={i} data={project} /*onMouseEnter={hoverText(project)}*/ />
                    )
                }
            )
            }
        </>
    );
}
export default ProjectSection