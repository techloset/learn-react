import { Link } from "react-router-dom";
export default function NavBar() {
    return(
      <div>
          <Link to="/">Company Logo</Link>
          <Link to="/"> Home</Link>
          <Link to="/company">Company</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/table">table</Link>
      </div>
    )
}