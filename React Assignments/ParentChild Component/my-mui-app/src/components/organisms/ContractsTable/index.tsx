import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import StatusChip from "../../atoms/Chip";

const mockData = [
  {
    name: "Contract 1",
    status: "Available",
    type: "Monthly",
    payment: "$12,000.25",
    available: "$126,722.64",
  },
  {
    name: "Contract 3",
    status: "Available",
    type: "Monthly",
    payment: "$6,000.00",
    available: "$63,360.00",
  },
  {
    name: "Contract 4",
    status: "Available",
    type: "Monthly",
    payment: "$6,000.00",
    available: "$63,360.00",
  },
];

const ContractsTable = () => (
  <Table sx={{ mt: 3, backgroundColor: "#1e1e20", borderRadius: "10px" }}>
    <TableHead>
      <TableRow sx={{ backgroundColor: "#2a2a2c" }}>
        {[
          "Name",
          "Status",
          "Type",
          "Per payment",
          "Total financed",
          "Total available",
        ].map((header) => (
          <TableCell key={header} sx={{ color: "#fff" }}>
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {mockData.map((row, i) => (
        <TableRow key={i}>
          <TableCell sx={{ color: "#fff" }}>{row.name}</TableCell>
          <TableCell>
            <StatusChip label={row.status} />
          </TableCell>
          <TableCell sx={{ color: "#fff" }}>{row.type}</TableCell>
          <TableCell sx={{ color: "#fff" }}>{row.payment}</TableCell>
          <TableCell sx={{ color: "#fff" }}>—</TableCell>
          <TableCell sx={{ color: "#fff" }}>{row.available}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ContractsTable;
