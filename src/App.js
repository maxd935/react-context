import './App.css';
import React from 'react';
import {MyCardClassContext} from './components/MyCardClassContext'
import {MyContextColor} from './components/MyContextColor'
import {MyCardClass} from './components/MyComponentClass'
import {MyCardFunction} from './components/MyComponentFunction'
import {MyCardFunctionContext} from './components/MyCardFunctionContext'

function App() {
  // Methode 2 With Provider
  const obj = {color : "yellow", text:"CONTEXT App"}
  return (
    <div className="App">
      {/* Methode 1 Whitout Provider (use the defaultValue in Create Context './components/MyContextColor') */}

      {/* Provider HERE */}
      {/* <MyContextColor.Provider value={obj}> */}
        <MyCardClass />
        {/* <MyCardFunction color="lightblue" /> */}
        {/* <MyCardClassContext /> */}
        {/* <MyCardFunctionContext />/ */}
      {/* </MyContextColor.Provider> */}
    </div>
  );
}

// CYCLE DE VIE 
// Object parametrable attribut

export default App;
