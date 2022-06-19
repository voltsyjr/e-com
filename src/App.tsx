import React from "react";
import "./App.scss";
import { Home } from "./screen/exports";
import { Header } from "./std_com/_exports";
import { NavContextProvider } from "./contexts/NavigationContexts";
import { ToggleNavSlideProvider } from "./contexts/ToggleNavSlideContext";

function App() {
  return (
    <ToggleNavSlideProvider>
      <NavContextProvider>
        <Header />
        <Home />
      </NavContextProvider>
    </ToggleNavSlideProvider>
  );
}

export default App;
