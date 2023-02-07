
import {NavLink} from "react-router-dom";
  
const linkStyle = {
    
    fontSize: '145%',
    fontWeight: 'bold',
    marginLeft: '1.3rem',
}

function NavBar() {
    return (
        <>
            <nav >
                <NavLink to={'/'} style={linkStyle}>Home |</NavLink>
                <NavLink to={'/projects'} style={linkStyle}>Projects |</NavLink>
                <NavLink to={'/'} style={linkStyle}>About Me |</NavLink>
                <NavLink to={'/contact'} style={linkStyle}>Contact |</NavLink>
                <NavLink to={'/CV'} style={linkStyle}>My CV </NavLink>
                
            </nav>

        </>
    )
}

export default NavBar
