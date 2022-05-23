import React from "react";

const Contact = () => {
  return (
    <div className="contact-section bg-gray-800 mx-auto my-24">
      <div className="inner-width">
        <h1 className="text-2xl font-bold text-accent mb-4">
          Get in touch with us
        </h1>
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea rows="1" placeholder="Message" className="message"></textarea>
        <button className="btn btn-accent">Get in touch</button>
      </div>
    </div>
  );
};

export default Contact;
