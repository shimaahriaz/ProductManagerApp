import { useState } from "react";
import Login from "./Pages/Login/Login";
import Products from "./Components/Home/Products";
import ProductDetail from "./Components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <>
      {token ? (
        showProductDetail ? (
          <ProductDetail
            productId={selectedProductId}
            setShowProductDetail={setShowProductDetail}
          />
        ) : (
          <Products
            setShowProductDetail={setShowProductDetail}
            setSelectedProductId={setSelectedProductId}
          />
        )
      ) : (
        <Login token= {token} setToken={setToken} />
      )}
    </>
  );
}

export default App;
