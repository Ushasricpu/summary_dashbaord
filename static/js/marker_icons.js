function getIcon(path) {
	console.log(mapIconPath + path);
	return new L.icon({
		iconUrl: mapIconPath + path,
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [-1, 34],
		shadowSize: [41, 41]
	});
}

var airIcon = getIcon('air/co.svg');
var waterIcon = getIcon('water/waterflow.svg')

