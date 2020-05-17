import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import {BrowserRouter, Route} from 'react-router-dom';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={MovieList} />
          <Route path="/details" component={Details} />
          <Route path="/edit" component={Edit} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
