mapboxgl.accessToken = 'pk.eyJ1IjoiZXRpZW5kbyIsImEiOiJjamNhbTY4NDgwOXoxMnptdXIyb2ZvZ2k5In0.zCS4uLuoY-v6bfnDzaEoww';
var button = document.getElementById('zoom');

var map1 = new mapboxgl.Map({
  container: 'map-1',
  style: 'mapbox://styles/etiendo/cjcanntla0vsp2st9m3af6liq',
  center: [2.33, 48.86],
  zoom: 10,

  // Options: à définir en paramètre de l'objet map1
  //option: Object,
});

//Instance Members: action à appeler avec l'objet map1
//map1.addControl(new mapboxgl.NavigationControl());

function addZoom() {
  console.log(map1.transform.zoom);
  map1.transform.zoom = 10;
}

// returnZoom: function() {
var button = document.getElementById('zoom');
button.addEventListener('click', addZoom);

// console.log(map1[1]);


var map2 = new mapboxgl.Map({
  container: 'map-2',
  style: 'mapbox://styles/etiendo/cjcanntla0vsp2st9m3af6liq',
  center: [0.12, 51.50],
  zoom: 8,
});

map2.addControl(new mapboxgl.NavigationControl());


var map3 = new mapboxgl.Map({
  container: 'map-3',
  style: 'mapbox://styles/etiendo/cjcanntla0vsp2st9m3af6liq',
  center: [35.88, 34.88],
  zoom: 8,
});

map3.addControl(new mapboxgl.NavigationControl());