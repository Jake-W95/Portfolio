
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <NavLink to={'/'} className='link'>Home </NavLink>
                <NavLink to={'/projects'} className='link'>Projects</NavLink>
                <NavLink to={'/contact'} className='link'>Contact</NavLink>
                <NavLink to={'/CV'} className='link'>My CV </NavLink>
            </nav>
        </>
    )
}

export default NavBar
