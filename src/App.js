import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = "7636a491";
  const APP_KEY = "b605f9c2ecb8bd6d605741dbf87d609b";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
};

export default App;
