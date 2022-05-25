import React from "react";
import heroImg from "../../assets/hero.webp";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero banner"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                The best Mobile Parts Manufacturer
              </h1>
              <p className="mb-5">
                We provide durable, sustainable, and best mobile parts that will
                help your mobile to live long.
              </p>
              <button className="btn btn-primary">Explore Your Needs</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                The best Mobile Parts Manufacturer
              </h1>
              <p className="mb-5">
                We provide durable, sustainable, and best mobile parts that will
                help your mobile to live long.
              </p>
              <button className="btn btn-primary">Explore Your Needs</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
