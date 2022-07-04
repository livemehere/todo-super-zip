import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Container } from "./style";
import { GlobalStyle, lightTheme, darkTheme } from "./global-stye";
import Nav from "./components/nav";

export type ColorMode = "light" | "dark";

const Home = React.lazy(() => import("./pages/home"));
const Detail = React.lazy(() => import("./pages/detail"));

export default function App() {
  const [mode, setMode] = useState<ColorMode>("light");

  return (
    <BrowserRouter>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Container>
          <Nav mode={mode} setMode={setMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail">
              <Route path=":id" element={<Detail />} />
            </Route>
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
