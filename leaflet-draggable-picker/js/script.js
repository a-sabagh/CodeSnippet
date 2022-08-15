$(function() {
	var lat = $('#MapLocation').attr('data-lat');
	var lng = $('#MapLocation').attr('data-lng');
	var curLocation = [lat, lng];

	$("#Latitude").val(curLocation[0]);
	$("#Longitude").val(curLocation[1]);

	if (curLocation[0] == 0 && curLocation[1] == 0) {
		curLocation = [5.9714, 116.0953];
	}

	var map = L.map('MapLocation').setView(curLocation, 10);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	map.attributionControl.setPrefix(false);

	var marker = new L.marker(curLocation, {
		draggable: 'true',
	});

	map.on('click',function(event){
		position = event.latlng
		marker.setLatLng(position, {
		  draggable: 'true'
		}).bindPopup(position).update();
		map.panTo(position);
		$("#Latitude").val(position.lat);
		$("#Longitude").val(position.lng).keyup();
	})

	marker.on('dragend', function(event) {
		var position = marker.getLatLng();
		marker.setLatLng(position, {
		  draggable: 'true'
		}).bindPopup(position).update();
		$("#Latitude").val(position.lat);
		$("#Longitude").val(position.lng).keyup();
	});

	$(".find").click(function() {
		var position = [$("#Latitude").val(), $("#Longitude").val()];
		marker.setLatLng(position, {
		  draggable: 'true'
		}).bindPopup(position).update();
		map.panTo(position);
	});

	map.addLayer(marker);
})
