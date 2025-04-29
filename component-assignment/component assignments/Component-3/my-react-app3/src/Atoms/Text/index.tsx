import React from "react";
import "./index.css";

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => (
  <span className="text">{children}</span>
);

export default Text;
