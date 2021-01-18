import React from 'react';
import './App.css';
import './responsive.css';
import Title from './components/pageFormat/Title.js'
import Home from './components/pageFormat/Home'

function App() {
  return (
    <div className="App">
      <Title />
      <Home />
    </div>
  );
}

export default App;