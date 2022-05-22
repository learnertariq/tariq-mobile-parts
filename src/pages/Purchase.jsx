import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  return (
    <section>
      <h2 className="text-6xl text-center">Own The Part</h2>
      {console.log(id)}
    </section>
  );
};

export default Purchase;
