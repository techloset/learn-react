import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/company">company </Link>
        <Link to="/contact">contact </Link>
        <Link to="/company/portfolio"> company portfolio </Link>
    
        </div>
    )
}

export default NavBar;