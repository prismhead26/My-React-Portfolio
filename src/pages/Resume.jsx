import ResumePdf from "../assets/simple_resume.pdf";
import CoverLetter from "../components/CoverLetter";
// resume component with a download resume button
export default function Resume() {
  return (
    <>
      <section className="container my-3 flex justify-between items-center">
        <h1>
          <b>
            <i>Resume</i>
          </b>
        </h1>
        <br />
        <br />
        <a href={ResumePdf} download="simple_resume.pdf">
          <button className="custom-btn btn btn-primary text-center mt-3">
            Download Resume
          </button>
        </a>
        <br />
        <CoverLetter />
      </section>
    </>
  );
}
