import React from 'react';
import './App.css';
import { AppProviders } from './providers/app-providers';
import MuiMode from './components/mui/mui-mode';

function App() {
  const skills = ['HTML', 'CSS'];
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
