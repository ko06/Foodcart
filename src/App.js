import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fliter  from  './component/fliterPage'
import CartApp  from  './component/Cart'
function App() {
  return (
    <div>
      <div className="topbar"> Top bar</div>
      <div className="container">
      <Fliter/>
      <CartApp/>
      </div>
    </div>
  );
}

export default App;
