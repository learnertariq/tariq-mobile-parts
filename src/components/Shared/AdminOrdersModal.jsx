import React from "react";
import { toast } from "react-toastify";
import http from "../../service/http";

const AdminOrdersModal = ({ deletingOrder, setDeletingOrder, refetch }) => {
  const handleDeleteProduct = async () => {
    try {
      await http.delete(`/orders/${deletingOrder._id}`);

      toast.success("Order successfully canceled");
      refetch();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingOrder(null);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="admin-order-delete-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to cancel the Order?
          </h3>
          <div className="modal-action">
            <label htmlFor="admin-order-delete-modal" className="btn">
              No
            </label>
            <label
              onClick={handleDeleteProduct}
              htmlFor="admin-order-delete-modal"
              className="btn"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersModal;
