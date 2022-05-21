import React from 'react';
import './App.scss';
import { Home } from './screen/exports';
import { Header } from './std_com/_exports';

function App() {
  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}

export default App;
