import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

interface StarProps {
  filled: boolean;
  onClick: () => void;
}

const Img = styled("img")({
  width: 20,
  height: 20,
});

const StarIcon: React.FC<StarProps> = ({ filled, onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <Img
        src={`/src/assets/icons/${
          filled ? "star-filled.svg" : "star-outline.svg"
        }`}
        alt="star"
      />
    </IconButton>
  );
};

export default StarIcon;
