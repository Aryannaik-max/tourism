import { useEffect, useRef } from 'react'
import './Map.css'

const touristSpots = [
  {
    name: 'Dassam Falls, Ranchi',
    coords: [23.1558, 85.4545],
    description: 'A spectacular waterfall where the Kanchi River drops from a height of 44 meters.'
  },
  {
    name: 'Hundru Falls, Ranchi',
    coords: [23.4503, 85.6558],
    description: 'One of the highest waterfalls in Jharkhand, with a stunning 98-meter drop of the Subarnarekha River.'
  },
  {
    name: 'Jonha Falls, Ranchi',
    coords: [23.3895, 85.6083],
    description: 'Also known as Gautamdhara, this serene waterfall is surrounded by lush greenery.'
  },
  {
    name: 'Betla National Park, Latehar',
    coords: [23.8885, 84.1895],
    description: 'A diverse wildlife sanctuary, home to tigers, elephants, and a wide variety of flora and fauna.'
  },
  {
    name: 'Baidyanath Jyotirlinga Temple, Deoghar',
    coords: [24.4924, 86.6963],
    description: 'A major Hindu pilgrimage site, one of the twelve Jyotirlingas in India.'
  },
  {
    name: 'Parasnath Hills, Giridih',
    coords: [23.9714, 86.1158],
    description: 'A significant Jain pilgrimage center, believed to be the place where 20 of the 24 Tirthankaras attained salvation.'
  },
  {
    name: 'Netarhat, Latehar',
    coords: [23.4849, 84.2690],
    description: 'Known as the "Queen of Chotanagpur," this hill station is famous for its breathtaking sunrises and sunsets.'
  },
  {
    name: 'Jubilee Park, Jamshedpur',
    coords: [22.8056, 86.1856],
    description: 'A large, beautiful park in the heart of the steel city, featuring a zoo, laser show, and gardens.'
  },
  {
    name: 'Tagore Hill, Ranchi',
    coords: [23.4005, 85.3283],
    description: 'A scenic spot with historical connections to the Tagore family, offering panoramic views of Ranchi.'
  },
  {
    name: 'Ranchi Lake, Ranchi',
    coords: [23.3649, 85.3188],
    description: 'A man-made lake located at the base of Ranchi Hill, popular for boating and evening strolls.'
  }
];

const Map = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  useEffect(() => {
    // Function to load a script
    const loadScript = (src, callback) => {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = callback;
        document.body.appendChild(script);
      } else {
        callback();
      }
    };
    
    // Function to load a stylesheet
    const loadStylesheet = (href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    };
    
    // Inject all custom CSS
    const style = document.createElement('style');
    style.id = 'map-custom-styles'; // Add an ID for easy removal
    style.innerHTML = `
      .map-app-container {
        background-color: #F0E1CF;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
      .map-card {
        width: 100%;
        max-width: 95%;
        height: 90vh;
        background-color: #F0E1CF;
        border-radius: 1rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        overflow: hidden;
      }
      .map-container-inner {
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      .user-location-icon .pulse-dot {
        width: 1rem;
        height: 1rem;
        background-color: #2f855a;
        border-radius: 9999px;
        border: 2px solid white;
        box-shadow: 0 0 0 0 rgba(47, 133, 90, 1);
        animation: pulse-green 2s infinite;
      }
      .popup-content { font-family: sans-serif; }
      .popup-title { font-weight: 700; font-size: 1.125rem; margin-bottom: 0.25rem; }
      .popup-description { color: #4a5568; }
      .popup-distance { color: #2c7a7b; font-weight: 600; margin-top: 0.5rem; }
      .user-popup-text { font-family: sans-serif; font-weight: 600; text-align: center; }

      @keyframes pulse-green {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(47, 133, 90, 0.7);
        }
        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(47, 133, 90, 0);
        }
        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(47, 133, 90, 0);
        }
      }
    `;
    document.head.appendChild(style);

    // Load Leaflet CSS first
    loadStylesheet("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
    
    // Load Leaflet JS
    loadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", () => {
      // Check if map container is available and Leaflet is loaded
      if (mapContainerRef.current && window.L && !mapInstanceRef.current) {
        
        // Initialize the map
        const map = window.L.map(mapContainerRef.current).setView([23.6345, 85.3846], 8); // Centered on Jharkhand
        mapInstanceRef.current = map;

        // Add the tile layer (OpenStreetMap)
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Function to add markers for tourist spots, with distance if user location is available
        const addMarkers = (userLocation) => {
            touristSpots.forEach(spot => {
                const distance = userLocation 
                    ? calculateDistance(userLocation.latitude, userLocation.longitude, spot.coords[0], spot.coords[1])
                    : null;
                
                const marker = window.L.marker(spot.coords).addTo(map);
                marker.bindPopup(`
                    <div class="popup-content">
                      <h3 class="popup-title">${spot.name}</h3>
                      <p class="popup-description">${spot.description}</p>
                      ${distance !== null ? `<p class="popup-distance">Distance: ${distance.toFixed(1)} km away</p>` : ''}
                    </div>
                `);
            });
        };

        // Get user's current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };

              // Create a custom icon for the user's location
               const userIcon = window.L.divIcon({
                  className: 'user-location-icon',
                  html: '<div class="pulse-dot"></div>',
                  iconSize: [16, 16],
                  iconAnchor: [8, 8]
              });
              
              // Add marker for user's location
              const userMarker = window.L.marker([userLocation.latitude, userLocation.longitude], { icon: userIcon }).addTo(map);
              userMarker.bindPopup('<div class="user-popup-text">You are here!</div>').openPopup();

              // Center map on user's location
              map.setView([userLocation.latitude, userLocation.longitude], 10);
              
              addMarkers(userLocation);
            }, 
            (error) => {
              console.warn(`Geolocation error: ${error.message}. Showing default map.`);
              // If user denies location, just show the spots without distance info
              addMarkers(null);
            }
          );
        } else {
          console.log("Geolocation is not supported by this browser.");
          // If geolocation is not supported, just show the spots without distance info
          addMarkers(null);
        }
      }
    });

    // Cleanup function to remove the map and styles on component unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      const styleElement = document.getElementById('map-custom-styles');
      if (styleElement) {
          styleElement.remove();
      }
    };
  }, []);

  return (
    <div className="main-map">
      <header className='map-app-header'>
        <h1>Explore Jharkhand</h1>
        <p>Discover the rich cultural heritage and breathtaking natural beauty of Jharkhand. Click on the markers to learn more about each destination.</p>
      </header>
        <div className="map-app-container">
        <div className="map-card">
          <div 
            ref={mapContainerRef} 
            className="map-container-inner"
            aria-label="Map of Jharkhand's tourist spots"
          >
            {/* The map will be rendered here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
