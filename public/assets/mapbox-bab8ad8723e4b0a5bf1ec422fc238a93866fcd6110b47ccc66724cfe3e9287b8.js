mapboxgl.accessToken = 'pk.eyJ1IjoiamF5ZGVudGhlbHdlbGwwMiIsImEiOiJjbTZ0cndyaTgwNXhiMmpzaDhjdncwaDVwIn0.vwESy6q4sxuGiNrK-GbC7g';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-0.016, 51.576],
  zoom: 12
});

new mapboxgl.Marker()
  .setLngLat([-0.016, 51.576])
  .addTo(map);

  const locations = [
    { name: 'Wanstead', coords: [0.0250, 51.5768] },
    { name: 'Snaresbrook', coords: [0.022238, 51.58507] },
    { name: 'Aldersbrook', coords: [0.0335, 51.5628] },
    { name: 'South Woodford', coords: [0.0265, 51.5913] },
    { name: 'Whipps Cross', coords: [0.0001, 51.5815] },
    { name: 'Leytonstone', coords: [0.006519258113126995, 51.56969257331007] },
    { name: 'Leyton', coords: [-0.005740, 51.573910] },
    { name: 'Woodford Green', coords: [0.040895381189515065, 51.609893526988145] },
    { name: 'Woodford', coords: [0.0325, 51.6042] }
  ];


locations.forEach(location => {
  new mapboxgl.Marker()
    .setLngLat(location.coords)
    .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.name}</h3>`))
    .addTo(map);
});
