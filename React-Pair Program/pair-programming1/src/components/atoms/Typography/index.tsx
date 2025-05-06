import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface CustomTypographyProps extends TypographyProps {
  text?: string;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  ...typographyProps
}) => {
  return <Typography {...typographyProps}>{children}</Typography>;
};

export default CustomTypography;
