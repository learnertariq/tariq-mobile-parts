import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import http from "../../../service/http";
import AdminOrdersModal from "../../Shared/AdminOrdersModal";
import Loading from "../../Shared/Loading";

const ManageAllOrders = () => {
  const { data, isLoading, error, refetch } = useQuery(
    "allOrders",
    async () => {
      return await http.get("/orders/admin");
    }
  );
  const [deletingOrder, setDeletingOrder] = useState(null);

  const handleShippingOrder = async (order) => {
    try {
      await http.patch(`/orders/${deletingOrder._id}`);

      toast.success("Order successfully canceled");
      refetch();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingOrder(null);
    }
  };

  if (isLoading) return <Loading />;
  return (
    <section>
      <h2 className="text-xl primary font-bold">
        All Orders ({data?.data?.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Order ID</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order._id}</td>
                <td>{order.email}</td>
                <td>
                  {order.paid && order.shipped && "Shipped"}
                  {!order.paid && <span className="text-red-500">Unpaid</span>}
                  {order.paid && !order.shipped && (
                    <button
                      onClick={() => handleShippingOrder(order)}
                      className="btn btn-primary btn-sm"
                    >
                      Pending
                    </button>
                  )}
                </td>
                <td>
                  {!order.paid && (
                    <label
                      onClick={() => setDeletingOrder(order)}
                      htmlFor="admin-order-delete-modal"
                      className="btn btn-secondary btn-sm"
                    >
                      Cancel
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
        <AdminOrdersModal
          refetch={refetch}
          deletingOrder={deletingOrder}
          setDeletingOrder={setDeletingOrder}
        />
      )}
      {/* Modal Ends */}
    </section>
  );
};

export default ManageAllOrders;
