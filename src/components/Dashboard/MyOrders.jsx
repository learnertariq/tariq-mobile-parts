import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import http from "../../service/http";
import ConfirmModal from "../Shared/ConfirmModal";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const { data, isLoading, error, refetch } = useQuery("orders", async () => {
    return await http.get("/orders");
  });
  const [deletingOrder, setDeletingOrder] = useState(null);

  if (isLoading) return <Loading />;
  return (
    <section>
      <h2 className="text-xl primary font-bold">
        My Orders ({data?.data?.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Total</th>
              <th>Status</th>
              <th>TXID</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.toolName}</td>
                <td>{order.total}</td>

                <td>
                  {order.paid && <span className="text-success">Paid</span>}
                  {!order.paid && (
                    <Link
                      to={`/dashboard/payment/${order._id}`}
                      className="btn btn-sm text-primary"
                    >
                      Pay
                    </Link>
                  )}
                </td>
                <td>
                  {order.paid && (
                    <span className="text-success">{order.txId}</span>
                  )}
                </td>

                <td>
                  {!order.paid && (
                    <label
                      onClick={() => setDeletingOrder(order)}
                      htmlFor="order-cancel-modal"
                      className="btn btn-secondary btn-sm"
                    >
                      cancel
                    </label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Starts */}
      {deletingOrder && (
        <ConfirmModal
          refetch={refetch}
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
        />
      )}
      {/* Modal Ends */}
    </section>
  );
};

export default MyOrders;
