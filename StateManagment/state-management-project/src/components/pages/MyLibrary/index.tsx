import Header from "../../organisms/Header/index";
import LibraryTabs from "../../organisms/LibraryTabs";
import { Typography, Container } from "@mui/material";

const MyLibrary = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" mt={4} mb={2}>
          My Library
        </Typography>
        <LibraryTabs />
      </Container>
    </>
  );
};

export default MyLibrary;
