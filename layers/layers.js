var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': '',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Efficiencyscore_1 = new ol.format.GeoJSON();
var features_Efficiencyscore_1 = format_Efficiencyscore_1.readFeatures(json_Efficiencyscore_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Efficiencyscore_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Efficiencyscore_1.addFeatures(features_Efficiencyscore_1);
var lyr_Efficiencyscore_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Efficiencyscore_1, 
                style: style_Efficiencyscore_1,
                popuplayertitle: '',
                interactive: true,
    title: '' });
var format_Coverageratio_2 = new ol.format.GeoJSON();
var features_Coverageratio_2 = format_Coverageratio_2.readFeatures(json_Coverageratio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Coverageratio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coverageratio_2.addFeatures(features_Coverageratio_2);
var lyr_Coverageratio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Coverageratio_2, 
                style: style_Coverageratio_2,
                popuplayertitle: 'Coverage ratio',
                interactive: true,
                title: ''
            });
var format_Equityindex_3 = new ol.format.GeoJSON();
var features_Equityindex_3 = format_Equityindex_3.readFeatures(json_Equityindex_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equityindex_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equityindex_3.addFeatures(features_Equityindex_3);
var lyr_Equityindex_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equityindex_3, 
                style: style_Equityindex_3,
                popuplayertitle: 'Equity index',
                interactive: true,
                title: ''
            });
var format_Householdcoveragefrequency_4 = new ol.format.GeoJSON();
var features_Householdcoveragefrequency_4 = format_Householdcoveragefrequency_4.readFeatures(json_Householdcoveragefrequency_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Householdcoveragefrequency_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Householdcoveragefrequency_4.addFeatures(features_Householdcoveragefrequency_4);
var lyr_Householdcoveragefrequency_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Householdcoveragefrequency_4, 
                style: style_Householdcoveragefrequency_4,
                popuplayertitle: 'Household coverage frequency',
                interactive: true,
                title: ''
            });
var format_Housesvisitedperday_5 = new ol.format.GeoJSON();
var features_Housesvisitedperday_5 = format_Housesvisitedperday_5.readFeatures(json_Housesvisitedperday_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Housesvisitedperday_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Housesvisitedperday_5.addFeatures(features_Housesvisitedperday_5);
var lyr_Housesvisitedperday_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Housesvisitedperday_5, 
                style: style_Housesvisitedperday_5,
                popuplayertitle: 'Houses visited per day',
                interactive: true,
                title: ''
            });
var format_Safetygearusenormalised_6 = new ol.format.GeoJSON();
var features_Safetygearusenormalised_6 = format_Safetygearusenormalised_6.readFeatures(json_Safetygearusenormalised_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Safetygearusenormalised_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Safetygearusenormalised_6.addFeatures(features_Safetygearusenormalised_6);
var lyr_Safetygearusenormalised_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Safetygearusenormalised_6, 
                style: style_Safetygearusenormalised_6,
                popuplayertitle: 'Safety gear use (normalised)',
                interactive: true,
                title: ''
            });
var format_SHGrepresentationinHKS_7 = new ol.format.GeoJSON();
var features_SHGrepresentationinHKS_7 = format_SHGrepresentationinHKS_7.readFeatures(json_SHGrepresentationinHKS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHGrepresentationinHKS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHGrepresentationinHKS_7.addFeatures(features_SHGrepresentationinHKS_7);
var lyr_SHGrepresentationinHKS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHGrepresentationinHKS_7, 
                style: style_SHGrepresentationinHKS_7,
                popuplayertitle: 'SHG representation in HKS',
                interactive: true,
                title: ''
            });
var format_Userfeerevenuenormalised_8 = new ol.format.GeoJSON();
var features_Userfeerevenuenormalised_8 = format_Userfeerevenuenormalised_8.readFeatures(json_Userfeerevenuenormalised_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Userfeerevenuenormalised_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Userfeerevenuenormalised_8.addFeatures(features_Userfeerevenuenormalised_8);
var lyr_Userfeerevenuenormalised_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Userfeerevenuenormalised_8, 
                style: style_Userfeerevenuenormalised_8,
                popuplayertitle: 'User fee revenue (normalised)',
                interactive: true,
                title: ''
            });
var format_PositionrankingsofHKSbyward_9 = new ol.format.GeoJSON();
var features_PositionrankingsofHKSbyward_9 = format_PositionrankingsofHKSbyward_9.readFeatures(json_PositionrankingsofHKSbyward_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PositionrankingsofHKSbyward_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PositionrankingsofHKSbyward_9.addFeatures(features_PositionrankingsofHKSbyward_9);
var lyr_PositionrankingsofHKSbyward_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PositionrankingsofHKSbyward_9, 
                style: style_PositionrankingsofHKSbyward_9,
                popuplayertitle: 'Position rankings of HKS by ward',
                interactive: true,
    title: 'Position rankings of HKS by ward<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_0.png" /> 1<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_1.png" /> 2<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_2.png" /> 3<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_3.png" /> 4<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_4.png" /> 5<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_5.png" /> 6<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_6.png" /> 7<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_7.png" /> 8<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_8.png" /> 9<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_9.png" /> 10<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_10.png" /> 11<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_11.png" /> 12<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_12.png" /> 13<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_13.png" /> 14<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_14.png" /> 15<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_15.png" /> 16<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_16.png" /> 17<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_17.png" /> 18<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_18.png" /> 19<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_19.png" /> 20<br />\
    <img src="styles/legend/PositionrankingsofHKSbyward_9_20.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Efficiencyscore_1.setVisible(true);lyr_Coverageratio_2.setVisible(true);lyr_Equityindex_3.setVisible(true);lyr_Householdcoveragefrequency_4.setVisible(true);lyr_Housesvisitedperday_5.setVisible(true);lyr_Safetygearusenormalised_6.setVisible(true);lyr_SHGrepresentationinHKS_7.setVisible(true);lyr_Userfeerevenuenormalised_8.setVisible(true);lyr_PositionrankingsofHKSbyward_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Efficiencyscore_1,lyr_Coverageratio_2,lyr_Equityindex_3,lyr_Householdcoveragefrequency_4,lyr_Housesvisitedperday_5,lyr_Safetygearusenormalised_6,lyr_SHGrepresentationinHKS_7,lyr_Userfeerevenuenormalised_8,lyr_PositionrankingsofHKSbyward_9];
lyr_Efficiencyscore_1.set('fieldAliases', {'Ward Name': 'Ward Name', 'Ward Numbe': 'Ward Numbe', 'ranks_Rank': 'ranks_Rank', });
lyr_Coverageratio_2.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'Coverage ratio_Coverage ratio': 'Coverage ratio', });
lyr_Equityindex_3.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'Equity index_Equity Index': 'Equity index', });
lyr_Householdcoveragefrequency_4.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'Household coverage frequency_Household coverage frequency': 'Household coverage frequency', });
lyr_Housesvisitedperday_5.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'Houses visited per day_Houses Visited Per Day (normalised)': 'Houses visited per day', });
lyr_Safetygearusenormalised_6.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'Safety gear use (normalised)_Safety Gear Count': 'Safety gear use (normalised)_Safety Gear Count', });
lyr_SHGrepresentationinHKS_7.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'SHGs representation in HKS_SHGs represented in the HKS': 'SHGs representation in HKS_SHGs represented in the HKS', });
lyr_Userfeerevenuenormalised_8.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'User fee revenue (normalised)_User Fees Revenue (normalised)': 'User fee revenue (normalised)', });
lyr_PositionrankingsofHKSbyward_9.set('fieldAliases', {'Ward Name': 'Ward Name', 'WardNumber': 'WardNumber', 'ranks_Rank': 'ranks_Rank', });
lyr_Efficiencyscore_1.set('fieldImages', {'Ward Name': 'TextEdit', 'Ward Numbe': 'TextEdit', 'ranks_Rank': 'TextEdit', });
lyr_Coverageratio_2.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'Coverage ratio_Coverage ratio': 'TextEdit', });
lyr_Equityindex_3.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'Equity index_Equity Index': 'TextEdit', });
lyr_Householdcoveragefrequency_4.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'Household coverage frequency_Household coverage frequency': 'TextEdit', });
lyr_Housesvisitedperday_5.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'Houses visited per day_Houses Visited Per Day (normalised)': 'TextEdit', });
lyr_Safetygearusenormalised_6.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'Safety gear use (normalised)_Safety Gear Count': 'TextEdit', });
lyr_SHGrepresentationinHKS_7.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'SHGs representation in HKS_SHGs represented in the HKS': 'TextEdit', });
lyr_Userfeerevenuenormalised_8.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'User fee revenue (normalised)_User Fees Revenue (normalised)': 'TextEdit', });
lyr_PositionrankingsofHKSbyward_9.set('fieldImages', {'Ward Name': 'TextEdit', 'WardNumber': 'TextEdit', 'ranks_Rank': 'TextEdit', });
lyr_Efficiencyscore_1.set('fieldLabels', {'Ward Name': 'hidden field', 'Ward Numbe': 'hidden field', 'ranks_Rank': 'header label - visible with data', });
lyr_Coverageratio_2.set('fieldLabels', {'Ward Name': 'hidden field', 'WardNumber': 'hidden field', 'Coverage ratio_Coverage ratio': 'header label - visible with data', });
lyr_Equityindex_3.set('fieldLabels', {'Ward Name': 'hidden field', 'WardNumber': 'hidden field', 'Equity index_Equity Index': 'header label - visible with data', });
lyr_Householdcoveragefrequency_4.set('fieldLabels', {'Ward Name': 'hidden field', 'WardNumber': 'hidden field', 'Household coverage frequency_Household coverage frequency': 'header label - visible with data', });
lyr_Housesvisitedperday_5.set('fieldLabels', {'Ward Name': 'hidden field', 'WardNumber': 'hidden field', 'Houses visited per day_Houses Visited Per Day (normalised)': 'header label - visible with data', });
lyr_Safetygearusenormalised_6.set('fieldLabels', {'Ward Name': 'hidden field', 'WardNumber': 'hidden field', 'Safety gear use (normalised)_Safety Gear Count': 'header label - visible with data', });
lyr_SHGrepresentationinHKS_7.set('fieldLabels', {'Ward Name': 'hidden field', 'WardNumber': 'hidden field', 'SHGs representation in HKS_SHGs represented in the HKS': 'header label - visible with data', });
lyr_Userfeerevenuenormalised_8.set('fieldLabels', {'Ward Name': 'hidden field', 'WardNumber': 'hidden field', 'User fee revenue (normalised)_User Fees Revenue (normalised)': 'header label - visible with data', });
lyr_PositionrankingsofHKSbyward_9.set('fieldLabels', {'Ward Name': 'no label', 'WardNumber': 'no label', 'ranks_Rank': 'no label', });
lyr_PositionrankingsofHKSbyward_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
