import "./contact.css";

import React from "react";

const UgoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert("Thank you for your message!");
      }
       else {
        alert("Oops! There was a problem.");
      }
    };
    xhr.send(data);
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} action="mailto" method="post" className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-group-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name
                "
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-group-label"  >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-group-label">
            Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="message"
            name="message"
            placeholder="Enter your message"
          />
        </div>
        <div>
          <input type="submit" className="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default UgoForm;
