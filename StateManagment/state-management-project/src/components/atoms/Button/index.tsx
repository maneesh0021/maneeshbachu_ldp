import React from "react";
import Button from "@mui/material/Button";

interface Props {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ textTransform: "none" }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
