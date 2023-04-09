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
          gap: ".9375rem",
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
          <div style={{ display: "flex", gap: "70px", width: "18.125rem" }}>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
          </div>
        </div>

        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            gap: "1.875rem",
            alignItems: "center",
          }}
        >
          {data.map(({ image, price, name, quantity }) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    width: "300px",
                  }}
                >
                  <img
                    src={image}
                    alt={name}
                    style={{ width: "120px", height: "120px" }}
                  />
                  <p style={{ fontSize: "14px" }}>{name}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "18.125rem",
                  }}
                >
                  <p>$ {price}</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    +<p>{quantity}</p>-
                  </div>
                  <p>$ {quantity * price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
