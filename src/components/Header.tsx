import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex", border: "1px solid red" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>LOGO</div>
        <div>Search</div>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <div>Wishlist - Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
