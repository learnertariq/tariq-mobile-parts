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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
