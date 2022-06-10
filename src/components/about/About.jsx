import { about } from "../../data";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src="https://drive.google.com/uc?id=13nYvyqe-2Rip_l0544CXtNo7Plu86O0j"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title-0">
          Who I am <span></span>
        </h1>
        <h1 className="a-title">About Me</h1>

        <p className="a-desc">
          I’m Shubhamsinh Rahevar, a professional and talented software
          developer with front-end & back-end development skills. I am
          passionate about leveraging my diverse backgrounds to decipher
          challenging problems and create delightful experiences. I honed my
          skills in web development, mobile development and designing.
        </p>
        <p className="a-desc">
          I develop websites with HTML, CSS and JavaScript. I have top skills in
          using frameworks like React and Laravel.
        </p>
        <p className="a-desc">
          Being a diligent, hardworking and result oriented, I always work
          towards achieving best result on each project I lay my hands on.
        </p>

        <a href={about.resumeLink} target="_blank" rel="noreferrer">
          <button className="a-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default About;
