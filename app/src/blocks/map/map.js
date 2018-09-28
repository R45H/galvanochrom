/* Карта */
function initMap() {
	var $map = $('.map');

	if (!$map.length || $map.is(':hidden')) return;

	/* Точки */
	var dot1 = {lat: 59.961215, lng: 30.451252}; // г. Санкт-Петербург, Уманский пер., д. 71
	var dotCenter = dot1;
	/* ===== */

	var customMapType = new google.maps.StyledMapType([
		{elementType: "labels.icon", stylers: [{visibility: "off"}]},
		{elementType: "labels.text.fill", stylers: [{color: "#666666"}]},
		{featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{color: '#666666'}]},
		{featureType: "landscape.man_made", elementType: 'geometry.fill', stylers: [{color: "#f1f1f1"}]},
		{featureType: "landscape.man_made", elementType: 'geometry.stroke', stylers: [{color: "#d7d7d7"}]},
		{featureType: 'landscape.natural', elementType: 'geometry', stylers: [{color: '#efefef'}]},
		{featureType: "poi", elementType: "geometry", stylers: [{color: "#cfcfcf"}]},
		{featureType: "poi.park", elementType: "geometry", stylers: [{color: "#cfcfcf"}]},
		{featureType: "road", elementType: "geometry", stylers: [{color: "#bfbfbf"}]},
		{featureType: "road.arterial", elementType: "geometry", stylers: [{color: "#bfbfbf"}]},
		{featureType: "road.highway", elementType: "geometry", stylers: [{color: "#bfbfbf"}]},
		{featureType: "road.local", elementType: "geometry", stylers: [{color: "#ffffff"}]},
		{featureType: "road.local", elementType: "geometry.stroke", stylers: [{color: "#d7d7d7"}]},
		{featureType: "transit.line", elementType: "geometry", stylers: [{color: "#bfbfbf"}]},
		{featureType: "transit.station", elementType: "geometry", stylers: [{color: "#bfbfbf"}]},
		{featureType: "water", elementType: "geometry", stylers: [{color: "#c7c7c7"}]},
		{featureType: "water", elementType: "labels.text.fill", stylers: [{color: "#888888"}]}
	], {
		name: 'Схема'
	});

	var customMapTypeId = 'styleGray';

	/* Карты */
	if (document.getElementById('map')) {
		var map1 = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: dotCenter,
			scrollwheel: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [
					customMapTypeId
				]
			}
		});

		map1.mapTypes.set(customMapTypeId, customMapType);
		map1.setMapTypeId(customMapTypeId);

		/* Адреса */
		var address = 'Уманский пер., д. 71';
		/* ====== */

		/* Образец карточки */
		function getContent(address) {
			return '<div class="map__text-wrap">' + address + '</div>';
		}
		/* ================ */

		/* Рамка */
		var infoWindow = new google.maps.InfoWindow({
			content: getContent(address)
		});
		/* ===== */

		/* Маркеры */
		var image = {
			url: 'img/map-marker.svg',
			scaledSize: new google.maps.Size(60, 60)
		};

		var marker1 = new google.maps.Marker({
			position: dot1,
			map: map1,
			optimized: false,
			icon: image
		});

		openInfoWindow();

		marker1.addListener('click', function() {
			openInfoWindow();
		});
		/* ======= */

		// При ресайзе
		var listener = google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map1, "resize");
			map1.panTo(dotCenter);
		});
		// =====

		/* ===== */
	}
	/* ===== */

	function refreshResizeListener(map, dot) {
		google.maps.event.removeListener(listener);
		listener = google.maps.event.addDomListener(window, "resize", function() {
			google.maps.event.trigger(map, "resize");
			map.panTo(dot);
		});
	}

	function openInfoWindow() {
		infoWindow.setContent(getContent(address));
		infoWindow.open(map1, marker1);
		refreshResizeListener(map1, dot1);
	}
}
/* ========== */
