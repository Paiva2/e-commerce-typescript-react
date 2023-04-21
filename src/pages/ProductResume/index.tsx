import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { IProduct } from "../../../interfaces/interfaces";
import { callApi, insertItem } from "../../context/apiMethods";

import { BsCartPlus, BsHeart } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";

import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";

const ProductResume = () => {
  const param = useParams();
  const [singleProduct, setSingleProduct] = useState<IProduct | any>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");

  const { setCartData } = useContext(CartContext);
  const { setWishListData } = useContext(WishListContext);

  useEffect(() => {
    callApi(`products/${param.id}`, setSingleProduct, setIsLoading);
  }, []);

  console.log(selectedColor);

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
            {singleProduct?.colors.map((color: string) => (
              <option onChange={() => setSelectedColor(color)} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={() => insertItem("cart", singleProduct, setCartData)}
          >
            Add to cart <BsCartPlus />
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              insertItem("wish-list", singleProduct, setWishListData)
            }
          >
            Add to wish list <BsHeart />
          </button>
        </div>
      </div>
      <Link to="/">
        <button>
          Back to home <RiArrowGoBackFill />
        </button>
      </Link>
    </div>
  );
};

export default ProductResume;
