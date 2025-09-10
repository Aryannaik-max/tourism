import { useState, useEffect, useRef } from "react"
import './TransportServices.css'
import Header from "../components/Header"
import VehichInfoPanel from '../components/VehicleInfoPanel'

const TransportServices = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const userMarkerRef = useRef(null);
    const vehicleMarkersRef = useRef({});

    const [mapReady, setMapReady] = useState(false)
    const [userPosition, setUserPosition] = useState(null);
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const transportRoutes = [
        {
            id: 'BUS-101',
            type: 'Bus',
            routeName: 'Kanta Toli - Ratu Road',
            path: [
                [23.3616, 85.3240], // Kanta Toli
                [23.3712, 85.3201], // Albert Ekka Chowk
                [23.3768, 85.3125], // Radium Road
                [23.3789, 85.3011], // Piska More
                [23.3750, 85.2850]  // Ratu Road Chowk
            ],
        },
        {
            id: 'BUS-202',
            type: 'Bus',
            routeName: 'Booty More - Pandra',
            path: [
                [23.4115, 85.3621], // Booty More
                [23.3932, 85.3486], // Kokar
                [23.3616, 85.3240], // Kanta Toli
                [23.3540, 85.3050], // Bahu Bazar
                [23.3440, 85.2860]  // Pandra Mandi
            ],
        },
        {
            id: 'TRAIN-303',
            type: 'Train',
            routeName: 'Ranchi Jn - Hatia',
            path: [
                [23.3551, 85.3254], // Ranchi Junction
                [23.3320, 85.3210], // Argora
                [23.3150, 85.3150], // Pundag
                [23.2974, 85.3080]  // Hatia Station
            ],
        }
    ];

    const initializeVehicles = () => {
        const initialVehicles = transportRoutes.map(route => ({
            ...route,
            currentLeg: 0,
            legProgress: 0,
            position: route.path[0],
            progress: 0,
        }));
        setVehicles(initialVehicles);
    };

    useEffect(() => {
        const leafletCss = document.createElement('link');
        leafletCss.rel = 'stylesheet';
        leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(leafletCss);

        const leafletJs = document.createElement('script');
        leafletJs.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        document.body.appendChild(leafletJs);

        leafletJs.onload = () => {
            if (!mapContainerRef.current || mapRef.current) return;
            mapRef.current = L.map(mapContainerRef.current).setView([23.37, 85.32], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);
            initializeVehicles();
            setMapReady(true)
        };

        return () => {
            if (document.head.contains(leafletCss)) document.head.removeChild(leafletCss);
            if (document.body.contains(leafletJs)) document.body.removeChild(leafletJs);
        };
    }, []);

    useEffect(() => {
        if(!mapReady) return;
        const success = (position) => {
            const { latitude, longitude } = position.coords;
            const pos = [latitude, longitude];
            setUserPosition(pos);
            if (!userMarkerRef.current) {
                const userIcon = L.divIcon({
                    html: `<div class="user-marker"></div>`,
                    className: '',
                    iconSize: [20, 20],
                });
                userMarkerRef.current = L.marker(pos, { icon: userIcon }).addTo(mapRef.current);
                userMarkerRef.current.bindPopup("<b>You are here!</b>").openPopup();
                mapRef.current.setView(pos, 14);
            } else {
                userMarkerRef.current.setLatLng(pos);
            }
        };
        const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);
        const watcher = navigator.geolocation.watchPosition(success, error, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
        return () => navigator.geolocation.clearWatch(watcher);
    }, [mapReady]);

    useEffect(() => {
        if (!mapReady || vehicles.length === 0) return;
        const simulationInterval = setInterval(() => {
            setVehicles(prevVehicles =>
                prevVehicles.map(v => {
                    let { currentLeg, legProgress, path } = v;
                    legProgress += 0.05;
                    if (legProgress >= 1.0) {
                        legProgress = 0;
                        currentLeg = (currentLeg + 1) % (path.length - 1);
                    }
                    const startPoint = path[currentLeg];
                    const endPoint = path[currentLeg + 1];
                    if (!startPoint || !endPoint) {
                        return { ...v, position: path[0], currentLeg: 0, legProgress: 0, progress: 0 };
                    }
                    const lat = startPoint[0] + (endPoint[0] - startPoint[0]) * legProgress;
                    const lng = startPoint[1] + (endPoint[1] - startPoint[1]) * legProgress;
                    const totalLegs = path.length - 1;
                    const progress = ((currentLeg + legProgress) / totalLegs) * 100;
                    return { ...v, position: [lat, lng], currentLeg, legProgress, progress };
                })
            );
        }, 1000);
        return () => clearInterval(simulationInterval);
    }, [mapReady, vehicles.length]);

    useEffect(() => {
        if (!mapReady) return;
        vehicles.forEach(v => {
            const vehicleHtmlIcon = `
              <div class="vehicle-marker-wrapper">
                <div class="vehicle-marker-blur ${v.type === 'Bus' ? 'bus-marker-bg' : 'train-marker-bg'}"></div>
                <div class="vehicle-marker ${v.type === 'Bus' ? 'bus-marker-bg-strong' : 'train-marker-bg-strong'}">
                  ${v.type === 'Bus' ? 'B' : 'T'}
                </div>
              </div>
            `;
            const customIcon = L.divIcon({ html: vehicleHtmlIcon, className: '', iconSize: [32, 32], iconAnchor: [16, 16] });
            if (!vehicleMarkersRef.current[v.id]) {
                vehicleMarkersRef.current[v.id] = L.marker(v.position, { icon: customIcon })
                    .addTo(mapRef.current)
                    .on('click', () => {
                        setSelectedVehicle(v);
                        mapRef.current.setView(v.position, 15);
                    });
            } else {
                vehicleMarkersRef.current[v.id].setLatLng(v.position);
                vehicleMarkersRef.current[v.id].setIcon(customIcon)
                 if(selectedVehicle && selectedVehicle.id === v.id){ setSelectedVehicle(v); }
            }
        });
    }, [mapReady, vehicles, selectedVehicle]);
  return (
    <div className="transport-section app-container">
        <Header />
        <div ref={mapContainerRef} style={{ height: '100%', width: '100%', zIndex: 1 }}></div>
        <VehichInfoPanel vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </div>
  )
}

export default TransportServices