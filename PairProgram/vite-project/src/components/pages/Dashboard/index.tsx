import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AssetTable from "../../organisms/AssetTable";
import { assetData } from "../../../utils/constants";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const Dashboard: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [starred, setStarred] = useState<string[]>([]);

  const toggleStar = (id: string) => {
    setStarred((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const watchlistAssets = assetData.filter((a) => starred.includes(a.id));

  return (
    <Wrapper>
      <Tabs value={tab} onChange={(_e, newValue) => setTab(newValue)}>
        <Tab label="All Assets" />
        <Tab label="Watchlist" />
      </Tabs>

      <Box mt={2}>
        {tab === 0 && (
          <AssetTable
            assets={assetData}
            starredAssets={starred}
            toggleStar={toggleStar}
          />
        )}
        {tab === 1 && (
          <AssetTable
            assets={watchlistAssets}
            starredAssets={starred}
            toggleStar={toggleStar}
          />
        )}
      </Box>
    </Wrapper>
  );
};

export default Dashboard;
