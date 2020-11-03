//import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor() {
    this.state = {
      title: 'Savant x Film Room'
    }    
  }
  render() {
    return (
    <div className="App">
      <h1> Hello from Savant x MLB Film Room</h1>
    </div>
  );
    }
}

export default App;
