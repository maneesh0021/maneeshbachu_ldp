import React, { JSX } from "react";
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
}) => {
  const rowData: (JSX.Element | string)[] = [
    <Text>{name}</Text>,
    <Text>{type}</Text>,
    <Text>{payment}</Text>,
    <>
      <Text>{term}</Text>
      <br />
      <span className="sub-text">{fee}</span>
    </>,
    <>
      <Text>{amount}</Text>
      {subAmount && (
        <>
          <br />
          <span className="sub-text">{subAmount}</span>
        </>
      )}
    </>,
  ];

  return (
    <tr className={`table-row ${checked ? "row-selected" : ""}`}>
      <td>
        <input type="checkbox" checked={checked} onChange={onToggle} />
      </td>
      {rowData.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  );
};

export default TableRow;
