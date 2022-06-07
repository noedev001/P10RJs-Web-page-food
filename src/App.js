import { GlobalStyles } from "./components/Globals.styles";
import styled from 'styled-components';
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "./components/layout/nav/NavBar";
import HeroSection from "./components/sections/hero-section/HeroSection";


const Container = styled.div`
height: 100vh;
padding: 0 100px;
position: relative;
`;

const LightTheme = {
  background: "white",
  fontColor: 'black'
};

const DarkTheme = {
  background: "black",
  fontColor: 'white'
};


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    console.log('dentro');
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <Container>
        <GlobalStyles />
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <HeroSection />
      </Container>
    </ThemeProvider>

  );
}

export default App;
