import { Box, Typography, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SyncIcon from "@mui/icons-material/Sync";

const TopBar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Box display="flex" alignItems="center">
        <Typography variant="h5" mr={1}>
          Cash Acceleration
        </Typography>
        <InfoOutlinedIcon fontSize="small" />
      </Box>
      <IconButton color="primary">
        Sync Now
        <SyncIcon />
      </IconButton>
    </Box>
  );
};

export default TopBar;
