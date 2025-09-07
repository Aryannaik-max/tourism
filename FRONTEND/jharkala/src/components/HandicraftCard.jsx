const HandicraftCard = ({ item, onSelect }) => (
    <div onClick={() => onSelect(item)} className="handicraft-card">
        <div className="handicraft-card-img-container">
            <img src={item.image} alt={item.name} />
        </div>
        <div className="handicraft-card-content">
            <h3 className="handicraft-card-name">{item.name}</h3>
            <p className="handicraft-card-artisan">by {item.artisan}</p>
            <div className="handicraft-card-price-container">
                <p className="handicraft-card-price">₹{item.price.toLocaleString()}</p>
            </div>
        </div>
    </div>
);

export default HandicraftCard