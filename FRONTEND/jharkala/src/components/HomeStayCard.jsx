const Users = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HomestayCard = ({ item, onSelect }) => (
  <div onClick={() => onSelect(item)} className="homestay-card">
    <div className="homestay-card-img-container">
      <img src={item.image} alt={item.name} />
      <div className="homestay-card-img-overlay"></div>
      <div className="homestay-card-img-text">
        <h3 className="homestay-card-name">{item.name}</h3>
        <p className="homestay-card-host">Hosted by {item.host}</p>
      </div>
    </div>
    <div className="homestay-card-content">
      <div className="homestay-card-details">
        <div className="homestay-card-capacity">
          <Users />
          <span>Up to {item.capacity} guests</span>
        </div>
        <p className="homestay-card-price">₹{item.price.toLocaleString()} <span>/ night</span></p>
      </div>
      <p className="homestay-card-description">{item.description}</p>
    </div>
  </div>
);

export default HomestayCard