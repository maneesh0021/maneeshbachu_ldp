import { Box, Typography } from "@mui/material";
import TopBar from "../../organisms/TopBar";
import TabSelector from "../../molecules/TabSelector";
import ContractsTable from "../../organisms/ContractsTable";
import { useState } from "react";

const CashAccelerationTemplate = () => {
  const [selectedTab, setSelectedTab] = useState("contracts");

  return (
    <Box sx={{ p: 2 }}>
      <TopBar />
      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "contracts" && <ContractsTable />}
      {selectedTab === "cashKicks" && (
        <Box
          sx={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "background.paper",
            borderRadius: 2,
            mt: 2,
          }}
        >
          <Typography variant="h5" color="text.secondary">
            No Cash Kicks Available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CashAccelerationTemplate;
