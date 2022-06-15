import React from "react";
import "./App.scss";
import { Home } from "./screen/exports";
import { Header } from "./std_com/_exports";
import {NavContext, NavContextProvider} from './contexts/NavigationContexts'; 

function App() {
  return (
    <NavContextProvider>
      <Header />
      <Home />
    </NavContextProvider>
  );
}

export default App;
