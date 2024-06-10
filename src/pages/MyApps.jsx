import appData from '../appData.js';

const MAX_APPS = 6;

import Card from '../components/Card.jsx';

export default function Portfolio() {
    return <>
        <article className='container my-3 flex justify-between items-center'>
            <h1><b>My Apps</b></h1>
            <p><i>❆ These are some of my projects ❆</i></p>
            <div className='card-container'>
            {appData.slice(0, MAX_APPS).map((app, index) => (
                <Card key={index} {...app} />
            ))}
            </div>
        </article>
    </>
}
