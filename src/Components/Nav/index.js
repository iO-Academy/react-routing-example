import {NavLink} from "react-router-dom";
import './nav.css';
const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
        </nav>
    )
}

export default Nav;