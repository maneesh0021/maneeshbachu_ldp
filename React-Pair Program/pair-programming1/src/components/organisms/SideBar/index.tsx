import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import IconLabel from "../../molecules/IconLabel";
import { NAV_ITEMS } from "../../../utils/constants";

interface Props {
  selected: string;
  setSelected: (value: string) => void;
}

const Sidebar: React.FC<Props> = ({ selected, setSelected }) => {
  const [prevSelected, setPrevSelected] = useState<string>("");

  useEffect(() => {
    setPrevSelected(selected);
  }, [selected]);

  const handleItemClick = (label: string) => {
    console.log("Previous selected:", prevSelected);
    setSelected(label);
  };

  return (
    <Box width="15rem" bgcolor="#f5f5f5" p="0.90rem">
      <Typography variant="h6" color="textPrimary" mb="1rem">
        RECRUIT
      </Typography>
      {NAV_ITEMS.map((item) => (
        <Box
          key={item?.label}
          p="0.5rem"
          mb="0.5rem"
          borderRadius="0.5rem"
          bgcolor={item?.label === selected ? "#e0f0ff" : "transparent"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              bgcolor: "#e6f7ff",
            },
          }}
          onClick={() => handleItemClick(item?.label || "")}
        >
          <IconLabel icon={item?.icon} text={item?.label || ""} />
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
