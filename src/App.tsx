import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/application';
import Skills from './components/skills/skills';
import Counter from './components/counter/counter';

function App() {
  const skills = ['HTML', 'CSS'];
  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skills skills={skills} /> */}
      <Counter />
    </div>
  );
}

export default App;
