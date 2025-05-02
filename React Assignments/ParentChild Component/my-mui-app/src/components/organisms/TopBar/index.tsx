import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SyncIcon from "@mui/icons-material/Sync";
import PrimaryButton from "../../atoms/Button";

const TopBar = () => (
  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff" }}>
        Cash acceleration
      </Typography>
      <Tooltip title="Cash acceleration info">
        <IconButton sx={{ color: "#aaa" }}>
          <InfoOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Box>
    <PrimaryButton>
      <SyncIcon sx={{ mr: 1 }} /> Sync Now
    </PrimaryButton>
  </Box>
);

export default TopBar;
