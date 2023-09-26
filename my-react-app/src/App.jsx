import React from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <h1>React App with Class and Functional Components</h1>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
