<template>
  <div id="my-map">
    <mapbox-map v-if="useMapbox" v-bind:show-map-layer="showLayer"></mapbox-map>
    <leaflet-map v-else v-bind:show-map-layer="showLayer"></leaflet-map>
    <div id="map-control">
      <p>
        <input type="checkbox" id="checkbox-lf" v-model="showLayer">
        <label for="checkbox-lf">Show GeoJSON</label>
      </p>
      <p>
        <input type="checkbox" id="checkbox-mp" v-model="useMapbox">
        <label for="checkbox-mp">Use mapbox-gl</label>
      </p>
    </div>
  </div>
</template>

<script>
import LeafletMap from './components/LeafletMap'
import MapboxMap from './components/MapboxMap'


export default {
  name: 'app',
  components: {
    'leaflet-map': LeafletMap,
    'mapbox-map': MapboxMap
  },
  data () {
    return {
      useMapbox: false,
      showLayer: false
    }
  }
}
</script>

<style>
#map-control {
  background: white;
  position: absolute;
  z-index: 1000;
  left: 20px;
  top: 100px;
  padding: 5pt 5pt;
  box-shadow: 4px 4px 5px 2px rgba(0,0,0,0.22);
}
</style>
