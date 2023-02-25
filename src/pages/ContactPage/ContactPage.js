import './ContactPage.css'

function Contact() {
    return (
        <section className="page contactContainer">

            <div className='formHolder'>
                <div className="contactForm">
                    {/* <h1 className="lightText">Contact Me</h1> */}
                    <form className="col">
                        <input type='text' placeholder='Enter Your Name' />
                        <input type='text' placeholder='Enter Your Email Address' />
                        <textarea placeholder='Enter Message' cols='30' rows='10' />
                    </form>
                    
                </div>
            </div>

            <div className='shapes'>
            <div className='list'>
                <ul>
                    <li className="contact lightText"><b className="lightText">Email: </b>jakewallace368@gmail.com</li>
                    <li className="contact lightText"><a href="https://github.com/Jake-W95" ><b className="lightText">GitHub</b></a></li>
                    <li className="contact lightText"><a href="https://www.linkedin.com/in/jake-wallace-b2b85a25a/"><b className="lightText">Linkedin</b></a></li>
                </ul>
            </div>
            </div>

        </section>

    )
}

export default Contact