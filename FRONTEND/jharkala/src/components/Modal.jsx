const X = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Modal = ({ item, onClose, type }) => {
    if (!item) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={e => e.stopPropagation()}>
                <div className="modal-content">
                    <button onClick={onClose} className="modal-close-button">
                        <X />
                    </button>
                    
                    <div className="modal-grid">
                        <div>
                            <img src={item.image} alt={item.name} className="modal-image" />
                        </div>
                        <div className="modal-details">
                            <h2 className="modal-title">{item.name}</h2>
                            {type === 'handicrafts' && <p className="modal-subtitle">by {item.artisan}</p>}
                            {type === 'homestays' && <p className="modal-subtitle">by {item.host}</p>}
                            
                            <p className="modal-description">{item.description}</p>

                            <div className="modal-footer">
                                {item.price && <p className="modal-price">₹{item.price.toLocaleString()}</p>}
                                <button className="modal-action-button">
                                    {type === 'handicrafts' ? 'Add to Cart' : 'Book Now'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal