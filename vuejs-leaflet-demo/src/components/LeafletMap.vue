<template>
    <v-map id="leaflet-map" :zoom="zoom" :center="center">
      <v-tilelayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-geojson-layer v-if="showMapLayer" :geojson="geojson" :options="options"></v-geojson-layer>
    </v-map>
</template>

<script>
import Vue2Leaflet from 'vue2-leaflet';
export default {
  name: 'leaflet_map',
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer' :Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker,
    'v-geojson-layer' :Vue2Leaflet.GeoJSON,
  },
  props: ['showMapLayer'],
  data() {
   return {
    zoom: 18,
    center: [47.22382, 8.81669],
    options: {
      style: function (feature) {
        return {
          weight: 2,
          color: feature.properties.color,
          opacity: 1,
          fillColor: feature.properties.color,
          fillOpacity: 0.5
        }
      }
    },
    geojson: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
                "color": "#006400"
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    8.819457292556763,
                    47.223211449833855
                  ],
                  [
                    8.818899393081663,
                    47.2237214971068
                  ],
                  [
                    8.818620443344116,
                    47.22367049260031
                  ],
                  [
                    8.818373680114746,
                    47.22398380522203
                  ],
                  [
                    8.816914558410645,
                    47.22401295048805
                  ],
                  [
                    8.816657066345215,
                    47.223940087292966
                  ],
                  [
                    8.816378116607666,
                    47.22407124097203
                  ],
                  [
                    8.815691471099852,
                    47.22399109154005
                  ],
                  [
                    8.815090656280518,
                    47.22375792886706
                  ],
                  [
                    8.815305233001709,
                    47.223094866911026
                  ],
                  [
                    8.81553053855896,
                    47.22267225166655
                  ],
                  [
                    8.81579875946045,
                    47.22248280235991
                  ],
                  [
                    8.81604552268982,
                    47.222388077452706
                  ],
                  [
                    8.816367387771606,
                    47.22232249857165
                  ],
                  [
                    8.816560506820679,
                    47.22235164475102
                  ],
                  [
                    8.816496133804321,
                    47.22260667313704
                  ],
                  [
                    8.817375898361204,
                    47.22259210011944
                  ],
                  [
                    8.817633390426636,
                    47.22237350437504
                  ],
                  [
                    8.818641901016235,
                    47.22262853265589
                  ],
                  [
                    8.819457292556763,
                    47.223211449833855
                  ]
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {
                "color": "#640000"
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    8.817204236984253,
                    47.222471872571575
                  ],
                  [
                    8.817080855369568,
                    47.2224755158346
                  ],
                  [
                    8.817000389099121,
                    47.22245365625265
                  ],
                  [
                    8.816973567008972,
                    47.222391720721504
                  ],
                  [
                    8.816973567008972,
                    47.22232614184495
                  ],
                  [
                    8.81702184677124,
                    47.222307925475974
                  ],
                  [
                    8.817139863967896,
                    47.22228242254886
                  ],
                  [
                    8.817365169525146,
                    47.22227513599599
                  ],
                  [
                    8.817552924156189,
                    47.22226784944213
                  ],
                  [
                    8.817585110664368,
                    47.22229699565156
                  ],
                  [
                    8.81754755973816,
                    47.22234071493565
                  ],
                  [
                    8.817354440689087,
                    47.22240993706171
                  ],
                  [
                    8.817231059074402,
                    47.222464586044744
                  ],
                  [
                    8.817204236984253,
                    47.222471872571575
                  ]
                ]
              ]
            }
          }
        ]
      }
   }
  }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";

#leaflet-map {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
}
</style>
