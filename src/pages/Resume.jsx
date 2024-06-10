import ResumePdf from "../assets/ResumeOfficial.pdf";
import CoverLetterPdf from "../assets/CoverLetter.pdf";
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
        <a href={CoverLetterPdf} download="CoverLetter.pdf">
          <button className="custom-btn btn btn-primary text-center">
            Download Cover Letter
          </button>
        </a>
        <br />
        <a href={ResumePdf} download="ResumeOfficial.pdf">
          <button className="custom-btn btn btn-primary text-center mt-3">
            Download Resume
          </button>
        </a>
        <br />
        {/* <section className="py-5 container flex justify-between items-center"> */}
        <CoverLetter />
        {/* <h4><b><i>Front End Skills</i></b></h4>
          <ul className="no-bullets">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Express</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>MVC</li>
          </ul>
          <h2 className="my-3"><b><i>Back End Skills</i></b></h2>
            <ul className="no-bullets">
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>REST</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>APIs</li>
              <li>GraphQl</li>
              <li>Unit Testing</li>


            </ul> */}
        {/* </section> */}
      </section>
    </>
  );
}
