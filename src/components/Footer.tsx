import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "1px solid red",
        }}
      >
        <div>
          About
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>text 1</li>
            <li>text 2</li>
            <li>text 3</li>
            <li>text 4</li>
            <li>text 5</li>
          </ul>
        </div>
        <div>
          Help
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>text 1</li>
            <li>text 2</li>
            <li>text 3</li>
            <li>text 4</li>
            <li>text 5</li>
          </ul>
        </div>
        <div>
          Social Medias
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>text 1</li>
            <li>text 2</li>
            <li>text 3</li>
            <li>text 4</li>
            <li>text 5</li>
          </ul>
        </div>
        <div>
          Payment
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li>text 1</li>
            <li>text 2</li>
            <li>text 3</li>
            <li>text 4</li>
            <li>text 5</li>
          </ul>
        </div>
        <div>newsletter</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>Copyright</div>
    </div>
  );
};

export default Footer;
