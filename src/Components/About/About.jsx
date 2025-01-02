import React from "react";
import "./About.css";
import theme_paterne from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/ossama.jpeg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_paterne} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p className="p1">
              I'm an experiend Full Stack Developer with over a decade of
              professionel expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious
              organisations,contributing to their success and growth
            </p>
            <p className="p2">
              My passion for FullStack Developer is not only reflected in my
              extensive experience but also in the euthusiam and dedication I
              bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Symfony</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>5+</h1>
          <p>Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>20+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>15+</h1>
          <p>Happy Client</p>
        </div>
      </div>
    </div>
  );
};

export default About;
