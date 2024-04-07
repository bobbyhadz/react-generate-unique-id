import './App.css';

import React from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  console.log(uuidv4());

  return (
    <div style={{margin: 50}}>
      <h2>bobbyhadz.com</h2>

      <h2>{uuidv4()}</h2>
      <h2>{uuidv4()}</h2>
    </div>
  );
}

export default App;
