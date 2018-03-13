import React, { Component } from 'react';
import MyMap from './MyMap.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLayer: false
    }
  }

  handleChange = (event) => {
    this.setState({showLayer: event.target.checked});
  }

  render() {
    return (
      <div>
        <MyMap showLayer={this.state.showLayer}/>
        <div id="control">
          <input name="layercheckbox" type="checkbox" checked={this.state.showlayer} onChange={this.handleChange} />
          <label htmlFor="layercheckbox">Show Layer</label>
        </div>
      </div>
    );
  }
}

export default App;
