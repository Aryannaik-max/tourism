import StatCard from "./StatCard";
import DashboardCard from "./DashboardCard";

const CheckCircle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const Building = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);

const TourismOfficialDashboard = () => (
    <div className="dashboard-grid dashboard-grid-cols-2 dashboard-grid-cols-lg-4">
        <StatCard title="Total Visitors (YTD)" value="1.2M" change="+12%" changeType="increase" />
        <StatCard title="Total Revenue (YTD)" value="$25.6M" change="+18%" changeType="increase" />
        <StatCard title="Registered Guides" value="250" change="+10" changeType="increase" />
        <StatCard title="Partner Hotels" value="85" change="+2" changeType="increase" />
        <DashboardCard icon={<CheckCircle style={{color: 'var(--green-400)'}} />} title="Pending Approvals" customClasses="col-span-2 col-span-lg-2">
            <ul>
                <li className="list-item"><span>New Tour Guide: Alex Ray</span> <button className="button button-green">Approve</button></li>
                <li className="list-item"><span>New Hotel Listing: The Grand View</span> <button className="button button-green">Approve</button></li>
                <li className="list-item"><span>Event Permit: Summer Fest</span> <button className="button button-green">Approve</button></li>
            </ul>
        </DashboardCard>
        <DashboardCard icon={<Building style={{color: 'var(--amber-400)'}} />} title="Regional Visitor Distribution" customClasses="col-span-2 col-span-lg-2">
             <div className="chart-container">
                <div className="chart">
                   <div className="chart-bar" style={{height: '60%'}} title="North: 60%"></div>
                   <div className="chart-bar" style={{height: '80%'}} title="Downtown: 80%"></div>
                   <div className="chart-bar" style={{height: '45%'}} title="Beaches: 45%"></div>
                   <div className="chart-bar" style={{height: '30%'}} title="Mountains: 30%"></div>
                   <div className="chart-bar" style={{height: '55%'}} title="Suburbs: 55%"></div>
                </div>
             </div>
        </DashboardCard>
    </div>
);

export default TourismOfficialDashboard