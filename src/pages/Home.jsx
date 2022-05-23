import React from "react";
import Banner from "../components/Home/Banner";
import BlogPosts from "../components/Home/BlogPosts";
import BusinessProfile from "../components/Home/BusinessProfile";
import Contact from "../components/Home/Contact";
import HomeReviews from "../components/Home/HomeReviews";
import Tools from "../components/Home/Tools";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="">
      <Banner />
      {/* <Tools /> */}
      {/* <HomeReviews /> */}
      <BusinessProfile />
      <BlogPosts />
      <Contact />
    </section>
  );
};

export default Home;
