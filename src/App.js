import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResponsiveDrawer from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <ResponsiveDrawer />
      </div>
    </Router>
  );
}

export default App;
