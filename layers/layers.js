ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-726613.902988, 5421122.625408, 798356.626414, 6699009.322198]);
var wms_layers = [];

var format_Alberta_0 = new ol.format.GeoJSON();
var features_Alberta_0 = format_Alberta_0.readFeatures(json_Alberta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Alberta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_0.addFeatures(features_Alberta_0);
var lyr_Alberta_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_0, 
                style: style_Alberta_0,
                popuplayertitle: "Alberta",
                interactive: true,
                title: '<img src="styles/legend/Alberta_0.png" /> Alberta'
            });
var format_ABWaterbodies_1 = new ol.format.GeoJSON();
var features_ABWaterbodies_1 = format_ABWaterbodies_1.readFeatures(json_ABWaterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_ABWaterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ABWaterbodies_1.addFeatures(features_ABWaterbodies_1);
var lyr_ABWaterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ABWaterbodies_1, 
                style: style_ABWaterbodies_1,
                popuplayertitle: "AB Waterbodies",
                interactive: true,
                title: '<img src="styles/legend/ABWaterbodies_1.png" /> AB Waterbodies'
            });
var format_FishStockingPoints_2 = new ol.format.GeoJSON();
var features_FishStockingPoints_2 = format_FishStockingPoints_2.readFeatures(json_FishStockingPoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStockingPoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_2.addFeatures(features_FishStockingPoints_2);
var lyr_FishStockingPoints_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_2, 
                style: style_FishStockingPoints_2,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
                title: '<img src="styles/legend/FishStockingPoints_2.png" /> Fish Stocking Points'
            });

lyr_Alberta_0.setVisible(true);lyr_ABWaterbodies_1.setVisible(true);lyr_FishStockingPoints_2.setVisible(true);
var layersList = [lyr_Alberta_0,lyr_ABWaterbodies_1,lyr_FishStockingPoints_2];
lyr_Alberta_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_ABWaterbodies_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStockingPoints_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', 'field_29': 'field_29', 'field_30': 'field_30', 'field_31': 'field_31', 'field_32': 'field_32', 'field_33': 'field_33', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', 'field_38': 'field_38', 'field_39': 'field_39', 'field_40': 'field_40', 'field_41': 'field_41', 'field_42': 'field_42', 'field_43': 'field_43', 'field_44': 'field_44', 'field_45': 'field_45', 'field_46': 'field_46', 'field_47': 'field_47', 'field_48': 'field_48', 'field_49': 'field_49', 'field_50': 'field_50', 'field_51': 'field_51', 'field_52': 'field_52', 'field_53': 'field_53', 'field_54': 'field_54', 'field_55': 'field_55', 'field_56': 'field_56', 'field_57': 'field_57', 'field_58': 'field_58', 'field_59': 'field_59', 'field_60': 'field_60', 'field_61': 'field_61', 'field_62': 'field_62', 'field_63': 'field_63', 'field_64': 'field_64', 'field_65': 'field_65', 'field_66': 'field_66', 'field_67': 'field_67', 'field_68': 'field_68', 'field_69': 'field_69', 'field_70': 'field_70', 'field_71': 'field_71', 'field_72': 'field_72', 'field_73': 'field_73', 'field_74': 'field_74', 'field_75': 'field_75', 'field_76': 'field_76', 'field_77': 'field_77', 'field_78': 'field_78', 'field_79': 'field_79', 'field_80': 'field_80', 'field_81': 'field_81', 'field_82': 'field_82', 'field_83': 'field_83', 'field_84': 'field_84', 'field_85': 'field_85', 'field_86': 'field_86', 'field_87': 'field_87', 'field_88': 'field_88', 'field_89': 'field_89', 'field_90': 'field_90', 'field_91': 'field_91', 'field_92': 'field_92', 'field_93': 'field_93', 'field_94': 'field_94', 'field_95': 'field_95', 'field_96': 'field_96', 'field_97': 'field_97', 'field_98': 'field_98', 'field_99': 'field_99', 'field_100': 'field_100', 'field_101': 'field_101', 'field_102': 'field_102', 'field_103': 'field_103', 'field_104': 'field_104', 'field_105': 'field_105', 'field_106': 'field_106', 'field_107': 'field_107', 'field_108': 'field_108', 'field_109': 'field_109', 'field_110': 'field_110', 'field_111': 'field_111', 'field_112': 'field_112', 'field_113': 'field_113', 'field_114': 'field_114', 'field_115': 'field_115', 'field_116': 'field_116', 'field_117': 'field_117', 'field_118': 'field_118', 'field_119': 'field_119', });
lyr_Alberta_0.set('fieldImages', {'PRUID': '', 'DGUID': '', 'PRNAME': '', 'PRENAME': '', 'PRFNAME': '', 'PREABBR': '', 'PRFABBR': '', 'LANDAREA': '', });
lyr_ABWaterbodies_1.set('fieldImages', {'HYDROUID': '', 'NAME': '', 'RANK': '', 'PRUID': '', });
lyr_FishStockingPoints_2.set('fieldImages', {'DISTRICT': '', 'WATERBODY': '', 'Latitude': '', 'Longitude': '', 'SPECIES': '', 'GENOTYPE': '', 'STOCKED -': '', 'STOCKING N': '', 'PLANNED ST': '', 'field_10': '', 'field_11': '', 'field_12': '', 'field_13': '', 'field_14': '', 'field_15': '', 'field_16': '', 'field_17': '', 'field_18': '', 'field_19': '', 'field_20': '', 'field_21': '', 'field_22': '', 'field_23': '', 'field_24': '', 'field_25': '', 'field_26': '', 'field_27': '', 'field_28': '', 'field_29': '', 'field_30': '', 'field_31': '', 'field_32': '', 'field_33': '', 'field_34': '', 'field_35': '', 'field_36': '', 'field_37': '', 'field_38': '', 'field_39': '', 'field_40': '', 'field_41': '', 'field_42': '', 'field_43': '', 'field_44': '', 'field_45': '', 'field_46': '', 'field_47': '', 'field_48': '', 'field_49': '', 'field_50': '', 'field_51': '', 'field_52': '', 'field_53': '', 'field_54': '', 'field_55': '', 'field_56': '', 'field_57': '', 'field_58': '', 'field_59': '', 'field_60': '', 'field_61': '', 'field_62': '', 'field_63': '', 'field_64': '', 'field_65': '', 'field_66': '', 'field_67': '', 'field_68': '', 'field_69': '', 'field_70': '', 'field_71': '', 'field_72': '', 'field_73': '', 'field_74': '', 'field_75': '', 'field_76': '', 'field_77': '', 'field_78': '', 'field_79': '', 'field_80': '', 'field_81': '', 'field_82': '', 'field_83': '', 'field_84': '', 'field_85': '', 'field_86': '', 'field_87': '', 'field_88': '', 'field_89': '', 'field_90': '', 'field_91': '', 'field_92': '', 'field_93': '', 'field_94': '', 'field_95': '', 'field_96': '', 'field_97': '', 'field_98': '', 'field_99': '', 'field_100': '', 'field_101': '', 'field_102': '', 'field_103': '', 'field_104': '', 'field_105': '', 'field_106': '', 'field_107': '', 'field_108': '', 'field_109': '', 'field_110': '', 'field_111': '', 'field_112': '', 'field_113': '', 'field_114': '', 'field_115': '', 'field_116': '', 'field_117': '', 'field_118': '', 'field_119': '', });
lyr_Alberta_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_ABWaterbodies_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_FishStockingPoints_2.set('fieldLabels', {'DISTRICT': 'no label', 'WATERBODY': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'SPECIES': 'no label', 'GENOTYPE': 'no label', 'STOCKED -': 'no label', 'STOCKING N': 'no label', 'PLANNED ST': 'no label', 'field_10': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'field_28': 'no label', 'field_29': 'no label', 'field_30': 'no label', 'field_31': 'no label', 'field_32': 'no label', 'field_33': 'no label', 'field_34': 'no label', 'field_35': 'no label', 'field_36': 'no label', 'field_37': 'no label', 'field_38': 'no label', 'field_39': 'no label', 'field_40': 'no label', 'field_41': 'no label', 'field_42': 'no label', 'field_43': 'no label', 'field_44': 'no label', 'field_45': 'no label', 'field_46': 'no label', 'field_47': 'no label', 'field_48': 'no label', 'field_49': 'no label', 'field_50': 'no label', 'field_51': 'no label', 'field_52': 'no label', 'field_53': 'no label', 'field_54': 'no label', 'field_55': 'no label', 'field_56': 'no label', 'field_57': 'no label', 'field_58': 'no label', 'field_59': 'no label', 'field_60': 'no label', 'field_61': 'no label', 'field_62': 'no label', 'field_63': 'no label', 'field_64': 'no label', 'field_65': 'no label', 'field_66': 'no label', 'field_67': 'no label', 'field_68': 'no label', 'field_69': 'no label', 'field_70': 'no label', 'field_71': 'no label', 'field_72': 'no label', 'field_73': 'no label', 'field_74': 'no label', 'field_75': 'no label', 'field_76': 'no label', 'field_77': 'no label', 'field_78': 'no label', 'field_79': 'no label', 'field_80': 'no label', 'field_81': 'no label', 'field_82': 'no label', 'field_83': 'no label', 'field_84': 'no label', 'field_85': 'no label', 'field_86': 'no label', 'field_87': 'no label', 'field_88': 'no label', 'field_89': 'no label', 'field_90': 'no label', 'field_91': 'no label', 'field_92': 'no label', 'field_93': 'no label', 'field_94': 'no label', 'field_95': 'no label', 'field_96': 'no label', 'field_97': 'no label', 'field_98': 'no label', 'field_99': 'no label', 'field_100': 'no label', 'field_101': 'no label', 'field_102': 'no label', 'field_103': 'no label', 'field_104': 'no label', 'field_105': 'no label', 'field_106': 'no label', 'field_107': 'no label', 'field_108': 'no label', 'field_109': 'no label', 'field_110': 'no label', 'field_111': 'no label', 'field_112': 'no label', 'field_113': 'no label', 'field_114': 'no label', 'field_115': 'no label', 'field_116': 'no label', 'field_117': 'no label', 'field_118': 'no label', 'field_119': 'no label', });
lyr_FishStockingPoints_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});