import React, { Component } from 'react';
import './Resto.css'
import Map from './Map'
class About extends Component {
  render() {
    return (
      <div id="aboutPage">
        <h1>Who we are???</h1>
        <h3>We are new built start up based on Jakarta.</h3>
        <Map/>
      </div>
    );
  }
}

export default About;