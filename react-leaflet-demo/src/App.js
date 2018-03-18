import React, { Component } from 'react';
import LeafletMap from './LeafletMap.js';
import MapboxMap from './MapboxMap.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false,
      showMapbox: false
    }
  }

  handleShowLayerChange = (event) => {
    this.setState({showLayer: event.target.checked});
  }

  handleMapboxChange = (event) => {
    this.setState({showMapbox: event.target.checked});
  }

  render() {
    return (
      <div>
        { this.state.showMapbox ? 
        <MapboxMap showLayer={this.state.showLayer}/>
        : <LeafletMap showLayer={this.state.showLayer}/>
        }
        <div id="control">
          <p>
            <input name="layercheckbox" type="checkbox" checked={this.state.showlayer} onChange={this.handleShowLayerChange} />
            <label htmlFor="layercheckbox">Show GeoJSON</label>
          </p>
          <p>
            <input name="mapboxcheck" type="checkbox" checked={this.state.showMapbox} onChange={this.handleMapboxChange} />
            <label htmlFor="mapboxcheck">Use Mapbox GL</label>  
          </p>  
        </div>
      </div>
    );
  }
}

export default App;
