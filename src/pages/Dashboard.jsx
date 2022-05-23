import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section>
      <div className="flex justify-end lg:hidden">
        <label
          htmlFor="dashboard-sidebar"
          className="btn btn-square btn-primary mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h2 className="text-2xl text-purple-500 font-bold">
            Welcome to your Dashboard
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="my-orders">My Orders</Link>
            </li>
            <li>
              <Link to="add-review">Add a Review</Link>
            </li>
            <li>
              <Link to="my-profile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
