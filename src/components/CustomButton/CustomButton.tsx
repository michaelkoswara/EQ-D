import { Button } from "antd";
import React from "react";

export interface ICustomButton {
  onClick: () => void;
  type:
    | "link"
    | "text"
    | "ghost"
    | "primary"
    | "default"
    | "dashed"
    | undefined;
  text: string;
  className?: string;
}

const CustomButton = ({
  onClick,
  type,
  text,
  className,
}: ICustomButton): JSX.Element => {
  return (
    <Button
      type={type || "default"}
      onClick={onClick}
      className={className}
      data-testid="custom-button"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
