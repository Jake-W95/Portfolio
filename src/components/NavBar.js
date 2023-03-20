import { NavLink, Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <Link to={'/'} className='link'>Home </Link>
                <Link to={'/projects'} className='link'>Projects</Link>
                <Link to={'/contact'} className='link'>Contact</Link>
                <Link to={'/CV'} className='link'>My CV </Link>
            </nav>
        </>
    )
}

export default NavBar
