var size = 0;
var placement = 'point';

var style_20002014fatalities_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("fatalities_00_14");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 23.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 23.000000 && value <= 92.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.9 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 92.000000 && value <= 188.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 11.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 188.000000 && value <= 337.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 14.9 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 337.000000 && value <= 537.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 18.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(50,87,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(72,123,182,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
