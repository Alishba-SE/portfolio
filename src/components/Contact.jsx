// src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rn1u12q", // ✅ Your Service ID
        "template_8b5fuaf", // ✅ Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "TVam39fxVWU5vBfkO" // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message ❌. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section className="contact-section py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      {/* Contact Info */}
      <div className="contact-info text-center mb-8">
        <p>
          Email:{" "}
          <a
            href="mailto:alishbaqureshi593@gmail.com"
            className="accent-text"
          >
            alishbaqureshi593@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+923334989368" className="accent-text">
            +92 3334989368
          </a>
        </p>
        <p>Location: Islamabad, Pakistan</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-textarea"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="primary-button">
          Send Message
        </button>
      </form>

      {/* Status Message */}
      {status && <p className="text-center mt-4">{status}</p>}
    </section>
  );
};

export default Contact;
