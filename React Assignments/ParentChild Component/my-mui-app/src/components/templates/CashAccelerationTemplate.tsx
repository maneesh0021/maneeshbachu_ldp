import { Box } from "@mui/material";
import { useState } from "react";
import TopBar from "../organisms/TopBar";
import TabSelector from "../molecules/TabSelector";
import ContractsTable from "../organisms/ContractsTable";

const DEFAULT_TAB: "contracts" | "kicks" = "contracts";
const PAGE_PADDING = 4;
const BACKGROUND_COLOR = "#121212";
const MIN_HEIGHT = "100vh";
const NO_KICKS_TEXT_COLOR = "#888";
const NO_KICKS_TEXT = "No cash kicks available";

const CashAccelerationTemplate = () => {
  const [tab, setTab] = useState<"contracts" | "kicks">(DEFAULT_TAB);

  return (
    <Box
      sx={{
        p: PAGE_PADDING,
        backgroundColor: BACKGROUND_COLOR,
        minHeight: MIN_HEIGHT,
      }}
    >
      <TopBar />
      <TabSelector selected={tab} setSelected={setTab} />
      {tab === "contracts" ? (
        <ContractsTable />
      ) : (
        <Box sx={{ mt: 3, color: NO_KICKS_TEXT_COLOR }}>{NO_KICKS_TEXT}</Box>
      )}
    </Box>
  );
};

export default CashAccelerationTemplate;
