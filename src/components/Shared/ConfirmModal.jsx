import React from "react";
import { toast } from "react-toastify";
import http from "../../service/http";

const ConfirmModal = ({ deletingOrder, setDeletingOrder }) => {
  const handleCancelOrder = async () => {
    try {
      await http.delete(`/orders/${deletingOrder._id}`);

      toast.success("Order successfully Canceled");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingOrder(null);
    }
  };

  return (
    <div>
      <input type="checkbox" id="order-cancel-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Are you sure to cancel the order?</h3>
          <div class="modal-action">
            <label for="order-cancel-modal" class="btn">
              No
            </label>
            <label
              onClick={handleCancelOrder}
              for="order-cancel-modal"
              class="btn"
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
