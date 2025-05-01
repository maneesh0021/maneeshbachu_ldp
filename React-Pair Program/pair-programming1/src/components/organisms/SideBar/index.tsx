import React from "react";
import styled from "styled-components";
import { NAV_ITEMS } from "../../../utils/constants";
import IconLabel from "../../molecules/IconLabel";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
}

const SidebarWrapper = styled.div`
  width: 220px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const SidebarHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`;

const NavItem = styled.div<{ active: boolean }>`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: ${({ active }) => (active ? "#e0f0ff" : "transparent")};
  cursor: pointer;

  &:hover {
    background-color: #e6f7ff;
  }
`;

const Sidebar: React.FC<Props> = ({ selected, setSelected }) => {
  return (
    <SidebarWrapper>
      <SidebarHeader>RECURIT</SidebarHeader>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.label}
          active={item.label === selected}
          onClick={() => setSelected(item.label)}
        >
          <IconLabel icon={item.icon} text={item.label} />
        </NavItem>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
