var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_19851999fatalities_1 = new ol.format.GeoJSON();
var features_19851999fatalities_1 = format_19851999fatalities_1.readFeatures(json_19851999fatalities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19851999fatalities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19851999fatalities_1.addFeatures(features_19851999fatalities_1);
var lyr_19851999fatalities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19851999fatalities_1, 
                style: style_19851999fatalities_1,
                popuplayertitle: "1985-1999 fatalities",
                interactive: true,
    title: '1985-1999 fatalities<br />\
    <img src="styles/legend/19851999fatalities_1_0.png" /> 0 - 34<br />\
    <img src="styles/legend/19851999fatalities_1_1.png" /> 34 - 101<br />\
    <img src="styles/legend/19851999fatalities_1_2.png" /> 101 - 234<br />\
    <img src="styles/legend/19851999fatalities_1_3.png" /> 234 - 329<br />\
    <img src="styles/legend/19851999fatalities_1_4.png" /> 329 - 535<br />'
        });
var format_20002014fatalities_2 = new ol.format.GeoJSON();
var features_20002014fatalities_2 = format_20002014fatalities_2.readFeatures(json_20002014fatalities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20002014fatalities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20002014fatalities_2.addFeatures(features_20002014fatalities_2);
var lyr_20002014fatalities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20002014fatalities_2, 
                style: style_20002014fatalities_2,
                popuplayertitle: "2000-2014 fatalities",
                interactive: true,
    title: '2000-2014 fatalities<br />\
    <img src="styles/legend/20002014fatalities_2_0.png" /> 0 - 23<br />\
    <img src="styles/legend/20002014fatalities_2_1.png" /> 23 - 92<br />\
    <img src="styles/legend/20002014fatalities_2_2.png" /> 92 - 188<br />\
    <img src="styles/legend/20002014fatalities_2_3.png" /> 188 - 337<br />\
    <img src="styles/legend/20002014fatalities_2_4.png" /> 337 - 537<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_19851999fatalities_1.setVisible(true);lyr_20002014fatalities_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_19851999fatalities_1,lyr_20002014fatalities_2];
lyr_19851999fatalities_1.set('fieldAliases', {'airline': 'airline', 'VOCAB_LABEL': 'VOCAB_LABEL', 'LAT': 'LAT', 'LNG': 'LNG', 'avail_seat_km_per_week': 'avail_seat_km_per_week', 'incidents_85_99': 'incidents_85_99', 'fatal_accidents_85_99': 'fatal_accidents_85_99', 'fatalities_85_99': 'fatalities_85_99', 'incidents_00_14': 'incidents_00_14', 'fatal_accidents_00_14': 'fatal_accidents_00_14', 'fatalities_00_14': 'fatalities_00_14', });
lyr_20002014fatalities_2.set('fieldAliases', {'airline': 'airline', 'VOCAB_LABEL': 'VOCAB_LABEL', 'LAT': 'LAT', 'LNG': 'LNG', 'avail_seat_km_per_week': 'avail_seat_km_per_week', 'incidents_85_99': 'incidents_85_99', 'fatal_accidents_85_99': 'fatal_accidents_85_99', 'fatalities_85_99': 'fatalities_85_99', 'incidents_00_14': 'incidents_00_14', 'fatal_accidents_00_14': 'fatal_accidents_00_14', 'fatalities_00_14': 'fatalities_00_14', });
lyr_19851999fatalities_1.set('fieldImages', {'airline': 'TextEdit', 'VOCAB_LABEL': 'TextEdit', 'LAT': 'TextEdit', 'LNG': 'TextEdit', 'avail_seat_km_per_week': 'TextEdit', 'incidents_85_99': 'Range', 'fatal_accidents_85_99': 'Range', 'fatalities_85_99': 'Range', 'incidents_00_14': 'Range', 'fatal_accidents_00_14': 'Range', 'fatalities_00_14': 'Range', });
lyr_20002014fatalities_2.set('fieldImages', {'airline': 'TextEdit', 'VOCAB_LABEL': 'TextEdit', 'LAT': 'TextEdit', 'LNG': 'TextEdit', 'avail_seat_km_per_week': 'TextEdit', 'incidents_85_99': 'Range', 'fatal_accidents_85_99': 'Range', 'fatalities_85_99': 'Range', 'incidents_00_14': 'Range', 'fatal_accidents_00_14': 'Range', 'fatalities_00_14': 'Range', });
lyr_19851999fatalities_1.set('fieldLabels', {'airline': 'no label', 'VOCAB_LABEL': 'no label', 'LAT': 'no label', 'LNG': 'no label', 'avail_seat_km_per_week': 'no label', 'incidents_85_99': 'no label', 'fatal_accidents_85_99': 'no label', 'fatalities_85_99': 'no label', 'incidents_00_14': 'no label', 'fatal_accidents_00_14': 'no label', 'fatalities_00_14': 'no label', });
lyr_20002014fatalities_2.set('fieldLabels', {'airline': 'no label', 'VOCAB_LABEL': 'no label', 'LAT': 'no label', 'LNG': 'no label', 'avail_seat_km_per_week': 'no label', 'incidents_85_99': 'no label', 'fatal_accidents_85_99': 'no label', 'fatalities_85_99': 'no label', 'incidents_00_14': 'no label', 'fatal_accidents_00_14': 'no label', 'fatalities_00_14': 'no label', });
lyr_20002014fatalities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});