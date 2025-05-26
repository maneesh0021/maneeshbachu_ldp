import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const ContractsTable = () => {
  const rows = [
    {
      name: "Contract 1",
      status: "Available",
      type: "Monthly",
      perPayment: "$12,000.25",
      totalAvailable: "$126,722.64",
    },
    {
      name: "Contract 3",
      status: "Available",
      type: "Monthly",
      perPayment: "$6,000.00",
      totalAvailable: "$63,360.00",
    },
    {
      name: "Contract 4",
      status: "Available",
      type: "Monthly",
      perPayment: "$6,000.00",
      totalAvailable: "$63,360.00",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Per Payment</TableCell>
            <TableCell>Total Financed</TableCell>
            <TableCell>Total Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Chip label={row.status} color="primary" />
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.perPayment}</TableCell>
              <TableCell>—</TableCell>
              <TableCell>{row.totalAvailable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContractsTable;
