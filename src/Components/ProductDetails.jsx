import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ProductDetail = ({ productId, setShowProductDetail }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${productId}`,
    })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [productId]);

  const addToCart = () => {
    alert("Product added to cart:", product.title);
  };

  return (
    <div className="container mt-5">
      {loading && <div className="text-danger d-flex justify-content-cenetr align-items-center vh-100">...Loading</div>}
      {product && (
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={product.image} alt="Product" className="img-fluid" />
          </div>
          <div className="col-md-6 product-details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>Price: {product.price} €</h3>
            <button className="btn btn-success me-4" onClick={addToCart}>Add to Cart</button>
            <button className="btn btn-secondary ml-2" onClick={() => setShowProductDetail(false)}>Back to Products</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
