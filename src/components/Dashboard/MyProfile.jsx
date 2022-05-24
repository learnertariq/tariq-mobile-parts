import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import http from "../../service/http";
import auth from "../../utils/firebase.init";
import Alert from "../Shared/Alert";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading, authError] = useAuthState(auth);
  const [customError, setCustomError] = useState("");
  const {
    data: userInfo,
    isLoading,
    error,
    refetch,
  } = useQuery("usersMe", async () => {
    const { data } = await http.get("/users/me");
    return data;
  });

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

  useEffect(() => {
    if (userInfo) {
      setValue("education", userInfo?.education);
      setValue("location", userInfo?.location);
      setValue("phone", userInfo?.phone);
      setValue("linkedIn", userInfo?.linkedIn);
    }
  }, [userInfo]);

  const onSubmit = async (data, e) => {
    delete data.name;
    delete data.email;
    console.log(data);
    try {
      await http.patch(`/users/me`, data);
      toast.success("User updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <section>
      <h2 className="text-xl primary font-bold">My Profile</h2>
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
            <span className="label-text">Education</span>
          </label>
          <input
            type="text"
            {...register("education", { required: true })}
            placeholder="Your Education"
            className="input input-bordered input-secondary w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", { required: true })}
            placeholder="Your Location"
            className="input input-bordered input-secondary w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Your Phone Number"
            className="input input-bordered input-secondary w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">LinkedIn Profile Link</span>
          </label>
          <input
            type="text"
            {...register("linkedIn", { required: true })}
            placeholder="Your LinkedIn Profile Link"
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

export default MyProfile;
