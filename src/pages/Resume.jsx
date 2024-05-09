import Footer from "../components/Footer";
// resume component with a download resume button
export default function Resume() {
  return (
    <>
      <section className="container my-3 flex justify-between items-center">
        <h1>
          <b>Resume</b>
        </h1>
        <p>This is the resume page</p>
        <a
          href="../assets/Resume/ResumeOfficial.pdf"
          download="ResumeOfficial.pdf"
        >
          <button className="custom-btn btn btn-primary text-center">
            Download Resume
          </button>
        </a>
      </section>
      <div className="mx-3">
        <Footer />
      </div>
    </>
  );
}
