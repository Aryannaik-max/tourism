import DashboardCard from "./DashboardCard";

const MapPin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Hotel = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" /><path d="m9 16 .34 2.04" /><path d="m15 16 .34 2.04" /><path d="M12 6V4" /><path d="M12 12v-2" /><path d="M12 18v-2" /><path d="M6 10h12" />
  </svg>
);

const ShoppingCart = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/></svg>
);

const CalendarDays = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const TouristDashboard = () => (
    <div className="dashboard-grid dashboard-grid-cols-2 dashboard-grid-cols-lg-3">
        <DashboardCard icon={<MapPin style={{color: 'var(--rose-400)'}} />} title="Local Attractions">
            <ul className="list">
                <li>Mountain View Point</li> <li>Historic Downtown</li> <li>Sunny Beach</li> <li>National Museum</li>
            </ul>
        </DashboardCard>
        <DashboardCard icon={<Hotel style={{color: 'var(--amber-400)'}} />} title="Book a Hotel">
            <p>Find the perfect stay for your trip. Exclusive deals available!</p>
            <button className="button button-amber">Search Hotels</button>
        </DashboardCard>
        <DashboardCard icon={<ShoppingCart style={{color: 'var(--lime-400)'}} />} title="Nearby Shops">
            <p>Discover local crafts and souvenirs. Special discounts for tourists.</p>
            <button className="button button-lime">Find Shops</button>
        </DashboardCard>
        <DashboardCard icon={<CalendarDays style={{color: 'var(--sky-400)'}} />} title="Upcoming Events" customClasses="col-span-2 col-span-lg-3">
             <div className="table-container">
                <table className="table">
                    <thead><tr><th>Event</th><th>Date</th><th>Location</th></tr></thead>
                    <tbody>
                        <tr><td>Summer Music Festival</td><td>Aug 15-17</td><td>Central Park</td></tr>
                        <tr><td>Artisan Food Market</td><td>Every Saturday</td><td>Town Square</td></tr>
                        <tr><td>Historical Walking Tour</td><td>Daily at 10am</td><td>City Hall</td></tr>
                    </tbody>
                </table>
             </div>
        </DashboardCard>
    </div>
);

export default TouristDashboard