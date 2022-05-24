import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../../../service/http";

const MakeAdmin = () => {
  const { data, isLoading, error, refetch } = useQuery("allUsers", async () => {
    const { data } = await http.get("/users");
    return data;
  });

  const handleMakeAdmin = async (user) => {
    try {
      await http.patch(`/users/admin`, { email: user.email, isAdmin: true });
      toast.success("User updated successfully");
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <h2 className="text-xl primary font-bold">Make Admin Page</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>isAdmin</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td className="text-success">{user.isAdmin ? "Admin" : ""}</td>
                <td>
                  {!user.isAdmin && (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn text-red-700 btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakeAdmin;
