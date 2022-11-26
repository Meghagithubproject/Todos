import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos/Todos';
import React from 'react';
import Navigation from './Components/Navigation/Navigation';


function App() {

  return (
    <div>
    <Navigation></Navigation>
    <Todos></Todos>
    </div>
  );
}

export default App;
