import React, { useState } from "react";
import './style.css'

export function ContactForm() {
  const [query, setQuery] = useState({
    name: "",
    email: ""
  });
  
  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/04db34b0-ef9a-4157-a011-933a098255c9", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };
  return (
    <div className="ContactForm">
      <form onSubmit={formSubmit}>
        <div className="input-info">
          <div className="group">
            <input
              type="text"
              name="name"
              required
              className="form-control"
              value={query.name}
              onChange={handleParam()}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input
              type="email"
              name="email"
              required
              className="form-control"
              value={query.email}
              onChange={handleParam()}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="group-message">
          <textarea
            type="text"
            name="message"
            required
            className="form-control"
            value={query.message}
            onChange={handleParam()}
          />
          <label htmlFor="message">Message</label>
        </div>
        <button className="submit" type="submit">Send</button>
      </form>
    </div>
  );
}