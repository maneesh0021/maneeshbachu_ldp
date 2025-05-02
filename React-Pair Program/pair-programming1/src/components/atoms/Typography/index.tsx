import React from "react";
import { Typography } from "@mui/material";

interface Props {
  text: string;
}

const TypographyText: React.FC<Props> = ({ text }) => {
  return <Typography>{text}</Typography>;
};

export default TypographyText;
