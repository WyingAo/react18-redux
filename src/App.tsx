import React from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';
import { routes } from './router'
import RouterGurad from './component/router-guard'
function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li><Link to= '/'>Home</Link></li>
          <li><Link to= '/login'>Login</Link></li>
        </ul>
      </div>
      <RouterGurad routes={routes}></RouterGurad>
    </div>
  );
}

export default App;
