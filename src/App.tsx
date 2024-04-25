import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let firstValue: string = 'Juan';
  // let firstValue: number = 34;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 5];
  let firstValue: Array<string> = ['2', '3', 'Juan'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
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
