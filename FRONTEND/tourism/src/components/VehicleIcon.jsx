const VehicleIcon = ({ type }) => {
    const icon = type === 'Bus' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 6v6" />
            <path d="M15 6v6" />
            <path d="M2 12h19.6" />
            <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.4 5.2 19.7 4 18.1 4H5.9c-1.6 0-2.3 1.2-2.8 2.8L1.7 10c-.1.4-.2.8-.2-1.2 0 .4.1.8.2 1.2.3 1.1.8 2.8.8 2.8H5" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="16" cy="18" r="2" />
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 17 17 2" />
            <path d="m2 14 8 8" />
            <path d="m7 17 8-8" />
            <path d="m14 10 3 3" />
            <path d="m19 5-3 3" />
            <path d="m5 19 12-12" />
            <path d="m17 7 5 5" />
            <path d="M9 15 5 19" />
        </svg>
    );
    return (
        <div className={`vehicle-icon-container ${type === 'Bus' ? 'bus-icon-bg' : 'train-icon-bg'}`}>
            {icon}
        </div>
    );
}

export default VehicleIcon