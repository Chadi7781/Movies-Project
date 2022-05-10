import React, { useState } from 'react';
import './App.css';
import MapExample from './components/MapExample';
import Simple from './components/Simple';
import GrandParent from './components/useContext/GrandParent';
import ValueContext from './components/useContext/ValueContext';
import UseEffectExamples from './components/UseEffectExamples';

export function App() {
  const [hide,setHide]= useState(false);
  return (
    <div className="App">
      {/* <Simple/>
      <MapExample/> */}
      <input type="checkbox" onChange={()=>setHide(!hide) }/>Hide
      {
        hide ? null :      <UseEffectExamples/>
 
      }
      <ValueContext.Provider value={hide}>

      <GrandParent/>

      </ValueContext.Provider>

      
    </div>
  );
}

