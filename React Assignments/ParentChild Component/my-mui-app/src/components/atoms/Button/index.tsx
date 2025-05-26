import Button from "@mui/material/Button";
import { FC, ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: "#6c47ff",
        textTransform: "none",
        borderRadius: "8px",
        color: "#fff",
        "&:hover": { backgroundColor: "#5a38e0" },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
