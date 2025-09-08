const CalendarDays = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EventCard = ({ item, onSelect }) => (
    <div onClick={() => onSelect(item)} className="event-card">
        <img src={item.image} alt={item.name} />
        <div className="event-card-content">
            <div>
                <h3 className="event-card-name">{item.name}</h3>
                <div className="event-card-info">
                    <CalendarDays />
                    <span>{item.date}</span>
                </div>
                <div className="event-card-info">
                    <MapPin />
                    <span>{item.location}</span>
                </div>
                <p className="event-card-description">{item.description}</p>
            </div>
            <button className="event-card-button">Learn More &rarr;</button>
        </div>
    </div>
);

export default EventCard