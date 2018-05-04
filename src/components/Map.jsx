import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor () {
    super()
    this.state = {
      center: { lat: -6.1776599510, lng: 106.7902901396 },
      zoom: 16
    }
  }
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <h2>Our Location</h2>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDVfIwkj4FarrkKs-7NyKeS37htaEA35yw'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={'Our location!'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;