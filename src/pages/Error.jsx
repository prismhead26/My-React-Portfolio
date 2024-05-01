import { Link, useRouteError, useLocation } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)
    const currentPage = useLocation().pathname;

    return (
        <div id="error-message">
            <h1>Oops</h1>
            <p>Sorry, we could not find this page. But do not worry, you can find plenty of other things on my 
                <Link style={{}} to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                    <u>Home</u>
                </Link>
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )

}