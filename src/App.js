import React from 'react';
import './stylesheets/App.css';
import './stylesheets/responsive.css';
import './stylesheets/categories.css'
// import './stylesheets/light-dark-theme.css'
import Title from './components/pageFormat/Title.js'
import Home from './components/pageFormat/Home'
import ThemeSwitcher from './components/pageFormat/ThemeSwitcher'

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />
      <Title />
      <Home />
    </div>
  );
}

export default App;