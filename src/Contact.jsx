import React, { useRef, useState } from "react";
import "./CSS/Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6vsca2k', 'template_dkjp5yl', form.current, 'YxMaui8TI_I9jfpAO')
      .then((result) => {
        console.log(result.text);
        setMessage("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        setMessage(`Error: ${error.text}`);
      });
  };

  return (
    <>
      <div className="Contact-main">
        <div className="heading">Contact</div>
        <div className="first">
          <div className="message">
            <h1 className="head">Let's Chat</h1>
            <article>
              Whether you have a question, want to start a project, or simply want to connect.
            </article>
            <br />
            <article>Feel free to send me a message from the contact form.</article>
            <br />
           <p>You can also reach me at: <a href="mailto:naroderahul2002@gmail.com"><strong>naroderahul2002@gmail.com</strong></a></p>

          </div>
        </div>
        <div className="second">
          <div className="contact-form-container">
            {message && <h2 className={`message ${message.includes("Error") ? "error" : "success"}`}>{message}</h2>}
            <h2>Contact</h2>
            <form ref={form} onSubmit={sendEmail}>
              {/* This field will map to {{from_name}} */}
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="from_name"  // Pass this value to {{from_name}} in the template
                required
              />

              {/* This field will map to {{from_email}} */}
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="from_email"  // Pass this value to {{from_email}} in the template
                required
              />

              {/* This field will map to {{message}} */}
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"  // Pass this value to {{message}} in the template
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
