import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../../interfaces/interfaces";
import { callApi } from "../../context/apiMethods";

const ProductResume = () => {
  const param = useParams();
  const [singleProduct, setSingleProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    callApi(`products/${param.id}`, setSingleProduct, setIsLoading);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        {isLoading && <h1>Loading...</h1>}
        <img
          style={{ width: "500px", height: "500px" }}
          src={singleProduct?.image}
          alt={singleProduct?.name}
        />
      </div>
      <div>
        <div>
          <p>Price: ${singleProduct?.price}</p>

          <p>Description: {singleProduct?.description}</p>
        </div>
        <div>
          Available Colors:
          <select>
            {singleProduct?.colors.map((color) => (
              <option value={color}>{color}</option>
            ))}
          </select>
        </div>
        <div>Add to cart</div>
        <div>Add to wish list</div>
      </div>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default ProductResume;
