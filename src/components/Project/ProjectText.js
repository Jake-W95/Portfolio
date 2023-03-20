// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
function ProjectText(textData) {

    if (textData.textData === undefined) {
        return (
            <></>
        )
    }
    if (textData.textData !== undefined) {

        let projectName = textData.textData.name;
        let Tech = textData.textData.technologies;
        let description = textData.textData.description
        // let link = textData.textData.link
        // let linkText = textData.textData.linkText
        return (
            <section className="projectText" >

                <h1>{projectName}</h1>

                <p>{description}</p>

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

                {/* <Link to={link}><h3>{linkText}</h3></Link> */}
            </ section>
        )

    }





}
export default ProjectText