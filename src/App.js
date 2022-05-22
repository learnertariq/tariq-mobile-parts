import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:id" element={<Purchase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
