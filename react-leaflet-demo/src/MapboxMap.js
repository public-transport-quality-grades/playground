
import React from 'react';
import ReactMapboxGl, {GeoJSONLayer} from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "not-needed",
});

const geojson = require('./geojson.json');


export default class MapboxMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [8.81669, 47.22382],
      zoom: [17],
    }
  }


  render() {
    return (
      <Map 
        style="https://free.tilehosting.com/styles/basic/style.json?key=HEhIieMgsLPA7PKcbTfx"
        center={this.state.center}
        zoom={this.state.zoom}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        { this.props.showLayer &&
        <GeoJSONLayer data={geojson}
        fillPaint = {{
          "fill-color": ["get", "color"],
          "fill-opacity": 0.65
          }} />
        }
      </Map>
    );
  }
}