import React, { useState } from "react";
import Review from "../Review";

const HomeReviews = () => {
  return (
    <section className="mt-8">
      <div className="home-reviews-header text-center">
        <h6>Customer Stories</h6>
        <h2 className="text-4xl">What Our Members are Saying</h2>
      </div>
      <div className="reviews p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Review ratingValue={3} />
        <Review ratingValue={3} />
        <Review ratingValue={3} />
      </div>
    </section>
  );
};

export default HomeReviews;
