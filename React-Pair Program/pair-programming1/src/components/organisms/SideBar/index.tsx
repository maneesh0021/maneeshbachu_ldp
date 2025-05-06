import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import IconLabel from "../../molecules/IconLabel";
import { NAV_ITEMS } from "../../../utils/constants";
import CustomTypography from "../../atoms/Typography";

export interface SidebarProps {
  selected: string;
  setSelected: (value: string) => void;
}

const SidebarContainer = styled(Box)({
  width: "15rem",
  backgroundColor: "#f5f5f5",
  padding: "0.90rem",
});

const SidebarTitle = styled(CustomTypography)({
  marginBottom: "1rem",
  fontWeight: "bold",
  fontSize: "1.25rem",
  color: "#000",
});

const NavItem = styled(Box)<{ isSelected: boolean }>(({ isSelected }) => ({
  padding: "0.5rem",
  marginBottom: "0.5rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  backgroundColor: isSelected ? "#e0f0ff" : "transparent",
  "&:hover": {
    backgroundColor: "#e6f7ff",
  },
}));

const Sidebar: React.FC<SidebarProps> = ({ selected, setSelected }) => {
  const [prevSelected, setPrevSelected] = useState<string>("");

  useEffect(() => {
    setPrevSelected(selected);
  }, [selected]);

  const handleItemClick = (label: string) => {
    console.log("Previous selected:", prevSelected);
    setSelected(label);
  };

  return (
    <SidebarContainer>
      <SidebarTitle variant="h6">RECRUIT</SidebarTitle>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item?.label}
          isSelected={item?.label === selected}
          onClick={() => handleItemClick(item?.label || "")}
        >
          <IconLabel icon={item?.icon} text={item?.label || ""} />
        </NavItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
