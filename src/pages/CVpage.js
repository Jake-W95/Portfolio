import CVBackground from '../images/CV.jpg'
function CVPage() {
    return (
        <>
            <section className='CVContainer'>
                <div className='CVSkills'>
                    <h1 className='lightText'>My Skills</h1>
                    <ul >
                        <li className='lightText'>HTML</li>
                        <li className='lightText'>CSS</li>
                        <li className='lightText'>JavaScript</li>
                        <li className='lightText'>BootStrap</li>
                        <li className='lightText'>JQuery</li>
                        <li className='lightText'>React</li>
                        <li className='lightText'>Node</li>
                        
                    </ul>
                </div>

                <div className='CVLinkContainer'>
                    <a href='https://drive.google.com/file/d/1tszbGTCQGoQh1AdBqDJDm64oKOSWKVta/view?usp=sharing'>
                        <div className='CVLink'>
                            <h1 style={{
                                // fontSize: '400%'
                            }}>
                                Take a look at my CV</h1>
                        </div>
                    </a>
                </div>

            </section>


        </>

    )
}

export default CVPage