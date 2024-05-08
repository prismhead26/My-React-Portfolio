// variables for each card is passed is title, image, a tag link to live site
export default function Card({ title, image, link, git }) {
    return (
        <div className="card-content">
            <a className="card-title" href={link}>{title}</a><a className="card-icon px-3" href={git}><i className="bi bi-github"></i></a>
            <img src={image} alt={title} />
        </div>
    )
}