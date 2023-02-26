import projectArray from "../../projectClasser";
// console.log(projectArray)
function projectText(textData) {
    console.log(textData.textData.name)
    const projectName = textData.textData.name;
    const Tech = textData.textData.technologies;
    const description = textData.textData.description


    return (
        <section className="projectText">
            <h1>{projectName}</h1>

            <div className="techUsed">
                <h2>Technologies used: </h2>
                <ul>
                    {Tech.map((tech, i) => {
                        return (
                            <li key={i}>{tech}</li>
                        )})}
                </ul>
            </div>
            <p>{description}</p>

        </ section>
    )
}
export default projectText