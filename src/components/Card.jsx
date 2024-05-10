// Card component is used to display the project cards on the portfolio page
// variables for each card is passed is title, image, a tag link to live site
export default function Card({ title, image, link, git }) {
    return (
        <div className="card-content">
            <a className="custom card-title" href={link}>{title}</a>
            <a className="custom card-icon px-3" href={git}>
                <i className="bi bi-github h1"></i>
            </a>
            <img className="card-image" src={image} alt={title} />
        </div>
    )
}
