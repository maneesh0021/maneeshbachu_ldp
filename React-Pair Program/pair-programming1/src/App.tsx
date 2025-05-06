import { useState } from "react";
import Sidebar from "./components/organisms/SideBar";
import { Box } from "@mui/material";
import CustomTypography from "./components/atoms/Typography";
import { styled } from "@mui/system";

const StyledBox = styled(Box)`
  display: flex;
  height: 100vh;
`;

const StyledTypography = styled(CustomTypography)`
  font-family: "MyFont.ttf";
`;

const App = () => {
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <StyledBox>
      <Sidebar selected={selected} setSelected={setSelected} />
      <Box flex={1} p={4}>
        <StyledTypography variant="h4">{selected}</StyledTypography>
      </Box>
    </StyledBox>
  );
};

export default App;
