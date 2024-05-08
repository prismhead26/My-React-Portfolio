// resume component with a download resume button
export default function Resume() {
    return (
        <div className='container flex'>
            <h1>Resume</h1>
            <p>This is the resume page</p>
            <a href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf">
                <button className="btn btn-primary">Download Resume</button>
            </a>
        </div>
    )
}