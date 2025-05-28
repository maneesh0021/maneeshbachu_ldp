import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import type { AssetType } from "../../../utils/types";
import AssetRow from "../../molecules/AssetRow";
import { ASSET_TABLE_HEADERS } from "../../../utils/constants";

interface Props {
  assets: AssetType[];
  starredAssets: string[];
  toggleStar: (id: string) => void;
}

const StyledTableHead = styled(TableHead)({
  backgroundColor: "#F5F5F5",
});

const StyledTableContainer = styled("div")({
  backgroundColor: "#FAFAFA",
  padding: "16px",
  borderRadius: "8px",
});

const AssetTable: React.FC<Props> = ({ assets, starredAssets, toggleStar }) => {
  return (
    <StyledTableContainer>
      <Table>
        <StyledTableHead>
          <TableRow>
            {ASSET_TABLE_HEADERS.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {assets.map((asset) => (
            <AssetRow
              key={asset.id}
              asset={asset}
              isStarred={starredAssets.includes(asset.id)}
              toggleStar={toggleStar}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default AssetTable;
