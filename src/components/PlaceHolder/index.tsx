import React from "react";
import { IconType } from "react-icons/lib";
import { PlaceHolderContainer } from "./styles";

interface Props {
  Icon: IconType;
  text: string;
  color: string;
}

const PlaceHolder = ({ Icon, text, color }: Props) => {
  return (
    <PlaceHolderContainer>
      <p>{text}</p>
      <span>
        <Icon color={color} />
      </span>
    </PlaceHolderContainer>
  );
};

export default PlaceHolder;
