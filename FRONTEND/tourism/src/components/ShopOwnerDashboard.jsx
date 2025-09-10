import StatCard from "./StatCard";
import DashboardCard from "./DashboardCard";

const ShoppingCart = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/></svg>
);

const CheckCircle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const ShopOwnerDashboard = () => (
    <div className="dashboard-grid dashboard-grid-cols-2 dashboard-grid-cols-lg-3">
        <StatCard title="Today's Revenue" value="$854" change="+8%" changeType="increase" />
        <StatCard title="New Orders" value="32" change="-2" changeType="decrease" />
        <StatCard title="Inventory Count" value="1,240 items" change="+50" changeType="increase" />
        <DashboardCard icon={<ShoppingCart style={{color: 'var(--lime-400)'}} />} title="Top Selling Products" customClasses="col-span-2">
            <ol className="ordered-list">
                <li>Hand-carved Wooden Elephant</li> <li>"I Love This City" T-Shirt</li> <li>Local Spices Gift Set</li>
            </ol>
        </DashboardCard>
         <DashboardCard icon={<CheckCircle style={{color: 'var(--green-400)'}} />} title="Recent Customer Reviews">
            <p><i>"Amazing little shop with unique gifts!" - Sarah K.</i></p>
        </DashboardCard>
    </div>
);

export default ShopOwnerDashboard