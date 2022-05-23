import React, { useState } from "react";
import { useQuery } from "react-query";
import http from "../../service/http";
import ConfirmModal from "../Shared/ConfirmModal";
import Loading from "../Shared/Loading";

const MyOrders = () => {
  const { data, isLoading, error } = useQuery("orders", async () => {
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.toolName}</td>
                <td>{order.total}</td>
                {order.paid && (
                  <td>
                    <span className="text-success">Paid</span>
                  </td>
                )}
                {!order.paid && (
                  <>
                    <td>
                      <button className="btn btn-sm text-primary">Pay</button>
                    </td>
                    <td>
                      <label
                        onClick={() => setDeletingOrder(order)}
                        for="order-cancel-modal"
                        class="btn btn-secondary btn-sm"
                      >
                        cancel
                      </label>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Starts */}
      {deletingOrder && (
        <ConfirmModal
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
        />
      )}
      {/* Modal Ends */}
    </section>
  );
};

export default MyOrders;
