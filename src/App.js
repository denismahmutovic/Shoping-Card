import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <main className="relative z-10" style={{ "min-height": "calc(71vh)" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
