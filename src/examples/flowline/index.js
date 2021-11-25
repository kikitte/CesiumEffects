import * as Cesium from "cesium";
import { FlowLineMaterial } from "../../materials";
import lines from "./lines.geojson";

/**
 *
 * @param {Cesium.Viewer} viewer
 * @returns {Promise<Cesium.DataSource>}
 */
export default function load(viewer) {
  return Cesium.GeoJsonDataSource.load(lines, {
    strokeWidth: 20,
    clampToGround: true
  }).then((ds) => {
    ds.entities.values.forEach((entity) => {
      const lineLength = entity.properties.getValue(
        Cesium.JulianDate.now()
      ).length;

      entity.polyline.material = new FlowLineMaterial.MaterialProperty({
        color: Cesium.Color.CORNFLOWERBLUE,
        imageHorizontalLength: 512,
        lineHorizonlLength: lineLength,
        duration: 20000,
      });
    });

    viewer.dataSources.add(ds);

    return ds;
  });
}
