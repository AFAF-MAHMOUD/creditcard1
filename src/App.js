import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="credit-card-title">CREDITCARD</h1>
      <div className="chip">
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/credit-card-chip-1522262-1288452.png" />
      </div>
      <div className="container">
        <div className="credit-info">
         
          <h2 className="main-number" >1235 1235 1235 1235</h2>
         
          <div className="nbr-two-valid-thru">
            <h3 className="nbr-two">4789</h3>
            <h3 className="valid-thru">11/50</h3>
          </div>
          <div  className="credit-holder">
          <h2>CREDITHOLDER</h2>
          </div>

        </div>
        <div className="credit-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-gLpla6sxYWU8_FNJz3KzU0li54I5FOriRdZLNHArSrUGu9ZJ&s" />
        </div>
      </div>
    </div>
  );
}

export default App;
