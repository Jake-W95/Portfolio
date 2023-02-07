import CVBackground from '../images/CV.jpg'

const row = {
    display: 'flex',
    height:'100px'
}
// const text = {color:'rgb(200,200,200)'}

function CVPage() {
    return (
        <>
            <section style={row}>
                <div style={{
                    width: '50%',
                    // height: '9vh',
                    fontSize: '300%',
                    boxSizing: 'border-box',
                    paddingLeft: '3rem',
                    backgroundColor: '#474750',


                }}>
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

                <div style={{
                    width: '50%',
                    height: '100vh',
                    // backgroundColor:'red',
                    backgroundImage: `url(${CVBackground})`,
                    backgroundSize: 'cover'
                }}>
                    <a href='https://drive.google.com/file/d/16YQ52bzso9mEOpAN9IDrVfSJ9cfivs9h/view?usp=sharing'>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(10,120,150,0.7)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h1 style={{
                                fontSize: '400%'
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