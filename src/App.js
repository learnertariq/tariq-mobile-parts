import { Route, Routes } from "react-router-dom";
import "./App.css";
import Logout from "./components/Auth/Logout";
import RequireAuth from "./components/Auth/RequireAuth";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MyOrders from "./components/Dashboard/MyOrders";
import AddReview from "./components/Dashboard/AddReview";
import MyProfile from "./components/Dashboard/MyProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./pages/Payment";
import ManageAllOrders from "./components/Dashboard/Admin/ManageAllOrders";
import ManageProducts from "./components/Dashboard/Admin/ManageProducts";
import AddAProduct from "./components/Dashboard/Admin/AddAProduct";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-profile" element={<MyProfile />} />
          {/* Admin Routes */}
          <Route path="manage-orders" element={<ManageAllOrders />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="add-product" element={<AddAProduct />} />
          <Route path="make-admin" element={<MakeAdmin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
