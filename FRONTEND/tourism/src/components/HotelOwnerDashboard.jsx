import StatCard from "./StatCard";
import DashboardCard from "./DashboardCard";

const Users = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const HotelOwnerDashboard = () => (
    <div className="dashboard-grid dashboard-grid-cols-2 dashboard-grid-cols-lg-3">
        <StatCard title="Occupancy Rate" value="82%" change="+5%" changeType="increase" />
        <StatCard title="Tonight's Arrivals" value="14" change="+3" changeType="increase" />
        <StatCard title="Available Rooms" value="18" change="-3" changeType="decrease" />
        <DashboardCard icon={<Users style={{color: 'var(--violet-400)'}} />} title="Recent Bookings" customClasses="col-span-2 col-span-lg-3">
            <div className="table-container">
                <table className="table">
                    <thead><tr><th>Guest Name</th><th>Check-in</th><th>Nights</th><th>Room Type</th></tr></thead>
                    <tbody>
                        <tr><td>John Doe</td><td>Aug 10</td><td>3</td><td>Deluxe Queen</td></tr>
                        <tr><td>Jane Smith</td><td>Aug 10</td><td>5</td><td>Standard King</td></tr>
                        <tr><td>Mike Ross</td><td>Aug 11</td><td>2</td><td>Suite</td></tr>
                    </tbody>
                </table>
            </div>
        </DashboardCard>
    </div>
);

export default HotelOwnerDashboard