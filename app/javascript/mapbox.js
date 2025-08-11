mapboxgl.accessToken = 'pk.eyJ1IjoiamF5ZGVudGhlbHdlbGwwMiIsImEiOiJjbTZ0cndyaTgwNXhiMmpzaDhjdncwaDVwIn0.vwESy6q4sxuGiNrK-GbC7g';

const locations = [
  { name: 'North Thailand', coords: [99.963, 19.432], img: 'north-thailand.png' },
  { name: 'Vietnam', coords: [108.2772, 14.0583], img: 'north-thailand.png' },
  { name: 'Cambodia', coords: [104.9910, 12.5657], img: 'north-thailand.png' },
  { name: 'Philippines', coords: [121.7740, 12.8797], img: 'north-thailand.png' },
  { name: 'Bali', coords: [115.1889, -8.4095], img: 'north-thailand.png' },
  { name: 'Singapore', coords: [103.8198, 1.3521], img: 'north-thailand.png' },
  { name: 'South Thailand', coords: [100.5231, 7.878978], img: 'north-thailand.png' }
];

// Create the map without center & zoom (we'll fit bounds later)
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jaydenthelwell02/cm7bs2tai006k01s8figgfal0',
  interactive: false,
});

// Build bounds from all locations
const bounds = new mapboxgl.LngLatBounds();
locations.forEach(loc => bounds.extend(loc.coords));

// Fit map to bounds with padding and maxZoom to prevent over-zoom
const fitMapToBounds = () => {
  map.fitBounds(bounds, {
    padding: { top: 100, bottom: 100, left: 100, right: 100 },
    maxZoom: 4,
    duration: 1000,
  });
};

// Once map loads, fit bounds
map.on('load', () => {
  fitMapToBounds();
});

// Also refit bounds on window resize for responsiveness
window.addEventListener('resize', () => {
  fitMapToBounds();
});

const markers = {}; // Store markers & popups for syncing

// Helper: decide popup anchor based on marker longitude relative to map center
const getPopupAnchor = (lng) => {
  if (!map.getCenter) return 'bottom'; // fallback
  return lng > map.getCenter().lng ? 'left' : 'right';
};

locations.forEach(location => {
  const popup = new mapboxgl.Popup({
    offset: 25,
    closeOnClick: false,
    anchor: getPopupAnchor(location.coords[0]),
  }).setHTML(`
    <div class="popup-container">
      <img src="/assets/${location.img}" alt="${location.name}" class="popup-image" />
      <h3>${location.name}</h3>
    </div>
  `);

  const el = document.createElement('div');
  el.className = 'custom-marker';
  el.style.backgroundImage = "url('/assets/marker.png')";
  el.style.width = '30px';
  el.style.height = '50px';
  el.style.backgroundSize = 'cover';

  const marker = new mapboxgl.Marker(el)
    .setLngLat(location.coords)
    .setPopup(popup)
    .addTo(map);

  // Show popup on hover (desktop)
  el.addEventListener('mouseenter', () => popup.addTo(map));
  el.addEventListener('mouseleave', () => popup.remove());

  // Store for list sync
  markers[location.name] = { marker, popup };
});

// Sync list hover with marker popups
document.querySelectorAll('.explore-list li').forEach((item, index) => {
  const locationName = locations[index].name;

  item.addEventListener('mouseenter', () => {
    markers[locationName].popup.addTo(map);
  });

  item.addEventListener('mouseleave', () => {
    markers[locationName].popup.remove();
  });
});
