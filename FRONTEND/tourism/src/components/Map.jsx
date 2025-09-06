import { useState, useEffect, useRef } from 'react'
import './Map.css'
const touristSites = [
  {
    id: 'baidyanath',
    name: 'Baidyanath Temple, Deoghar',
    description: 'A revered Hindu temple, one of the twelve Jyotirlingas, attracting millions of pilgrims annually.',
    coords: { x: 64, y: 33 }
  },
  {
    id: 'parasnath',
    name: 'Parasnath Hills, Giridih',
    description: 'Also known as Shikharji, it\'s a major Jain pilgrimage site, believed to be the place where 20 of the 24 Tirthankaras attained moksha.',
    coords: { x: 55, y: 42 }
  },
  {
    id: 'hundru',
    name: 'Hundru Falls, Ranchi',
    description: 'A spectacular waterfall where the Subarnarekha River falls from a height of 98 meters, creating a breathtaking scene.',
    coords: { x: 46, y: 55 }
  },
  {
    id: 'jonha',
    name: 'Jonha Falls, Ranchi',
    description: 'Also known as Gautamdhara Falls, it\'s a beautiful hanging valley waterfall surrounded by lush greenery.',
    coords: { x: 50, y: 55 }
  },
  {
    id: 'dalma',
    name: 'Dalma Wildlife Sanctuary, Jamshedpur',
    description: 'Home to elephants, deer, and sloth bears, this sanctuary offers scenic views and a rich biodiversity.',
    coords: { x: 56, y: 63 }
  },
  {
    id: 'netarhat',
    name: 'Netarhat',
    description: 'Known as the "Queen of Chotanagpur," this hill station is famous for its glorious sunrises, sunsets, and serene pine forests.',
    coords: { x: 29, y: 55 }
  },
  {
    id: 'palamu',
    name: 'Palamu Forts',
    description: 'A pair of historic forts deep in the forests of Palamu, representing the architectural legacy of the Chero dynasty.',
    coords: { x: 28, y: 37 }
  },
  {
    id: 'tagore',
    name: 'Tagore Hill, Ranchi',
    description: 'A scenic hilltop associated with the poet Rabindranath Tagore, offering panoramic views of Ranchi.',
    coords: { x: 44, y: 52 }
  }
];

const Map = () => {
    const [selectedSite, setSelectedSite] = useState(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const mapWrapperRef = useRef(null);
    const imageRef = useRef(null);
    const [imageGeom, setImageGeom] = useState(null);

    const handleMarkerClick = (site) => {
        setSelectedSite(site)
    }

    const handleCloseInfoBox = () => {
        setSelectedSite(null);
    }

    const handleImageLoad = () => {
        if (!imageRef.current || !mapWrapperRef.current) return;
        
        const iw = imageRef.current.naturalWidth;
        const ih = imageRef.current.naturalHeight;
        const wrapper = mapWrapperRef.current;
        const { width: cw, height: ch } = wrapper.getBoundingClientRect();
        
        const cRatio = cw / ch;
        const iRatio = iw / ih;

        let renderedWidth, renderedHeight, offsetX, offsetY;

        if (iRatio > cRatio) {
            renderedWidth = cw;
            renderedHeight = cw / iRatio;
            offsetX = 0;
            offsetY = (ch - renderedHeight) / 2;
        } else {
            renderedHeight = ch;
            renderedWidth = ch * iRatio;
            offsetY = 0;
            offsetX = (cw - renderedWidth) / 2;
        }

        setImageGeom({
            width: renderedWidth,
            height: renderedHeight,
            x: offsetX,
            y: offsetY
        });
    }

    useEffect(() => {
        const wrapper = mapWrapperRef.current;
        if (!wrapper || !imageGeom) return;

        const handleWheel = (e) => {
            e.preventDefault();
            const rect = wrapper.getBoundingClientRect();
            
            const containerMouseX = e.clientX - rect.left;
            const containerMouseY = e.clientY - rect.top;

            if (containerMouseX < imageGeom.x || containerMouseX > imageGeom.x + imageGeom.width ||
                containerMouseY < imageGeom.y || containerMouseY > imageGeom.y + imageGeom.height) {
                return;
            }

            const zoomFactor = 1.1;
            const direction = e.deltaY < 0 ? 1 : -1;
            const { x: ox, y: oy } = imageGeom;

            setScale(prevScale => {
                const newScale = prevScale * (direction > 0 ? zoomFactor : 1 / zoomFactor);
                const clampedScale = Math.max(1, Math.min(newScale, 5));

                if (clampedScale <= 1) {
                setPosition({ x: 0, y: 0 });
                return 1;
                }

                setPosition(prevPos => {
                    const newX = containerMouseX - (containerMouseX - prevPos.x) * (clampedScale / prevScale);
                    const newY = containerMouseY - (containerMouseY - prevPos.y) * (clampedScale / prevScale);
                    
                    const { width: cw, height: ch } = rect;
                    const minX = cw - imageGeom.width * clampedScale - ox;
                    const maxX = -ox;
                    const minY = ch - imageGeom.height * clampedScale - oy;
                    const maxY = -oy;

                    const clampedX = Math.min(maxX, Math.max(minX, newX));
                    const clampedY = Math.min(maxY, Math.max(minY, newY));

                    return { x: clampedX, y: clampedY };
                });

                return clampedScale;
            });
        };
        
        wrapper.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            wrapper.removeEventListener('wheel', handleWheel);
        };
    }, [imageGeom])

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging || scale <= 1) return;
        e.preventDefault();
        const newX = e.clientX - startPos.x;
        const newY = e.clientY - startPos.y;

        const wrapper = mapWrapperRef.current;
        if (!wrapper || !imageGeom) return;

        const { width: cw, height: ch } = wrapper.getBoundingClientRect();
        const { x: ox, y: oy } = imageGeom;
        
        const minX = cw - imageGeom.width * scale - ox;
        const maxX = -ox;
        const minY = ch - imageGeom.height * scale - oy;
        const maxY = -oy;

        const clampedX = Math.min(maxX, Math.max(minX, newX));
        const clampedY = Math.min(maxY, Math.max(minY, newY));

        setPosition({ x: clampedX, y: clampedY });
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="map-app-container">
        <header className="map-app-header">
          <h1>Explore Jharkhand</h1>
          <p>Discover the rich cultural heritage and breathtaking natural beauty of Jharkhand. Click on the markers to learn more about each destination.</p>
        </header>
        <div 
          className="map-wrapper"
          ref={mapWrapperRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: isDragging && scale > 1 ? 'grabbing' : 'grab' }}
        >
            <div 
                className="transform-container"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                }}
            >
                <img 
                    ref={imageRef}
                    onLoad={handleImageLoad}
                    src="/jharkhand_map.png" 
                    alt="Map of Jharkhand" 
                    className="jharkhand-map-image"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x680/c8e6c9/8FBC8F?text=Map+Not+Found'; }}
                />
                {imageGeom && touristSites.map(site => (
                    <div
                        key={site.id}
                        className={`map-marker ${selectedSite?.id === site.id ? 'active' : ''}`}
                        style={{ top: `${site.coords.y}%`, left: `${site.coords.x}%` }}
                        onClick={() => handleMarkerClick(site)}
                        onMouseDown={(e) => e.stopPropagation()}
                        title={site.name}
                    >
                        <div className="marker-dot"></div>
                    </div>
                ))}
            </div>
          {selectedSite && (
            <div className="info-box">
               <button className="info-box-close" onClick={handleCloseInfoBox}>×</button>
              <h3>{selectedSite.name}</h3>
              <p>{selectedSite.description}</p>
            </div>
          )}
        </div>
    </div>
  )
}

export default Map