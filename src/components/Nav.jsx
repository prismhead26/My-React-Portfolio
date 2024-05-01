import { Link, useLocation } from 'react-router-dom'

function Nav(){

    const currentPage = useLocation().pathname;

    return (
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white font-bold">React Router V6</h1>
            <ul className="flex nav nav-tabs">
            <li className="mx-2 nav-item">
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
            </li>
            <li className="mx-2 nav-item">
                <Link to="/about" className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
            </li>
            <li className="mx-2 nav-item">
                <Link to='/contact' className={currentPage === '/contact' ? 'nav-list active' : 'nav-list'}>Contact</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default Nav