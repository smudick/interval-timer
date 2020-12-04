import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styling/App.scss';
import Routes from './helpers/Routes';
import MyNav from './components/MyNav';

class App extends React.Component {
  render() {
    return (
<div className="App">
        <Router>
          <MyNav />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
