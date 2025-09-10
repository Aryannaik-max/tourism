import DashboardCard from './DashboardCard';

const BarChart3 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
);

const StatCard = ({ title, value, change, changeType }) => (
    <DashboardCard icon={<BarChart3 style={{color: 'var(--cyan-500)'}} />} title={title}>
        <p className="stat-card-value">{value}</p>
        <p className={`stat-card-change ${changeType === 'increase' ? 'increase' : 'decrease'}`}>
            {change} vs last month
        </p>
    </DashboardCard>
);

export default StatCard