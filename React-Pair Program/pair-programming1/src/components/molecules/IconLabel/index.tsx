import React from "react";
import {  Box } from "@mui/material";
import Icon from "../../atoms/Icon";
import CustomTypography from "../../atoms/Typography";

export interface IconLabelProps {
  icon: string;
  text: string;
}

const IconLabel: React.FC<IconLabelProps> = ({ icon, text }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={1.5}>
        <Icon src={icon} />
      </Box>
      <CustomTypography>{text}</CustomTypography>
    </Box>
  );
};

export default IconLabel;
