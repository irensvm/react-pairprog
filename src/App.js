import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <Navbar name='Our App'/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="d-flex flex-wrap"> 
      <Card
        img="img-card.png"
        title="lorem ipsum"
        text="este es el texto denuestra card"
      />
       <Card
        img="img-card.png"
        title="lorem ipsum"
        text="este es el texto denuestra card"
      /> 
      <Card
        img="/img-card.png"
        title="lorem ipsum"
        text="este es el texto denuestra card"
      /> 
      <Card
        img="/img-card.png"
        title="lorem ipsum"
        text="este es el texto denuestra card"
      />
      <Card
        img="/img-card.png"
        title="lorem ipsum"
        text="este es el texto denuestra card"
      />
      </div>
      
    </div>
  );
}

export default App;
