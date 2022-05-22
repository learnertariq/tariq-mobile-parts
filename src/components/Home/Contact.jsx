import React from "react";

const Contact = () => {
  return (
    <div class="contact-section bg-gray-800 mx-auto my-24">
      <div class="inner-width">
        <h1 className="text-2xl font-bold text-accent mb-4">
          Get in touch with us
        </h1>
        <input type="text" class="name" placeholder="Your Name" />
        <input type="email" class="email" placeholder="Your Email" />
        <textarea rows="1" placeholder="Message" class="message"></textarea>
        <button className="btn btn-accent">Get in touch</button>
      </div>
    </div>
  );
};

export default Contact;
