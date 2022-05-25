import React, { useState } from "react";
import { useQuery } from "react-query";
import http from "../../../service/http";
import AdminProductsModal from "../../Shared/AdminProductsModal";
import Loading from "../../Shared/Loading";

const ManageProducts = () => {
  const { data, isLoading, error, refetch } = useQuery("orders", async () => {
    return await http.get("/tools");
  });
  const [deletingOrder, setDeletingProduct] = useState(null);

  if (isLoading) return <Loading />;

  return (
    <section>
      <h2 className="text-xl primary font-bold">
        All Products ({data?.data?.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((tool, index) => (
              <tr key={tool._id}>
                <th>{index + 1}</th>
                <td>{tool.name}</td>

                <td>
                  <label
                    onClick={() => setDeletingProduct(tool)}
                    htmlFor="product-delete-modal"
                    className="btn btn-secondary btn-sm"
                  >
                    cancel
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Starts */}
      {deletingOrder && (
        <AdminProductsModal
          refetch={refetch}
          deletingProduct={deletingOrder}
          setDeletingProduct={setDeletingProduct}
        />
      )}
      {/* Modal Ends */}
    </section>
  );
};

export default ManageProducts;
