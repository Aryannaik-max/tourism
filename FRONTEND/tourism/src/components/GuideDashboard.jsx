import StatCard from './StatCard'
import DashboardCard from './DashboardCard'

const Users = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

const CalendarDays = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const GuideDashboard = () => (
    <div className="dashboard-grid dashboard-grid-cols-2 dashboard-grid-cols-lg-3">
        <StatCard title="Total Tours This Month" value="28" change="+5" changeType="increase" />
        <StatCard title="Earnings" value="$4,200" change="+15%" changeType="increase" />
        <DashboardCard icon={<Users style={{color: 'var(--violet-400)'}} />} title="Upcoming Bookings">
            <ul>
                <li className="list-item"><span>City Tour - 4 people</span> <span className="tag">Tomorrow</span></li>
                <li className="list-item"><span>Hiking Trail - 2 people</span> <span className="tag">Aug 12</span></li>
                <li className="list-item"><span>Museum Visit - 6 people</span> <span className="tag">Aug 14</span></li>
            </ul>
        </DashboardCard>
        <DashboardCard icon={<CalendarDays style={{color: 'var(--sky-400)'}} />} title="Manage Schedule" customClasses="col-span-2 col-span-lg-3">
            <p>View and update your availability for tours.</p>
            <button className="button button-sky">Open Calendar</button>
        </DashboardCard>
    </div>
);

export default GuideDashboard