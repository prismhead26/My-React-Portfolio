import { Link, useLocation } from 'react-router-dom'

function Nav(){

    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container fluid'>
                <a className="custom navbar-brand" href="/"><b><i>Aiden&apos;s Portfolio</i></b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="custom mx-2 nav-item">
                            <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
                        </li>
                        <li className="custom mx-2 nav-item">
                            <Link to="/portfolio" className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                        </li>
                        <li className="custom mx-2 nav-item">
                            <Link to='/contact' className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                        </li>
                        <li className="custom mx-2 nav-item">
                            <Link to='/resume' className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav