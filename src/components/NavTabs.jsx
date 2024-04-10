import { Link, useLocation} from 'react-router-dom';

function NavTabs(){
    const currentPage = useLocation().pathname;
    
    return (
        <ul className = "nav nav-tabs">
            <li className="nav-item">
                <Link
                 to='/'
                 className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                 >
                    home
                 </Link>
            </li>
            <li>
            <Link
                 to='/#'
                //  className={currentPage === '#'? 'nav-link active': 'nav-link'}
                className='nav-link active'
                 >
                    Something else
                 </Link>
            </li>
        </ul>
    );

}

export default NavTabs;