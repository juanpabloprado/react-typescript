import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // tuple
  let aTuple: [string, number] = ['Juan', 34];
  // enum
  enum Codes {first = 1, second = 2}
  // any
  let firstName: any = 3;
  // void
  const warning = (): void => {
    console.log('Warning');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {warning.toString()} is of {typeof warning} type!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
