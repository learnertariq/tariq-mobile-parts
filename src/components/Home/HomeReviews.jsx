import React, { useState } from "react";
import { useQuery } from "react-query";
import http from "../../service/http";
import Loading from "../Shared/Loading";
import Review from "../Shared/Review";

const HomeReviews = () => {
  const { data, isLoading, error } = useQuery("reviews", async () => {
    return await http.get("/reviews");
  });

  if (isLoading) return <Loading />;

  return (
    <section className="container mx-auto mt-8">
      <div className="home-reviews-header text-center">
        <h6>Customer Stories</h6>
        <h2 className="text-4xl mb-6">What Our Members are Saying</h2>
      </div>
      <div className="reviews p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data?.slice(0, 3).map((r) => (
          <Review key={r._id} review={r} />
        ))}
      </div>
    </section>
  );
};

export default HomeReviews;
