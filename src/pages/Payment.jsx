import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../components/Shared/Loading";
import http from "../service/http";
import CheckoutForm from "../components/Dashboard/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2ooDIiexNCnt8barNZt0QqsPCwAsijlC7bvLZV1J4qTkSOAJDpSXPZxDXpNJgAnLzMr3ALYbxOy1jmS9oIiIGy00h5MdH2K6"
);

const Payment = () => {
  const { id } = useParams();
  const {
    data: order,
    isLoading,
    error,
  } = useQuery(["orders", id], async () => {
    return await http.get(`/orders/${id}`);
  });

  if (isLoading) return <Loading />;

  return (
    <section>
      <h2 className="text-2xl text-primary font-bold">Payment {id}</h2>
      <div className="grid grid-cols-1 p-2 sm:p-8 gap-4">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 className="card-title">Email: {order?.data?.email}</h2>
            <h2>Tool Id: {order?.data?.tool}</h2>
            <h2>Total price to pay: {order?.data?.total}</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order?.data} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
