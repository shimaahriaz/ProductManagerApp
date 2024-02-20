import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const Products = ({ setShowProductDetail, setSelectedProductId }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const redirectToDetailPage = (productId) => {
    setSelectedProductId(productId);
    setShowProductDetail(true);
  };

  return (
    <div className="container mt-5">
      {loading && <div>...Loading</div>}
      <div className="row">
        {data?.map((product) => (
          <div className="col-lg-4 mb-4" key={product.id}>
            <div className="cards">
              <div className="imgBox">
                <img src={product.image} alt="productImg" />
              </div>
              <div className="contentBox">
                <h3>{product.title}</h3>
                <h2 className="price">
                  61.<small>{product.price}</small> €
                </h2>
                <button
                  className="btn btn-success"
                  onClick={() => redirectToDetailPage(product.id)}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
