import React from 'react';
import './App.scss';

import Content from './components/content'

function App() {
  return (
    <div className="App">
      <div style={{ width: '100%', overflow: 'scroll' }}>
          <Content />
      </div>
    </div>
  );
}

export default App;
