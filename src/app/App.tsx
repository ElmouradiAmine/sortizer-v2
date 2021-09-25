import { Grid } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import useStore from "../store/store";

function App() {
  const theme = useStore((state) => state.theme);

  return (
    <Grid
      templateRows="4.8rem 1fr 2.4rem"
      height="100vh"
      bgColor={theme === "light" ? "gray.100" : "#23272a"}
      gap="4"
      transition="all 0.3s"
    >
      <Header />
      <Main />
      <Footer />
    </Grid>
  );
}

export default App;
