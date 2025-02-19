mapboxgl.accessToken = 'pk.eyJ1IjoiamF5ZGVudGhlbHdlbGwwMiIsImEiOiJjbTZ0cndyaTgwNXhiMmpzaDhjdncwaDVwIn0.vwESy6q4sxuGiNrK-GbC7g';


const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jaydenthelwell02/cm7bs2tai006k01s8figgfal0',
  center: [105.3188, 15.8700],
  zoom: 2.5,
  interactive: false,

});

const locations = [
    { name: 'North Thailand', coords: [99.963, 19.432] },
    { name: 'Vietnam', coords: [108.2772, 14.0583] },
    { name: 'Cambodia', coords: [104.9910, 12.5657] },
    { name: 'Japan', coords: [138.2529, 36.2048] },
    { name: 'Philippines', coords: [121.7740, 12.8797] },
    { name: 'Bali', coords: [115.1889, -8.4095] },
    { name: 'Singapore', coords: [103.8198, 1.3521] },
    { name: 'South Thailand', coords: [100.5231, 7.878978] }
];

locations.forEach(location => {
  new mapboxgl.Marker()
    .setLngLat(location.coords)
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.name}</h3>`))
    .addTo(map);
});
