import React, { Component } from 'react';
import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import DashBoardScreen from './screens/DashBoardScreen';
// import LoginScreen from './screens/LoginScreen';
// import UserScreen from './screens/UserScreen';
// import NavBarComponent from './components/NavBarComponent';

import DashBoardComponent from './components/DashBoardComponent'


class App extends Component {
  /*We render the Router and NavBarComponent.*/
  render() {
    return (
      <div className="App">

    
        <DashBoardComponent/>

      </div>
    );
  }
}

export default App;
