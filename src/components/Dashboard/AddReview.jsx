import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import http from "../../service/http";
import auth from "../../utils/firebase.init";
import Alert from "../Shared/Alert";

const AddReview = () => {
  const [user, loading, authError] = useAuthState(auth);
  let [customError, setCustomError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    if (user) {
      setValue("name", user?.displayName || "Default Name");
      setValue("email", user?.email);
    }
  }, [user]);

  const onSubmit = async (data, e) => {
    try {
      await http.post("/reviews", data);

      toast.success("Review successfully added");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <h2 className="text-xl primary font-bold">Add a review</h2>
      <form
        style={{ maxWidth: "500px" }}
        className="px-2 mx-auto lg:ml-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="input input-bordered input-secondary w-full"
            disabled
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="input input-bordered input-secondary w-full"
            disabled
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">What's on your mind?</span>
          </label>
          <textarea
            type="text"
            {...register("text", { required: true })}
            placeholder="text description"
            className="input input-bordered input-secondary w-full"
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            {...register("rating", {
              required: true,
              min: 1,
              max: 5,
            })}
            placeholder="rating 1-5"
            className="input input-bordered input-secondary w-full"
          />
        </div>
        {customError && <Alert>{customError}</Alert>}

        <br />

        <button type="submit" className="btn btn-primary tracking-widest">
          Add Review
        </button>
      </form>
    </section>
  );
};

export default AddReview;
