import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { data, loading } = useContext(CartContext);

  return (
    <div
      style={{ display: "flex", minHeight: "100vh", justifyContent: "center" }}
    >
      <div
        style={{
          border: "1px solid red",
          width: "40%",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* titulo dos produtos */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid red",
            width: "90%",
          }}
        >
          <div>
            <p>product</p>
          </div>
          <div style={{ display: "flex", gap: "70px" }}>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
          </div>
        </div>

        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2>IMAGEM</h2>
          </div>
          <div style={{ display: "flex", gap: "70px" }}>
            <p>$ 380.00</p>
            <p>1</p>
            <p>$ 880.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
