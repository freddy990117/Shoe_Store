import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../Pages/Page404";
import Homepage from "../Pages/Homepage";
import Product from "../Pages/Product";
import Bag from "../Pages/Bag";
import { Layout } from "../Components/Layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
