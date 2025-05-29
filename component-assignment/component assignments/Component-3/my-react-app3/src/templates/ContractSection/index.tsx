import React from "react";
import InfoIcon from "../../Atoms/InfoIcon";
import ContractTable from "../../organisms/ContractTable";
import "./index.css";

const ContractSection: React.FC = () => (
  <section className="contract-section">
    <div className="section-title">
      Selected contracts <InfoIcon />
    </div>
    <ContractTable />
  </section>
);

export default ContractSection;
