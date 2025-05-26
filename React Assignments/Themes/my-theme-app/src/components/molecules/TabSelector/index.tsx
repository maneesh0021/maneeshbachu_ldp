import { Box, Button } from "@mui/material";

const TABS = {
  CONTRACTS: "contracts",
  CASH_KICKS: "cashKicks",
};

const TAB_LABELS = {
  [TABS.CONTRACTS]: "My Contracts",
  [TABS.CASH_KICKS]: "My Cash Kicks",
};

interface TabSelectorProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabSelector = ({ selectedTab, setSelectedTab }: TabSelectorProps) => {
  return (
    <Box display="flex" mb={2}>
      <Button
        variant={selectedTab === TABS.CONTRACTS ? "contained" : "outlined"}
        onClick={() => setSelectedTab(TABS.CONTRACTS)}
        sx={{ mr: 2 }}
      >
        {TAB_LABELS[TABS.CONTRACTS]}
      </Button>
      <Button
        variant={selectedTab === TABS.CASH_KICKS ? "contained" : "outlined"}
        onClick={() => setSelectedTab(TABS.CASH_KICKS)}
      >
        {TAB_LABELS[TABS.CASH_KICKS]}
      </Button>
    </Box>
  );
};

export default TabSelector;
