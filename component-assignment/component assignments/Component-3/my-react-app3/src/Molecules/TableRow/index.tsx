import React from "react";
import Text from "../../Atoms/Text";
import "./index.css";

interface TableRowProps {
  name: string;
  type: string;
  payment: string;
  term: string;
  fee: string;
  amount: string;
  subAmount?: string;
  checked: boolean;
  onToggle: () => void;
}

const TableRow: React.FC<TableRowProps> = ({
  name,
  type,
  payment,
  term,
  fee,
  amount,
  subAmount,
  checked,
  onToggle,
}) => (
  <tr className={`table-row ${checked ? "row-selected" : ""}`}>
    <td>
      <input type="checkbox" checked={checked} onChange={onToggle} />
    </td>
    <td>
      <Text>{name}</Text>
    </td>
    <td>
      <Text>{type}</Text>
    </td>
    <td>
      <Text>{payment}</Text>
    </td>
    <td>
      <Text>{term}</Text>
      <br />
      <span className="sub-text">{fee}</span>
    </td>
    <td>
      <Text>{amount}</Text>
      {subAmount && (
        <>
          <br />
          <span className="sub-text">{subAmount}</span>
        </>
      )}
    </td>
  </tr>
);

export default TableRow;
