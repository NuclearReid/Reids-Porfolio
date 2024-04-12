import { Link, useLocation} from 'react-router-dom';

function NavTabs(){
    const currentPage = useLocation().pathname;
    
    return (
        <ul className = "nav nav-tabs navBar">
            <li className="nav-item">
            <Link
                to='/'
                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                Home!
            </Link>
            </li>
            <li>
            <Link
                to='/about'
                className={currentPage === '/about'? 'nav-link active': 'nav-link'}
                // className='nav-link active'
                >
                    About Me!
            </Link>
            </li>
            <li>
            <Link
                to='/projects'
                className={currentPage === '/projects'? 'nav-link active': 'nav-link'}
                // className='nav-link active'
                >
                    My projects
            </Link>
            </li>
            <li>
            <Link
                to='/contact'
                className={currentPage === '/contact'? 'nav-link active': 'nav-link'}
                // className='nav-link active'
                >
                    Contact me!
            </Link>
            </li>
        </ul>
    );

}

export default NavTabs;