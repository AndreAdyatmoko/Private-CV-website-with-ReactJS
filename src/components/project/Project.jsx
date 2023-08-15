import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './portfolio.css';

const Project = () => {
  const projects = [
    {
      title: "Read Particle",
      description: "This is my first frontend project, in this project I am in charge of designing, fetching an API for a blog website, where the server itself has been provided by the Purwadhika team.",
      image: require("../../assets/Screenshot (126).png"),
      link: "https://github.com/AndreAdyatmoko/Web-SiteBlok-Partikel"
    },
    {
      title: "The Majestic Mixer",
      description: "This is my first project to as Fullstack developer, in this project I and My friends create website called The Majetic Mixer, this is like a cahsier App, we build system have 2 role, first role called Admin and secondly called User, if you want to know more you can contact me or visit link below",
      image: require("../../assets/WhatsApp Image 2023-08-16 at 00.00.04.jpeg"),
      link: "https://github.com/fahrurrizky/group4"
    },
  ];

  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {projects.map((project, index) => (
          <article className='portfolio_item' key={index}>
            <div className='portfolio_item-image'>
              <Carousel>
                <div>
                  <img src={project.image} alt="Project Thumbnail" />
                </div>
                {/* Tambahkan gambar-gambar tambahan dalam carousel */}
              </Carousel>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <br />
            <a href={project.link} className="btn btn-primary" style={{ marginBottom: "1rem" }}>View Project</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
