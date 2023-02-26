import ProjectItem from './ProjectItem'
import projectArray from '../../projectClasser'

// console.log(ProjectItem)
function ProjectSection({hoverText}) {

    return (
        <>
            {projectArray.map(
                (project, i) => {
                    return (
                        <ProjectItem key={i} data={project} onMouseEnter={hoverText(project)}/>
                    )
                }
            )
            }
        </>
    );
}
export default ProjectSection