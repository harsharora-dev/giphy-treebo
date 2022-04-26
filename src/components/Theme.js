import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const themeTypes = { 
  light: {
    body: "#FFFFFF",
    text: "#363537",
    inputColor: "#000000"
  },
  dark: {
    text: "#FAFAFA",
    body: "#121212",
    inputColor: "#000000"
  }
}

const Heading = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 900;
`;

const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Switch = styled.button`
  appearance: none;
  width: 40px;
  height: 40px;
  font-size: 30px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return <ThemeProvider theme={themeTypes[theme]}>
    <Container>
      <Header>
        <Heading>GIPHY</Heading>
        <Switch onClick={toggleTheme}>{theme === "light" ? "🌚" : "🌕"}</Switch>
      </Header>
    {children}
    </Container>
  </ThemeProvider>
};

export default Theme;