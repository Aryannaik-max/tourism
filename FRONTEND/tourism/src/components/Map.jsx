import { useState, useEffect, useRef } from 'react';

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
    setSelectedSite(site);
  };

  const handleCloseInfoBox = () => {
    setSelectedSite(null);
  };

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
  };

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
          const minX = cw - imageGeom.width * clampedScale - imageGeom.x;
          const maxX = -imageGeom.x;
          const minY = ch - imageGeom.height * clampedScale - imageGeom.y;
          const maxY = -imageGeom.y;

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
  }, [imageGeom]);

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
    const minX = cw - imageGeom.width * scale - imageGeom.x;
    const maxX = -imageGeom.x;
    const minY = ch - imageGeom.height * clampedScale - imageGeom.y;
    const maxY = -imageGeom.y;

    const clampedX = Math.min(maxX, Math.max(minX, newX));
    const clampedY = Math.min(maxY, Math.max(minY, newY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="bg-[#4CAF50] p-4 md:p-8 rounded-lg shadow-md text-white">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#152A4C] mb-2">Explore Jharkhand</h1>
        <p className="text-gray-200">Discover the rich cultural heritage and breathtaking natural beauty of Jharkhand. Click on the markers to learn more.</p>
      </header>
      <div 
        className="relative w-full h-[60vh] md:h-[70vh] rounded-xl overflow-hidden cursor-grab active:cursor-grabbing"
        ref={mapWrapperRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="absolute inset-0 transition-transform duration-100 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        >
          <img 
            ref={imageRef}
            onLoad={handleImageLoad}
            src="/jharkhand_map.png"
            alt="Map of Jharkhand" 
            className="w-full h-full object-contain"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x680/E0E0E0/152A4C?text=Map+Not+Found'; }}
          />
          {imageGeom && touristSites.map(site => (
            <div
              key={site.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${selectedSite?.id === site.id ? 'z-20 scale-125' : 'z-10'}`}
              style={{ 
                top: `${(site.coords.y * imageGeom.height / 100) + imageGeom.y}px`, 
                left: `${(site.coords.x * imageGeom.width / 100) + imageGeom.x}px` 
              }}
              onClick={() => handleMarkerClick(site)}
              onMouseDown={(e) => e.stopPropagation()}
              title={site.name}
            >
              <div className="w-4 h-4 rounded-full bg-[#152A4C] ring-4 ring-white ring-opacity-60 transition-all duration-300 transform hover:scale-125"></div>
              {selectedSite?.id === site.id && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#152A4C] animate-ping opacity-75"></div>
              )}
            </div>
          ))}
        </div>
        {selectedSite && (
          <div className="absolute top-4 right-4 bg-white p-6 rounded-xl shadow-lg z-30 max-w-sm animate-fadeIn">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={handleCloseInfoBox}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-xl font-bold text-[#152A4C] mb-2">{selectedSite.name}</h3>
            <p className="text-gray-700">{selectedSite.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;
