import React from "react";
import "./index.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
