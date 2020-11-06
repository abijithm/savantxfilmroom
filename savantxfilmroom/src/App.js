//import logo from './logo.svg';
import React, {Component, Fragment} from 'react'
import './App.css';

import ListData from "./components/listData.js"

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <ListData></ListData>
        </div>
      </Fragment>
    );
  }
}

export default App;
