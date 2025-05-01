import { useState } from "react";
import Sidebar from "./components/organisms/Sidebar";
import { Box, Typography } from "@mui/material";

const App = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box display="flex" height="100vh">
      <Sidebar selected={selected} setSelected={setSelected} />
      <Box flex={1} p={4}>
        <Typography variant="h4">{selected}</Typography>
      </Box>
    </Box>
  );
};

export default App;
