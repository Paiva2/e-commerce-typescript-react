import { useContext } from "react";
import { WishListContext } from "../context/WishListContext";

import { AiOutlineDelete } from "react-icons/ai";

const WishList = () => {
  const { wishListData } = useContext(WishListContext);

  return (
    <div
      style={{ display: "flex", minHeight: "100vh", justifyContent: "center" }}
    >
      <div
        style={{
          width: "40%",
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".9375rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid red",
            width: "90%",
            padding: ".9375rem",
          }}
        >
          <div>
            <p>product</p>
          </div>
          <div style={{ display: "flex", gap: "70px", width: "16.875rem" }}>
            <p>price</p>
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
          {wishListData.map(({ image, price, name, description }) => {
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
                    wordBreak: "break-word",
                  }}
                >
                  <img
                    src={image}
                    alt={name}
                    style={{ width: "120px", height: "120px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".3125rem",
                      width: "9.375rem",
                    }}
                  >
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {name}
                    </p>
                    <p style={{ fontSize: "12px" }}>{description}</p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "290px",
                    gap: "10px",
                  }}
                >
                  <div style={{ width: "80px" }}>
                    <p>$ {price}</p>
                  </div>
                  <AiOutlineDelete />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishList;
