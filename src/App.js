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
          <Route index element={<MyOrders />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
