import React from "react";
import { Typography, Box } from "@mui/material";
import Icon from "../../atoms/Icon";

interface Props {
  icon: string;
  text: string;
}

const IconLabel: React.FC<Props> = ({ icon, text }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={1.5}>
        <Icon src={icon} />
      </Box>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default IconLabel;
