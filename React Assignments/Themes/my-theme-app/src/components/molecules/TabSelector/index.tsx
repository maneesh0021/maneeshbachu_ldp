import { Box, Button } from "@mui/material";

interface TabSelectorProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabSelector = ({ selectedTab, setSelectedTab }: TabSelectorProps) => {
  return (
    <Box display="flex" mb={2}>
      <Button
        variant={selectedTab === "contracts" ? "contained" : "outlined"}
        onClick={() => setSelectedTab("contracts")}
        sx={{ mr: 2 }}
      >
        My Contracts
      </Button>
      <Button
        variant={selectedTab === "cashKicks" ? "contained" : "outlined"}
        onClick={() => setSelectedTab("cashKicks")}
      >
        My Cash Kicks
      </Button>
    </Box>
  );
};

export default TabSelector;
