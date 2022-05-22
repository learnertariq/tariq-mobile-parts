import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import pic from "../assets/ic.webp";

const Review = ({ ratingValue }) => {
  return (
    <div className="review bg-indigo-900 p-3">
      <div className="review-header flex gap-3 items-center">
        <div className="review-img-container w-16 h-16 rounded-full bg-gray-600 flex items-center content-center p-2">
          <img className="w-full" src={pic} alt="" />{" "}
        </div>
        <h4 className="text-xl">Programmer Tariq</h4>
      </div>
      <div className="review-body mt-3">
        <div>
          <Rating readonly initialRating={ratingValue} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          numquam velit veniam eius quod adipisci, quaerat nisi corrupti
          officiis praesentium!
        </p>
      </div>
      <div className="review-footer flex justify-end">
        <FontAwesomeIcon
          className="text-xl text-accent"
          icon={faArrowRightLong}
        />
      </div>
    </div>
  );
};

export default Review;
