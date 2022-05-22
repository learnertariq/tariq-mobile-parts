import React from "react";
import Banner from "../components/Home/Banner";
import BusinessProfile from "../components/Home/BusinessProfile";
import HomeReviews from "../components/Home/HomeReviews";
import Tools from "../components/Home/Tools";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="">
      <Banner />
      <Tools />
      <HomeReviews />
      <BusinessProfile />
    </section>
  );
};

export default Home;
