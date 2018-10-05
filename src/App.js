import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import HauntedMap from './components/HauntedMap'
// import FourSquare from './api/FourSquare'

class App extends Component {
  /*
  componentDidMount() {
    FourSquare.search({
      near: "Disney World",
      query: "food",
      limit: 10
    }).then(results => console.log(results));
  }
  */
  render () {

    return (
      <main>
        <div id="map">
        {/*<h1 className="heading"> Pittsburgh, PA </h1>*/}
         <HauntedMap  />
      </div>
      </main>
    );
  }
}
export default App