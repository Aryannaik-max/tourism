const Section = ({ title, subtitle, children }) => (
    <div className="section">
        <div className="container">
            <div className="section-header">
                <h2 className="section-pretitle">Marketplace</h2>
                <p className="section-title">{title}</p>
                <p className="section-subtitle">{subtitle}</p>
            </div>
            <div className="section-content">
                {children}
            </div>
        </div>
    </div>
);

export default Section