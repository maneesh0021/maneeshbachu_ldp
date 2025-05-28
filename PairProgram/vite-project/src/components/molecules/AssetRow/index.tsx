import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import StarIcon from "../../atoms/StarIcon";
import type { AssetType } from "../../../utils/types";

interface Props {
  asset: AssetType;
  isStarred: boolean;
  toggleStar: (id: string) => void;
}

const StyledRow = styled(TableRow)({
  backgroundColor: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  marginBottom: "16px",
  "& td": {
    borderBottom: "none",
  },
});

const Icon = styled("img")({
  width: 40,
  height: 40,
  marginRight: 12,
});

const NameBox = styled("div")({
  display: "flex",
  alignItems: "center",
});

const NameText = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const AssetName = styled("span")({
  fontWeight: 600,
  fontSize: "16px",
});

const Symbol = styled("span")({
  color: "#666",
  fontSize: "14px",
});

const Change = styled("span")<{ isPositive: boolean }>(({ isPositive }) => ({
  color: isPositive ? "green" : "red",
}));

const AssetRow: React.FC<Props> = ({ asset, isStarred, toggleStar }) => {
  const isPositive = asset.change.startsWith("+");

  return (
    <StyledRow>
      <TableCell>
        <NameBox>
          <Icon src={`/src/assets/icons/${asset.icon}`} alt={asset.name} />
          <NameText>
            <AssetName>{asset.name}</AssetName>
            <Symbol>{asset.symbol}</Symbol>
          </NameText>
        </NameBox>
      </TableCell>
      <TableCell>{asset.price}</TableCell>
      <TableCell>
        <Change isPositive={isPositive}>{asset.change}</Change>
      </TableCell>
      <TableCell>{asset.marketCap}</TableCell>
      <TableCell>
        <StarIcon filled={isStarred} onClick={() => toggleStar(asset.id)} />
      </TableCell>
    </StyledRow>
  );
};

export default AssetRow;
