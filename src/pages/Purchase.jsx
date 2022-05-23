import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import http from "../service/http";

const Purchase = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery("tools", async () => {
    return await http.get(`/tools/${id}`);
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data);
  };

  console.log(data);
  return (
    <section className="max-w-sm mx-auto mb-12">
      <h2 className="text-4xl mb-8 font-bold text-center">Review The Part</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="input input-bordered input-primary w-full w-full mb-3"
        />
        <br />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="input input-bordered input-primary w-full w-full mb-3"
        />
        <br />

        <button type="submit" className="btn btn-primary tracking-widest">
          Get It Now
        </button>
      </form>
    </section>
  );
};

export default Purchase;
