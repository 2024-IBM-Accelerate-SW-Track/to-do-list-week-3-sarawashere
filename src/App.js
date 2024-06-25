import React from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
    </div>
  );
}

export default App;
