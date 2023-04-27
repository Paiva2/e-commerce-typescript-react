import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import * as Accordion from "@radix-ui/react-accordion";

import { IProduct } from "../../../interfaces/interfaces";
import { callApi, insertItem } from "../../utils/apiMethods";
import { BsHeart } from "react-icons/bs";

import { RiArrowDownSLine } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";
import { priceFormatter } from "../../../src/utils/formatter";
import { ModalContent, TriggerButton } from "./styles";

const ProductResume = () => {
  const param = useParams();
  const [singleProduct, setSingleProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");

  const { setCartData } = useContext(CartContext);
  const { setWishListData } = useContext(WishListContext);

  useEffect(() => {
    callApi(`products/${param.id}`, setSingleProduct, setIsLoading);
  }, []);

  return (
    singleProduct && (
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            padding: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            background: "#202024",
          }}
        >
          <div>
            {isLoading && <h1>Loading...</h1>}
            <img
              style={{ width: "550px", height: "550px", borderRadius: "10px" }}
              src={singleProduct?.image}
              alt={singleProduct?.name}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div>
              <div>
                <h1>{singleProduct.name}</h1>
                <h1 style={{ color: "#00B37E" }}>
                  {priceFormatter.format(singleProduct?.price)}
                </h1>
                <p style={{ textTransform: "capitalize" }}>
                  Genre: {singleProduct.filterParams.genre}
                </p>
              </div>
              <div>
                Available Colors:{" "}
                <select style={{ textTransform: "capitalize" }}>
                  {singleProduct?.filterParams.colors.map((color: string) => (
                    <option
                      key={color}
                      onChange={() => setSelectedColor(color)}
                      value={color}
                    >
                      {color}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  width: "185px",
                  height: "45px",
                  padding: "5px",
                  borderRadius: "8px",
                  background: "#00875F",
                  border: "0",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: "1.4375rem",
                }}
                onClick={() => insertItem("cart", singleProduct, setCartData)}
              >
                Add to Cart
              </button>
              <button
                style={{
                  display: "grid",
                  placeContent: "center",
                  width: "40px",
                  height: "39px",
                  padding: "5px",
                  borderRadius: "50%",
                  background: "#9b3535",
                  border: "0",
                  cursor: "pointer",
                  color: "#fff",
                  font: "0",
                }}
                onClick={() =>
                  insertItem("wish-list", singleProduct, setWishListData)
                }
              >
                <BsHeart size={20} />
              </button>
            </div>

            <Accordion.Root type="multiple">
              <div
                style={{
                  width: "270px",
                  background: "#F9F8F9",
                  borderRadius: "5px",
                  color: "#000",
                  fontSize: "14px",
                  overflow: "hidden",
                }}
              >
                <Accordion.Item value="item-1">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Description <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>

                  <ModalContent>
                    <div>
                      <p>Description: {singleProduct?.description}</p>
                    </div>
                  </ModalContent>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Rating <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>
                  <ModalContent>
                    <div>
                      <p>Rating: {singleProduct?.rating}</p>
                    </div>
                  </ModalContent>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Fabricação <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>
                  <ModalContent>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aut tenetur iste dolor earum animi tempore provident
                        perferendis accusamus laboriosam porro, enim
                        consectetur.
                      </p>
                    </div>
                  </ModalContent>
                </Accordion.Item>

                <Accordion.Item value="item-4">
                  <Accordion.Trigger asChild>
                    <TriggerButton>
                      Material <RiArrowDownSLine />
                    </TriggerButton>
                  </Accordion.Trigger>
                  <ModalContent>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum, nemo accusantium?.
                      </p>
                    </div>
                  </ModalContent>
                </Accordion.Item>
              </div>
            </Accordion.Root>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductResume;
