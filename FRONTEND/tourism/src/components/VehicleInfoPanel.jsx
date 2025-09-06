import VehicleIcon from './VehicleIcon'

const VehicleInfoPanel = ({ vehicle, onClose }) => {
    if (!vehicle) return null;

    return (
        <div className="info-panel animate-slide-up">
            <button onClick={onClose} className="info-panel-close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="info-panel-header">
                <div className={`info-panel-icon-wrapper ${vehicle.type === 'Bus' ? 'bus-info-icon-bg' : 'train-info-icon-bg'}`}>
                    <VehicleIcon type={vehicle.type} />
                </div>
                <div className="info-panel-details">
                    <h2 className="info-panel-title">{vehicle.routeName}</h2>
                    <p className="info-panel-subtitle">{vehicle.type} ID: {vehicle.id}</p>
                </div>
            </div>
            <div className="info-panel-body">
                <div className="status-row">
                    <span>Status</span>
                    <span className="status-badge">On Time</span>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${vehicle.progress}%` }}></div>
                </div>
                <p className="progress-label">Route Progress</p>
            </div>
        </div>
    );
};

export default VehicleInfoPanel