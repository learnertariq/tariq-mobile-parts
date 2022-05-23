import React from "react";
import { toast } from "react-toastify";
import http from "../../service/http";

const ConfirmModal = ({ deletingOrder, setDeletingOrder, refetch }) => {
  const handleCancelOrder = async () => {
    try {
      await http.delete(`/orders/${deletingOrder._id}`);

      toast.success("Order successfully Canceled");
      refetch();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingOrder(null);
    }
  };

  return (
    <div>
      <input type="checkbox" id="order-cancel-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to cancel the order?
          </h3>
          <div className="modal-action">
            <label htmlFor="order-cancel-modal" className="btn">
              No
            </label>
            <label
              onClick={handleCancelOrder}
              htmlFor="order-cancel-modal"
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

export default ConfirmModal;
