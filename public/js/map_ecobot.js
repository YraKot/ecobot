window.onload = function () {
	var styles =	[
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#a68d29"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#a68d29"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "simplified"
				},
				{
					"color": "#a68d29"
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#2d2d2d"
				},
				{
					"lightness": 9
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "transit.station.airport",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"saturation": -83
				},
				{
					"lightness": -51
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#2d2d2d"
				}
			]
		}
	];


		var options = {
			mapTypeControlOptions: { mapTypeIds: ['map_style']	},
			center: new google.maps.LatLng( 49.8062836, 23.9738818),
			zoom: 16,
            scrollwheel: false,
			disableDefaultUI: true, 
			mapTypeId: 'map_style'
		};
		var map_item = document.getElementById('map_ecobot');
		var map = new google.maps.Map( map_item, options);
		var styledMapType = new google.maps.StyledMapType(styles, { name: 'map_style' });
		map.mapTypes.set('map_style', styledMapType);
};