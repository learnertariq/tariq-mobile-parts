import React from "react";
import { toast } from "react-toastify";
import http from "../../service/http";

const AdminProductsModal = ({
  deletingProduct,
  setDeletingProduct,
  refetch,
}) => {
  const handleDeleteProduct = async () => {
    try {
      await http.delete(`/tools/${deletingProduct._id}`);

      toast.success("Tool successfully deleted");
      refetch();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeletingProduct(null);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        id="product-delete-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete the Tool?
          </h3>
          <div className="modal-action">
            <label htmlFor="product-delete-modal" className="btn">
              No
            </label>
            <label
              onClick={handleDeleteProduct}
              htmlFor="product-delete-modal"
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

export default AdminProductsModal;
