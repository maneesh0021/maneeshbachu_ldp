import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  background-color: #0077ff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #005fcc;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick}>{label}</StyledButton>
);

export default Button;
