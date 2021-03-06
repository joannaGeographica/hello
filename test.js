<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>DevLabs - Display a Web Map</title>
  <style>
    html, body, #viewDiv {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
    }
    #titleDiv {
      position: absolute;
      width: 100%;
      padding: 15px;
      line-height: 1;
      z-index: 1;
      background: #fff;
      font-family: "Avenir Next W00";
      font-size: 20px;
    }
  </style>
  <link rel="stylesheet" href="https://js.arcgis.com/4.5/esri/css/main.css">
  <script src="https://js.arcgis.com/4.5/"></script>
  <script>
    require([
      "esri/WebMap",
      "esri/views/SceneView",
      "esri/widgets/Legend",
      "esri/widgets/Locate",
      "dojo/domReady!"
    ], function(WebMap, MapView, Legend, Locate) {

      var webmap = new WebMap({
        portalItem: {
          id: "41281c51f9de45edaf1c8ed44bb10e30" // This was created in the Create a web map lab
        }
      });

      var view = new MapView({
        container: "viewDiv",
        map: webmap,
        padding: {top: 50}
      });
      
      // Challenge 
      
      webmap.then(function(map){
        document.getElementById("titleDiv").innerHTML = map.portalItem.title;
      });
      
      var legend = new Legend({
        view: view
      });
      
      view.ui.add(legend, "top-right");
      
      view.ui.add(new Locate({view: view}), "top-left");
      
    });
  </script>
</head>
<body>
  <div id="titleDiv"></div>
  <div id="viewDiv"></div>
</body>
</html>
