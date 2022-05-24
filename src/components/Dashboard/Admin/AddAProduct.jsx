import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import http from "../../../service/http";
import Alert from "../../Shared/Alert";

const AddAProduct = () => {
  let [customError, setCustomError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data, e) => {
    try {
      await http.post("/tools", data);
      toast.success("Product successfully placed");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="max-w-sm mb-12 mx-auto lg:ml-2">
      <h2 className="text-4xl mb-8 font-bold">Add a product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Parts name</span>
          </label>
          <input
            type="text"
            placeholder="Part Name"
            {...register("name", { required: true })}
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            type="text"
            placeholder="Image Link"
            {...register("img", { required: true })}
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>

          <textarea
            type="text"
            placeholder="description"
            {...register("desc", { required: true })}
            className="textarea textarea-primary"
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="availableQuantity"
            {...register("availableQuantity", { required: true })}
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="number"
            placeholder="minOrderQuantity"
            {...register("minOrderQuantity", { required: true })}
            className="input input-bordered input-primary w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="price"
            {...register("price", { required: true })}
            className="input input-bordered input-primary w-full"
          />
        </div>

        {customError && <Alert>{customError}</Alert>}

        <br />

        <button type="submit" className="btn btn-primary tracking-widest">
          Add the product
        </button>
      </form>
    </section>
  );
};

export default AddAProduct;
