import { Viewer, UrlTemplateImageryProvider, ImageryLayer, WebMercatorTilingScheme, buildModuleUrl } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
window.CESIUM_BASE_URL = "/cesium/";
const viewer = new Viewer("cesiumContainer", {
  baseLayer: new ImageryLayer(new UrlTemplateImageryProvider({
    url: "ice-age-tiles/{z}/{x}/{reverseY}.png",
    tilingScheme : new WebMercatorTilingScheme(),
    maximumLevel : 6,
    credit:"Jillian Ada Burrows Sosa"
  })),
  baseLayerPicker: false,
  geocoder: false,
});
