const CoverLetter = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">
        My Journey Through the Full Stack Developer Bootcamp at the University
        of Kansas
      </h1>

      <div className="row mt-4 align-items-stretch">
        <div className="col-md-8 d-flex">
          <div className="align-self-center">
            <p>
              I am eager to join a team where my programming skills can be an
              asset, building on my experience from the Full Stack Developer
              Bootcamp at the University of Kansas. This intensive program
              sharpened my technical skills and shaped my professional outlook
              through a comprehensive curriculum covering HTML, CSS, JavaScript,
              Node.js, Express, React, and MongoDB. The hands-on projects,
              especially my iHike project using the Google Maps API in React,
              allowed me to apply responsive design principles and work with
              tools like GraphQL, MongoDB, and Bootstrap to create a MERN stack
              application that simplifies discovering nearby hiking trails. My
              dedication and hard work led to perfect scores and graduating as a
              top student. The bootcamp`&apos;`s collaborative atmosphere and
              exceptional instructors fostered continuous growth and learning. I
              am excited to leverage these skills and knowledge in a team
              setting, ready to tackle new challenges and innovate in the tech
              industry. You can check out the iHike project on GitHub{" "}
              <a href="https://github.com/prismhead26/I-Hike">here</a> and view
              the deployed version{" "}
              <a href="https://i-hike.onrender.com/">here</a>.
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-between">
          <div>
            <h3>Skills</h3>
            <ul>
              <li>Full Stack Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Responsive Design</li>
              <li>API Integration</li>
              <li>Version Control (Git)</li>
              <li>Project Management</li>
              <li>Team Collaboration</li>
              <li>Problem-Solving</li>
            </ul>
          </div>
          <div>
            <h3>Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <h3>Awards</h3>
            <ul>
              <li>
                Top Student Award, University of Kansas Full Stack JavaScript
                Developer Bootcamp
              </li>
              <li>
                4.0 GPA, University of Kansas Full Stack JavaScript Developer
                Bootcamp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
