import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import CatalogApp from "catalog_mfe/App";
import CartApp from "cart_mfe/App";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Container>
          <Routes>
            <Route path="/" element={<CatalogApp store={store} />} />

            <Route path="/cart" element={<CartApp store={store} />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
