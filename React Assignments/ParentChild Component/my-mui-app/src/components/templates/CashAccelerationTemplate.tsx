import { Box } from "@mui/material";
import { useState } from "react";
import TopBar from "../organisms/TopBar";
import TabSelector from "../molecules/TabSelector";
import ContractsTable from "../organisms/ContractsTable";

const CashAccelerationTemplate = () => {
  const [tab, setTab] = useState<"contracts" | "kicks">("contracts");

  return (
    <Box sx={{ p: 4, backgroundColor: "#121212", minHeight: "100vh" }}>
      <TopBar />
      <TabSelector selected={tab} setSelected={setTab} />
      {tab === "contracts" ? (
        <ContractsTable />
      ) : (
        <Box sx={{ mt: 3, color: "#888" }}>No cash kicks available</Box>
      )}
    </Box>
  );
};

export default CashAccelerationTemplate;
