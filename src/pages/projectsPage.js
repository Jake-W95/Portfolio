import React from 'react'
import ProjectItem from '../components/ProjectItem'
import ProjectsArray from '../projectClasser'

function ProjectSection() {
    return (
        <>
            <section className='projectSection' >
                {ProjectsArray.map((project, i) =>
                    <ProjectItem
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                        linkText={project.linkText}
                        imgSrc={project.imgSrc}
                         >

                    </ProjectItem>
                )


                }

            </section>


        </>
    )
}

export default ProjectSection