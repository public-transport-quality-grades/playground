<template>
    <mapbox
      access-token="not-required"
      :map-options="{
          style: 'https://free.tilehosting.com/styles/bright/style.json?key=HEhIieMgsLPA7PKcbTfx',
          center: center,
          zoom: zoom
        }"
        @map-load="mapLoaded">
    </mapbox>
</template>

<script>

import Mapbox from 'mapbox-gl-vue';

const geojson = require('../assets/geojson.json');

const geojsonLayerId = 'geojson-layer'

export default {
  name: 'leaflet_map',
  components: {
    Mapbox
  },
  props: ['showMapLayer'],
  watch: {
    'showMapLayer': function(newValue) {
      if (!!this.map) {
        var visValue = newValue ? 'visible' : 'none';
        console.log("Set layer visibility to ", visValue);
        this.map.setLayoutProperty(geojsonLayerId, 'visibility', visValue);
      } else {
        console.log("map not initialized");
      }
    }
  },
  methods: {
    mapLoaded(map) {
      // pull map into scope
      this.map = map;
      map.addLayer({
        'id': geojsonLayerId,
        'type': 'fill',
        'source': {
          'type': "geojson",
          'data': geojson,
          },
        'layout': {
          'visibility': 'none'
        },
        'paint': {
            'fill-color': ["get", "color"],
            'fill-opacity': 0.65
        }
      });
    }
  },

  data() {
   return {
    map: {},
    zoom: 17,
    center: [8.81669, 47.22382],
   }
  }
}
</script>

<style>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
