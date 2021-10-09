import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import GlobalStyle from "styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import themes from "themes/default";
import { Container } from "styles/Container";
import { useLoaded } from "components/hooks/useLoaded";

const Layout = ({ children }) => {
  const loaded = useLoaded();

  if (!loaded) return "";

  return (
    <ThemeProvider theme={themes}>
      <div>
        <GlobalStyle />
        <Navbar />
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
