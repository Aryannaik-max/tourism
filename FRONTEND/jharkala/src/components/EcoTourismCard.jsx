const CalendarDays = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const EcotourismCard = ({ item, onSelect }) => (
    <div onClick={() => onSelect(item)} className="ecotourism-card">
        <img src={item.image} alt={item.name} />
        <div className="ecotourism-card-content">
            <h3 className="ecotourism-card-name">{item.name}</h3>
            <div className="ecotourism-card-info">
                <CalendarDays />
                <span>{item.duration}</span>
            </div>
            <p className="ecotourism-card-description">{item.description}</p>
            <div className="ecotourism-card-footer">
                 <p className="ecotourism-card-price">₹{item.price.toLocaleString()} <span>per person</span></p>
                <button className="ecotourism-card-button">Explore Package &rarr;</button>
            </div>
        </div>
    </div>
);

export default EcotourismCard