import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";
import NewProduct from "./components/NewProduct.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import NotFound from "./components/NotFound.jsx";
import CartMain from "./components/CartMain.jsx";
// import EditContent from "./components/EditContent.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/new-product" element={<NewProduct />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products/maincart" element={<CartMain />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
