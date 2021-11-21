import * as Cesium from "cesium";
import * as exampleLoaders from "./examples";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
});

// set the initial view to China instead of United States, hhhhh
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(108, 34, 10000000),
  orientation: {
    heading: 0,
    pitch: -Math.PI / 2,
    roll: 0,
  },
});

exampleLoaders.flowlineLoader(viewer).then((ds) => {
  viewer.flyTo(ds);
});
