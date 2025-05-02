import Chip from "@mui/material/Chip";

const StatusChip = ({ label }: { label: string }) => (
  <Chip
    label={label}
    sx={{
      backgroundColor: "#2c2c2e",
      color: "#fff",
      borderRadius: "6px",
      fontWeight: 500,
    }}
  />
);

export default StatusChip;
