import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <nav>
            <div className="nav-left">Spark! BookPals</div>
            <div className="nav-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}