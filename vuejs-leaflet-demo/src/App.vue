<template>
  <div id="my-map">
    <leaflet-map v-bind:show-map-layer="showLayer"></leaflet-map>
    <div id="map-control">
      <input type="checkbox" id="checkbox" v-model="showLayer">
      <label for="checkbox">Show Layer</label>
    </div>
  </div>
</template>

<script>
import Map from './components/Map'

export default {
  name: 'app',
  components: {
    'leaflet-map': Map,
  },
  data () {
    return {
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
