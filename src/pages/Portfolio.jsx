const test = {
    title: "title",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
    git: "test"
}

import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Portfolio() {
    return <>
        <div>
            <h1>Portfolio</h1>
            <p>These are some of my projects</p>
            <div className='card-container'>
                <Card {...test} />
                <Card {...test} />
                <Card {...test} />
                <Card {...test} />
                <Card {...test} />
                <Card {...test} />
            </div>
        </div>
        <div className='m-3'>
            <Footer/>
        </div>
    </>
}