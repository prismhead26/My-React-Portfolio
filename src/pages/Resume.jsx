// resume component with a download resume button
export default function Resume() {
    return (
        <section className='container flex'>
            <h1><b>Resume</b></h1>
            <p>This is the resume page</p>
            <a href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf">
                <button 
                    className="custom-btn btn btn-primary">Download Resume
                </button>
            </a>
        </section>
    )
}