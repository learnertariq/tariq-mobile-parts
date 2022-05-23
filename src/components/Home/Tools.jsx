import React from "react";
import { useQuery } from "react-query";
import Tool from "./Tool";
import http from "../../service/http";
import Loading from "../Shared/Loading";

const Tools = () => {
  const { data, isLoading, error } = useQuery("tools", async () => {
    return await http.get("/tools");
  });

  if (isLoading) return <Loading />;
  return (
    <section className="container mx-auto mt-6">
      <h2 className="text-center text-4xl">Tools & Parts</h2>
      <div className="tools-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data?.data?.map((tool) => (
          <Tool key={tool._id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
