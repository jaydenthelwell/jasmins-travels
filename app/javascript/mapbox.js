mapboxgl.accessToken = 'pk.eyJ1IjoiamF5ZGVudGhlbHdlbGwwMiIsImEiOiJjbTZ0cndyaTgwNXhiMmpzaDhjdncwaDVwIn0.vwESy6q4sxuGiNrK-GbC7g';


const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jaydenthelwell02/cm7bs2tai006k01s8figgfal0',
  center: [120.3188, 16.00],
  zoom: 2.7,
  interactive: false,

});

const locations = [
    { name: 'North Thailand', coords: [99.963, 19.432], img: 'north-thailand.png' },
    { name: 'Vietnam', coords: [108.2772, 14.0583], img: 'north-thailand.png'  },
    { name: 'Cambodia', coords: [104.9910, 12.5657], img: 'north-thailand.png'  },
    { name: 'Japan', coords: [138.2529, 36.2048], img: 'north-thailand.png'  },
    { name: 'Philippines', coords: [121.7740, 12.8797], img: 'north-thailand.png'  },
    { name: 'Bali', coords: [115.1889, -8.4095], img: 'north-thailand.png'  },
    { name: 'Singapore', coords: [103.8198, 1.3521], img: 'north-thailand.png'  },
    { name: 'South Thailand', coords: [100.5231, 7.878978], img: 'north-thailand.png'  }
];

locations.forEach(location => {
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  })

  .setHTML(`
    <div class="popup-container">
      <img src="/assets/${location.img}" alt="${location.name}" class="popup-image">
      <h3>${location.name}</h3>
    </div>
  `);
  const el = document.createElement('div');
  el.className = 'custom-marker';
  el.style.backgroundImage = "url('/assets/marker.png')";
  el.style.width = '30px';
  el.style.height = '40px';
  el.style.backgroundSize = 'cover';
  el.style.backgroundPosition = 'center';


  const marker = new mapboxgl.Marker(el)
    .setLngLat(location.coords)
    .addTo(map);

  el.addEventListener('mouseenter', () => {
    popup.setLngLat(location.coords).addTo(map);
  });

  el.addEventListener('mouseleave', () => {
    popup.remove();
  });

});
