import React, { FC, ReactElement } from 'react';
import './App.scss';

const App: FC = (): ReactElement => {
  const newLogo = `
https://upload.wikimedia.org/
wikipedia/commons/thumb/4/47/React.svg/
1200px-React.svg.png`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={newLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
};

export default App;
