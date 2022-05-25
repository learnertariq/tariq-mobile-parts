import React from "react";

const QuestionCard = ({ question }) => {
  return (
    <div className="question question-1 mt-4 mb-5 px-2 py-5 lg:p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-first lg:order-last">
          <div className="blog-img-container text-center lg:text-left">
            <img className="blog-img" src={question.img} alt="" />
          </div>
        </div>
        <div className="qna mx-auto">
          <div className="q mb-3">
            <h3 className="text-2xl text-green-700">{question.q}</h3>
          </div>
          <div className="a">
            <ul>
              {question.a.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
