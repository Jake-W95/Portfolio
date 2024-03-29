import ProjectItem from './ProjectItem'
import projectArray from '../../projectClasser'

// console.log(ProjectItem)
function ProjectSection(props) {
    return (
        <>
            {projectArray.map(
                (project, i) => {
                    // console.log(i)
                    return (
                        <ProjectItem key={i}  index={i}data={project} hoverText={props.hoverText} textData={props.textData} />
                    )
                }
            )
            }
        </>
    );
}
export default ProjectSection