import React from "react";
import { Link } from "react-router-dom";

const Tool = ({
  tool: { _id, name, img, desc, price, minOrderQuantity, availableQuantity },
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" className="w-full object-cover" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">
            {name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <div>
            Price:{" "}
            <span className="badge badge-accent text-xl font-bold p-3">
              ${price}
            </span>
          </div>
        </div>

        <p>{desc}</p>
        <div className="">
          <div className="min-order">
            Minimum Order:{" "}
            <span className="text-secondary">{minOrderQuantity}</span>
          </div>
          <div className="available-quantity">
            Available Quantity:{" "}
            <span className="text-accent">{availableQuantity}</span>
          </div>
        </div>
        <Link to={`/purchase/${_id}`} className="btn btn-primary">
          Get It Now
        </Link>
      </div>
    </div>
  );
};

export default Tool;
