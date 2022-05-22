import React from "react";
import heroImg from "../../assets/hero.webp";

const Banner = () => {
  return (
    <div>
      <div
        class="hero"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              The best Mobile Parts Manufacturer
            </h1>
            <p class="mb-5">
              We provide durable, sustainable, and best mobile parts that will
              help your mobile to live long.
            </p>
            <button class="btn btn-primary">Explore Your Needs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
