import React from 'react';
import { routes } from './router'
import RouterGurad from './component/router-guard'
function App() {
  return (
    <div className="App">
      <RouterGurad routes={routes}></RouterGurad>
    </div>
  );
}

export default App;
