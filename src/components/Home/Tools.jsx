import React from "react";
import Tool from "./Tool";

const Tools = () => {
  return (
    <section className="container mx-auto mt-6">
      <h2 className="text-center text-4xl">Tools & Parts</h2>
      <div className="tools-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Tool />
        <Tool />
        <Tool />
      </div>
    </section>
  );
};

export default Tools;
