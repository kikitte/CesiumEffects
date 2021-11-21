import * as Cesium from "cesium";
import source from "./materialsource.glsl";

export const MaterialType = "PolylineFlow";

Cesium.Material.PolylineFlowType = MaterialType;
Cesium.Material._materialCache.addMaterial(MaterialType, {
  fabric: {
    type: Cesium.Material.PolylineFlowType,
    uniforms: {
      color: Cesium.Color.RED,
      image: "",
      imageHorizontalLength: 1024.0,
      lineHorizonlLength: 0.0,
      phaseOffset: 0.0, // 相位偏差
    },
    source: source,
  },
});
