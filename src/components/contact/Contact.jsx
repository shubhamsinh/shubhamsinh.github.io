import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { personalDetails } from "../../data";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y8b4ugd",
        "template_rugj2t5",
        formRef.current,
        "LeSWtWwRFu--0Xs6E"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-title">
        <h1 className="a-title-0">Contact Me</h1>
        <h2>Get In Touch</h2>
        <p className="c-desc">
          I am available to work on your projects and bring your ideas to life.
          I am just a click away.
        </p>
      </div>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              {personalDetails.mobile}
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              {personalDetails.email}
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              {personalDetails.location}
            </div>
          </div>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                color: darkMode && "#C4C4C4",
                borderRadius: "50px",
                height: "40px",
                border: darkMode ? "1px solid white" : "1px solid black",
              }}
              type="text"
              placeholder="Full Name"
              name="user_name"
            />
            <input
              className="c-input-1"
              style={{
                color: darkMode && "#C4C4C4",

                border: darkMode ? "1px solid white" : "1px solid black",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className="c-input-1"
              style={{
                backgroundColor: "inherit",
                color: darkMode && "#C4C4C4",
                border: darkMode ? "1px solid white" : "1px solid black",
              }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                color: darkMode && "#C4C4C4",
                border: darkMode ? "1px solid white" : "1px solid black",
              }}
              rows="5"
              placeholder="Enter Your message"
              name="message"
            />
            <button className="c-button">Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
