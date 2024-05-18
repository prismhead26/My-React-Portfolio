import Profile from "../assets/profile.jpg";

// About component to display information about the developer
export default function About() {
// image style
const myStyle = {
    backgroundImage: `url(${Profile})`,
    backgroundSize: "cover",
    borderRadius: "50%",
    border: "2px solid black",
    height: "300px",
    boxShadow: "0 0 20px 10px rgba(0, 0, 0, 0.5)",
};


  return (
    <>
      <article className="container mt-3 flex justify-between items-center">
        <h1>
          <b>
            <i>About Me</i>
          </b>
        </h1>
        <div className="row text-center my-3">
          <div className="image-div col-md-6" style={myStyle}></div>
          <div className="col-md-6">
            <p className=" mx-3 text-center p-2 h3">
              <b>
                <i>
                  Hello, my name is Aiden. I&apos;ve lived in Colorado most my
                  life and consider it my home. I enjoy weightlifting, hiking
                  and riding my motorcycle. I take my work seriously and strive
                  to keep learning programming. My inspiration with programming
                  is with solving problems. I&apos;m excited for a new chapter
                  in my life and applying my skills. As I begin this new
                  journey, I can&apos;t wait to be working on a team as we
                  support our employer and customers. With multiple strategies
                  and ways to build code, I look forward to the process of
                  gaining more knowledge and success.
                </i>
              </b>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
