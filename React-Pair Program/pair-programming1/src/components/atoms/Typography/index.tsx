import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface CustomTypographyProps extends TypographyProps {
  text: string;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
  text,
  ...typographyProps
}) => {
  return <Typography {...typographyProps}>{text}</Typography>;
};

export default CustomTypography;
