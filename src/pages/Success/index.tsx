import { MdDoneOutline } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { SuccessContainer, SuccessMessage } from "./styles";

const Success = () => {
  return (
    <SuccessContainer>
      <SuccessMessage>
        <MdDoneOutline size={45} />
      </SuccessMessage>
      <p>Your order has been placed! </p>
      <p>Thanks for shopping with us :)</p>
      <Link to="/">
        <button>
          Go back to home <RiArrowGoBackFill size={22} />
        </button>
      </Link>
    </SuccessContainer>
  );
};

export default Success;
