import appData from '../appData.js';

const MAX_APPS = 3;

import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Portfolio() {
    return <>
        <article>
            <h1><b>Portfolio</b></h1>
            <p><i>❆ These are some of my projects ❆</i></p>
            <div className='card-container'>
            {appData.slice(0, MAX_APPS).map((app, index) => (
                <Card key={index} {...app} />
            ))}
            </div>
        </article>
        <section className='m-3'>
            <Footer/>
        </section>
    </>
}