import React from "react";
import "./Contact.css";
import image_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
   const onSubmit = async (event) => {
     event.preventDefault();
     const formData = new FormData(event.target);

     formData.append("access_key", "b84c8dfa-f8d5-4180-b8f7-7f1ff9fc0f96");

     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);

     const res = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
       },
       body: json,
     }).then((res) => res.json());

     if (res.success) {
       alert(res.message);
     }
   };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={image_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm Currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>aourfidev@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Maroc,Sale</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>0619250487</p>
            </div>
          </div>
              </div>
              <form onSubmit={onSubmit} className="contact-right">
                  <label htmlFor="">Your Name</label>
                  <input type="text" placeholder="Enter your name" name="name" />
                  <label htmlFor="">Your email</label>
                  <input type="email" placeholder="Enter your Email" name="email" />
                  <label htmlFor="">Write your Message Here</label>
                  <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                  <button type="submit" className="contact-submit">Submit now</button>
              </form>
      </div>
    </div>
  );
};

export default Contact;
