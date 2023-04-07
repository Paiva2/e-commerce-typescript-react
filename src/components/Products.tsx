import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    quantity: number;
    colors: Array<string>;
  }

  useEffect(() => {}, []);

  return (
    <div
      style={{
        display: "flex",
        width: "85%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <aside>
        <div>Genre</div>
        <div>Price</div>
      </aside>
      <div>
        <h1>Products</h1>
        <div>
          <div>
            <img />
            <p>Nome do produto</p>
            <p>Estrelas</p>
            <div>
              <div>Add to cart - Add wish list</div>
              <div>
                <p>Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
