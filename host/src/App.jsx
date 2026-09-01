import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogApp from "catalog_mfe/App";
import CartApp from "cart_mfe/App";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./global.css";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="app__content">
          <Routes>
            <Route path="/" element={<CatalogApp />} />

            <Route path="/cart" element={<CartApp />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
