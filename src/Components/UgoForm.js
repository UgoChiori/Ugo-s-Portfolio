import React from "react";
import "./ugoform.css"; // Import your CSS file for styling

const UgoForm = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-heading">Contact Me</h2>
        <form action="mailto:ugochiori@gmail.com" method="post" className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="form-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UgoForm;