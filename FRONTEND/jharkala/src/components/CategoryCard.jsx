const CategoryCard = ({ title, description, imageUrl, onClick }) => (
    <div onClick={onClick} className="category-card">
        <div>
            <img src={imageUrl} alt={title} />
        </div>
        <div className="category-card-content">
            <div>
                <p className="category-card-title">{title}</p>
                <p className="category-card-description">{description}</p>
            </div>
        </div>
    </div>
);

export default CategoryCard