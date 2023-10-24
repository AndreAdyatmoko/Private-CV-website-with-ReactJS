import React from "react";
import "./about.css";
import ME from "../../assets/PP.jpg";
import { FiAward } from "react-icons/fi";
import { MdGpsFixed } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>Work as Backend Developer in Redhunter</small>
            </article>

            <article className="about_card">
              <MdGpsFixed className="about_icon" />
              <h5>Skill</h5>
              <small>JavaScript</small>
              <br />
              <small>React Js</small>
              <br />
              <small>Node Js</small>
              <br />
              <small>Express Js</small>
              <br />
              <small>MySQL</small>
            </article>

            <article className="about_card">
              <BiShoppingBag className="about_icon" />
              <h5>Project</h5>
              <small>1. Build FrontEnd Blog Apps</small>
              <br />
              <small>2. Build BackEnd Blog Apps</small>
              <br />
              <small>3. Build FullStack Cashier App</small>
            </article>
          </div>
          <p>
            Above are examples of some of the projects I made during my training
            period, for more details I will attach them on the next page!
          </p>

          <a href="#contact" className="btn btn-primary">
            Talk about it
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
