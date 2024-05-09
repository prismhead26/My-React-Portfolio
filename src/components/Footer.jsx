import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="container my-3 flex justify-between items-center">
            <ul className='text-center'>
                <Link className='px-3' to="https://www.linkedin.com/in/aiden-wahed-a78539227/"><i className="bi bi-linkedin h2"></i></Link>
                <Link className='px-3' to="https://github.com/prismhead26"><i className="bi bi-github h2"></i></Link>
                <Link className='px-3' to="https://www.twitter.com/"><i className="bi bi-twitter h2"></i></Link>
            </ul>
            
            <p className='my-3 py-2'>&copy; {new Date().getFullYear()} Aiden Wahed. Confidential and Proprietary. All Rights Reserved.</p>
        </footer>
    )
}