import React, { useState } from "react";
import Label from "../../Atoms/Label";
import TableRow from "../../Molecules/TableRow";
import "./index.css";

interface RowData {
  name: string;
  type: string;
  payment: string;
  term: string;
  fee: string;
  amount: string;
  subAmount?: string;
}

const ContractTable: React.FC = () => {
  const [selected, setSelected] = useState<boolean[]>([false, false]);

  const data: RowData[] = [
    {
      name: "Contract 1",
      type: "Monthly",
      payment: "$12,000.25",
      term: "12 months",
      fee: "12.0% fee",
      amount: "$126,722.64",
    },
    {
      name: "Contract 2",
      type: "Monthly",
      payment: "$6,000.00",
      term: "12 months",
      fee: "12.0% fee",
      amount: "$23,277.36",
      subAmount: "$63,389.09",
    },
  ];

  const handleToggle = (index: number) => {
    const updated = [...selected];
    updated[index] = !updated[index];
    setSelected(updated);
  };

  return (
    <table className="contract-table">
      <thead className="table-header">
        <tr>
          <th></th>
          <th>
            <Label>Name</Label>
          </th>
          <th>
            <Label>Type</Label>
          </th>
          <th>
            <Label>Per payment</Label>
          </th>
          <th>
            <Label>Term length</Label>
          </th>
          <th>
            <Label>Payment amount</Label>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow
            key={index}
            {...item}
            checked={selected[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContractTable;
