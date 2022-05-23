import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Alert from "../components/Shared/Alert";
import http from "../service/http";
import auth from "../utils/firebase.init";

const Purchase = () => {
  const [user, loading, authError] = useAuthState(auth);
  let [customError, setCustomError] = useState({});
  const { id } = useParams();
  const {
    data: tool,
    isLoading,
    error,
  } = useQuery("toolWithId", async () => {
    return await http.get(`/tools/${id}`);
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const watchQuantity = watch("quantity");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    if (tool) {
      setValue("quantity", tool?.data?.minOrderQuantity);
    }
  }, [tool]);

  useEffect(() => {
    setCustomError({});
    setSubmitDisabled(false);

    if (
      watchQuantity < tool?.data?.minOrderQuantity ||
      watchQuantity > tool?.data?.availableQuantity
    ) {
      setSubmitDisabled(true);
      setCustomError({
        quantityError:
          "Quantity should be greater than minimum quantity and less than available quantity",
      });
    }
  }, [watchQuantity]);

  console.log(parseInt(watchQuantity));

  const onSubmit = (data, e) => {
    setCustomError({});

    console.log(data);
    console.log(errors);
  };

  return (
    <section className="max-w-sm mx-auto mb-12">
      <h2 className="text-4xl mb-8 font-bold text-center">Review The Part</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Parts name</span>
          </label>
          <input
            type="text"
            placeholder="partName"
            className="input input-bordered input-primary w-full"
            value={tool?.data?.name || ""}
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>

          <textarea
            type="text"
            placeholder="description"
            className="textarea textarea-primary"
            value={tool?.data?.desc || ""}
            readOnly
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input
            type="text"
            placeholder="availableQuantity"
            className="input input-bordered input-primary w-full"
            value={tool?.data?.availableQuantity || ""}
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="text"
            placeholder="minOrderQuantity"
            className="input input-bordered input-primary w-full"
            value={tool?.data?.minOrderQuantity || ""}
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="price"
            className="input input-bordered input-primary w-full"
            value={tool?.data?.price || ""}
            readOnly
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered input-primary w-full"
            value={user?.displayName || "Default Name"}
            readOnly
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered input-primary w-full"
            value={user?.email || ""}
            readOnly
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              User Address <span className="text-red-600">***</span>
            </span>
          </label>
          <input
            type="text"
            {...register("address")}
            placeholder="address"
            className="input input-bordered input-secondary w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              User Phone <span className="text-red-600">***</span>
            </span>
          </label>
          <input
            type="text"
            {...register("phone")}
            placeholder="phone"
            className="input input-bordered input-secondary w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              How many do you want? <span className="text-red-600">***</span>
            </span>
          </label>
          <input
            type="number"
            {...register("quantity", { required: true, min: 0 })}
            placeholder="Quantity"
            className="input input-bordered input-secondary w-full"
          />
        </div>
        {customError.quantityError && (
          <Alert>{customError.quantityError}</Alert>
        )}

        <br />

        <button
          type="submit"
          className="btn btn-primary tracking-widest"
          disabled={submitDisabled}
        >
          Get It Now
        </button>
      </form>
    </section>
  );
};

export default Purchase;
