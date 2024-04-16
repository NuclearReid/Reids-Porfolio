import { Link } from 'react-router-dom';

export default function NavTabs(){
    
    return (
        <nav className="navbar fixed-top justify-content-center"
            id="navBarDiv">
            <ul className="nav nav-tabs navBar text-center justify-content-center rounded-pill px-3 py-1"
            id="navBarUl">
                <li className="nav-item">
                    <Link to='/' id="nav-link" className="nav-link rounded-pill">
                        Home!
                    </Link>
                </li>
                {/* <li>
                    <Link to='/about' id="nav-link" className="nav-link rounded-pill">
                        About Me!
                    </Link>
                </li> */}
                <li>
                    <Link to='/projects'id="nav-link" className="nav-link rounded-pill">
                        My projects!
                    </Link>
                </li>
                <li>
                    <Link to='/contact'id="nav-link" className="nav-link rounded-pill">
                        Contact me!
                    </Link>
                </li>
            </ul>
        </nav>
    );
}