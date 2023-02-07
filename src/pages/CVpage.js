import CVBackground from '../images/CV.jpg'

const row = {
    display: 'flex'
}

function CVPage() {
    return (
        <>
            <section style={row}>
                <div style={{
                    width: '50%',
                    height: '100%',
                    fontSize:'300%',
                    boxSizing:'border-box',
                    paddingLeft:'3rem',
                    backgroundColor:'#82829b'
                    
                }}>
                    <h1>My Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>BootStrap</li>
                        <li>JQuery</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Soft Skills</li>
                    </ul>
                </div>

                <div style={{
                    width: '50%',
                    height: '600px',
                    // backgroundColor:'red',
                    backgroundImage: `url(${CVBackground})`,
                    backgroundSize: 'cover'
                }}>
                    <a href='https://drive.google.com/file/d/16YQ52bzso9mEOpAN9IDrVfSJ9cfivs9h/view?usp=sharing'>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h1 style={{
                               fontSize:'400%'
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