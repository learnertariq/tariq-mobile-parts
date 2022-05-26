import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../../service/http";

const CheckoutForm = ({ order }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const { total, email, _id } = order;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const run = async () => {
      try {
        const { data } = await http.post("/create-payment-intent", {
          price: total,
        });

        setClientSecret(data.clientSecret);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };
    run();
  }, [total]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");

    // confirm cart payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: order.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      // updating order with payment information
      try {
        await http.patch(`/orders/${_id}`, {
          paid: true,
          txId: paymentIntent.id,
        });

        toast.success("Paid Successfully");
        navigate("/dashboard/my-orders");
      } catch (error) {
        toast.error(error.message);
      }
      console.log(paymentIntent);
      setCardError("");
      setSuccess("You have successfully completed payment");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-3"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </>
  );
};

export default CheckoutForm;
