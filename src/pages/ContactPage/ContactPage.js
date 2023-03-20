import ContactForm from './ContactForm'
import './ContactPage.css'


function Contact() {
 
    return (
        <section className="page contactContainer">
        <div className="formDiv">
            <ContactForm />
            </div>

            {/* <div className='shapesAndList'> */}
               
                <div className='list'>
                    <h2>Please get in contact with me if you have any queries using the contact form, emailing me directly or through Linkedin and Github</h2>
                    <ul>
                        <li className="contact lightText"><b className="lightText">Email: </b>jakewallace368@gmail.com</li>
                        <li className="contact lightText"><a href="https://github.com/Jake-W95" ><b className="lightText">GitHub</b></a></li>
                        <li className="contact lightText"><a href="https://www.linkedin.com/in/jake-wallace-b2b85a25a/"><b className="lightText">Linkedin</b></a></li>
                    </ul>
                </div>
            {/* </div> */}

        </section>

    )
}

export default Contact