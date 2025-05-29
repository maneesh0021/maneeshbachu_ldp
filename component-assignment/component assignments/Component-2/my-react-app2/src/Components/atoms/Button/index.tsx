import React from "react";
import "./index.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
