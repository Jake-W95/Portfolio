import { Link } from 'react-router-dom'

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'

import '../Footer/Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='row'>
                <p>Jake Wallace</p>
                <div className='logos row'>
                    <Link to='https://github.com/Jake-W95'>
                        <BsGithub size={'1.7em'} />
                    </Link>
                    <Link to='https://www.linkedin.com/in/jw-fed/'>
                        <BsLinkedin size={'1.7em'} />
                    </Link>
                </div>
            </footer>

        </>
    )
}


export default Footer