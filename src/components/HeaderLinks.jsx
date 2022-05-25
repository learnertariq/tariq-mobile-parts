import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../utils/firebase.init";

const HeaderLinks = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Link to="/" className="py-4 px-2 text-gray-300  font-semibold ">
        Home
      </Link>
      <Link to="/blogs" className="py-4 px-2 text-gray-300  font-semibold ">
        Blogs
      </Link>

      <Link to="/portfolio" className="py-4 px-2 text-gray-300  font-semibold ">
        Portfolio
      </Link>
      {user && (
        <>
          <Link
            to="/dashboard"
            className="py-4 px-2 text-gray-300  font-semibold "
          >
            Dashboard
          </Link>
          <span className="py-4 px-2 text-green-600">{user?.displayName}</span>
          <Link
            to="/logout"
            className="py-4 px-2 text-gray-300  font-semibold "
          >
            Logout
          </Link>
        </>
      )}
      {!user && (
        <>
          <Link
            to="/register"
            className="py-4 px-2 text-gray-300  font-semibold "
          >
            Register
          </Link>
          <Link to="/login" className="py-4 px-2 text-gray-300  font-semibold ">
            Login
          </Link>
        </>
      )}
    </>
  );
};

export default HeaderLinks;
