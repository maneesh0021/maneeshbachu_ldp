import { useState } from "react";
import Sidebar from "./components/organisms/SideBar";
import { Box, Typography } from "@mui/material";
import "./App.css";

const App = () => {
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <Box display="flex" height="100vh">
      <Sidebar selected={selected} setSelected={setSelected} />
      <Box flex={1} p={4}>
        <Typography variant="h4" sx={{ fontFamily: "MyFont.ttf" }}>
          {selected}
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
