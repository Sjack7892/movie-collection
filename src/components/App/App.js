import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import {BrowserRouter, Route} from 'react-router-dom';
import Details from '../Details/Details';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        {/* <h1>Home</h1> */}
          <Route exact path="/" component={MovieList} />
          <Route path="/details" component={Details} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
