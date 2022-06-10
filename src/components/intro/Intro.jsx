import "./intro.css";
import Me from "../../img/me.png";
import { intro } from "../../data";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">HI THERE 👋 I'M</h2>
          <h1 className="i-name">{intro.name}</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">{intro.titles.t1}</div>
              <div className="i-title-item">{intro.titles.t2}</div>
              <div className="i-title-item">{intro.titles.t3}</div>
              <div className="i-title-item">{intro.titles.t4}</div>
            </div>
          </div>

          <p className="i-desc">{intro.desc}</p>
          <button
            className="i-button"
            onClick={() => (window.location = "#contact")}
          >
            Hire Me
          </button>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
