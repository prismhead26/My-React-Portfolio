import Footer from '../components/Footer';

export default function Home() {
    return <>
            <div className='container flex'>
                <h1>Home</h1>
                <p>This is the home page</p>
            </div>
            <div className='mx-3'>
                <Footer/>
            </div>
        </>
}