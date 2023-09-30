import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/application';
import Skills from './components/skills/skills';

function App() {
  const skills = ['HTML', 'CSS'];
  return (
    <div className="App">
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
