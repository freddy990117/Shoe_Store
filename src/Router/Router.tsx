import { HashRouter, Routes, Route } from "react-router-dom";
import Page404 from "../Pages/Page404";
import Homepage from "../Pages/Homepage";
import Product from "../Pages/Product";
import Bag from "../Pages/Bag";
import { Layout } from "../Components/Layout";
import { ProductProvider } from "../Context/ProductContext";
import { CartProvider } from "../Context/CartContext";
const Router = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </HashRouter>
      </ProductProvider>
    </CartProvider>
  );
};

export default Router;
