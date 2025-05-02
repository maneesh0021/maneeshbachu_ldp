import { Box, Button } from "@mui/material";
import { FC } from "react";

interface TabSelectorProps {
  selected: "contracts" | "kicks";
  setSelected: (value: "contracts" | "kicks") => void;
}

const TabSelector: FC<TabSelectorProps> = ({ selected, setSelected }) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        onClick={() => setSelected("contracts")}
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: selected === "contracts" ? "#6c47ff" : "#1c1c1e",
          color: "#fff",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#5a38e0",
          },
        }}
      >
        My Contracts
      </Button>
      <Button
        onClick={() => setSelected("kicks")}
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: selected === "kicks" ? "#6c47ff" : "#1c1c1e",
          color: "#fff",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#5a38e0",
          },
        }}
      >
        My Cash Kicks
      </Button>
    </Box>
  );
};

export default TabSelector;
