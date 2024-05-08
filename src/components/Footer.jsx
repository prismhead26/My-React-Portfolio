import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="container my-4 flex justify-between items-center">
            <ul className='items-center flex justify-between'>
                <Link className='custom mx-3' to="https://www.linkedin.com/in/aiden-wahed-a78539227/"><i className="bi bi-linkedin"></i></Link>
                <Link className='custom mx-3' to="https://github.com/prismhead26"><i className="bi bi-github"></i></Link>
                <Link className='custom mx-3' to="https://www.twitter.com/"><i className="bi bi-twitter"></i></Link>
            </ul>
        </footer>
    )
}