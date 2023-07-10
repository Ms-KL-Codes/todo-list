import { Link } from "react-router-dom";
// use Link component instead of <a> to link between when react-router-dom is installed

function Nav () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Nav;
