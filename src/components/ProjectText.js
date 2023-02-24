import projectArray from "../projectClasser";
// console.log(projectArray)
function projectText() {
    return (
        <section className="projectText">
            <h1>{projectArray[0].name}</h1>

            <div className="techUsed">
                <h2>Technologies used: </h2>
                <ul>
                    {projectArray[0].technologies.map((tech, i) => {
                        return (
                            <li key={i}>{tech}</li>
                        )})}
                </ul>
            </div>
            <p>{projectArray[0].description}</p>

        </ section>
    )
}
export default projectText