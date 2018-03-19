
import React from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './LeafletMap.css';

const geojson = require('./geojson.json')

export default class LeafletMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 47.22382,
      lng: 8.81669,
      zoom: 18,
    }
  }

  getStyle(feature, layer) {
    return {
      color: feature.properties.color,
      fillColor: feature.properties.color,
      fillOpacity: 0.65,
      weight: 3,
      opacity: 1
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        { this.props.showLayer &&
          <GeoJSON data={geojson} style={this.getStyle} />
        }
      </Map>
    );
  }
}