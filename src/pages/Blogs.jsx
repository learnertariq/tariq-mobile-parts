import React from "react";
import QuestionCard from "../components/Blogs/QuestionCard";
import "../styles/Blogs.css";

const data = [
  {
    q: "Difference between JavaScript and NodeJs",
    img: "",
    a: [
      "JavaScript is a programming language running in any browser with the power of browser engine. And NodeJs is a JavaScript runtime engine.",
      "JavaScript runs on the client side. But NodeJs is used to create backend for the client.",
      "JavaScript runs on most of the modern browser like Google Chrome, Mozilla Firefox, Apple Safari, Opera, Dolphin Browser etc. But Nodejs uses Google Chrome's V8 engine to parse the JavaScript code to run outside of the browsers and mostly on the servers.",
      " Using JavaScript you can add HTML and CSS on the DOM. But using Nodejs you can create API to play with data from the server.",
      "Angular, React.js, Vue.js, Ember.js, Meteor, etc are JavaScript frameworks/libraries. Express.js, Kao.js, Socket.io, Nest.js, etc are Node.js frameworks.",
      "JavaScript is mainly used to create frontend. But Node.js is mainly used to create backend server.",
    ],
  },
];

const Blogs = () => {
  return (
    <section className="container">
      <h1 className="text-center mt-2 mb-8 text-purple-500 font-bold text-6xl">
        Blogs
      </h1>
      <div className="qnaContainer">
        {data.map((question, index) => (
          <QuestionCard key={index} question={question} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
