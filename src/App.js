import React from 'react'
import "./App.css"


const App = () => {
  return (
    <div className="cv-container">
      <header>
      <img src="/Awais/Awais.jpeg" alt="Profile" className="profile-image" />
        <h1>Awais Ahmad</h1>
        <h2>Web Developer</h2>
      </header>
      <section className="About me">
        <h3>About me</h3>
        <p>
          I am a passionate web developer with experience in building
          responsive and user-friendly web applications using modern
          technologies like React.js, HTML, CSS, and JavaScript.
        </p>
      </section>
      <section className="experience">
        <h3>Work Experience</h3>
        <div className="experience-item">
          <h4> I have Experience in Web Dev because i work online like freelancing and fiver.
          </h4>
          <p>
          A dedicated and passionate Computer Science student with extensive experience in web development, particularly with the MERN stack. Proven track record in freelancing and project delivery on platforms like Fiverr. Skilled in full-stack development, database management, and cybersecurity. Aspiring to work in FAANG companies while continually enhancing technical skills and knowledge.
            <br/>
            - Developed and maintained multiple web applications using React.js
            and Node.js.
            <br />
            - Collaborated with cross-functional teams to design and implement
            new features.
          </p>
        </div>
        <div className="experience-item">
          <h3>Web Developer</h3>
          <p>
            - Designed and developed responsive websites for clients using HTML,
            CSS, and JavaScript.
            <br />
            - Conducted code reviews and provided technical guidance to junior
            developers.
          </p>
        </div>
      </section>
      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <p>Bachelor of Computer in Computer Science - University of Managment & technology (2020-24)</p>
        </div>
      </section>
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
      </section>
    </div>
  );
}


export default App
