import ProjectItem from './components/ProjectItem'

function ProjectSection () {
    return (
        <>
            <section className='projectSection' >
                {ProjectItem.map((project, i) => 
                    <div key={i}>
                        
                    </div>)
                

                }

            </section>
        
        
        </>
    )
}