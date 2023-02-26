function ProjectText(textData) {

    if (textData.textData === undefined) {
        return (
            <></>
        )
    }
    if (textData.textData !== undefined) {
        // console.log('hello', textData)
        
        let projectName = textData.textData.name;
        let Tech = textData.textData.technologies;
        let description = textData.textData.description
        return (

            <section className="projectText">
                
                <h1>{projectName}</h1>

                <div className="techUsed">
                    <h2>Technologies used: </h2>
                    <ul>
                        {Tech.map((tech, i) => {
                            return (
                                <li key={i}>{tech}</li>
                            )
                        })}
                    </ul>
                </div>
                <p>{description}</p>
            </ section>
        )
        
    }





}
export default ProjectText