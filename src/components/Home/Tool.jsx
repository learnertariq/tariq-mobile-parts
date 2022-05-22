import React from "react";

const Tool = ({
  tool: { name, img, desc, price, minOrderQuantity, availableQuantity },
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
        <button class="btn btn-primary">Get It Now</button>
      </div>
    </div>
  );
};

export default Tool;
