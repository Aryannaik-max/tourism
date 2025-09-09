import { useMemo } from 'react'
import TouristDashboard from './TouristDashboard'
import GuideDashboard from './GuideDashboard'
import ShopOwnerDashboard from './ShopOwnerDashboard'
import HotelOwnerDashboard from './HotelOwnerDashboard'
import TourismOfficialDashboard from './TourismOfficialDashboard'
import './Dashboard.css'

const Dashboard = () => {
    const currentUser = { name: "Jessica Wells", role: "Tourist"}
    const { role } = currentUser

    const DashboardComponent = useMemo(() => {
        switch(role) {
            case 'Tourist': return <TouristDashboard />
            case 'Guide': return <GuideDashboard />
            case 'Shop Owner': return <ShopOwnerDashboard />
            case 'Hotel Owner': return <HotelOwnerDashboard />
            case 'Tourism Official': return <TourismOfficialDashboard />
            default: return <p>No dashboard available for this user role.</p>
        }
    }, [role])

    const roleColors = {
        'Tourist': 'linear-gradient(to bottom, #f43f5e, #ec4899)',
        'Guide': 'linear-gradient(to bottom, #8b5cf6, #a855f7)',
        'Shop Owner': 'linear-gradient(to bottom, #84cc16, #22c55e)',
        'Hotel Owner': 'linear-gradient(to bottom, #f59e0b, #f97316)',
        'Tourism Official': 'linear-gradient(to bottom, #0ea5e9, #06b6d4)',
    };

    const gradient = roleColors[role] || 'linear-gradient(to bottom, #64748b, #475569)';

  return (
    <div className="app-container">
        <div className="app-wrapper">
            <header className="header">
                <div>
                    <h1>Dashboard</h1>
                    <p>Welcome, {currentUser.name}!</p>
                </div>
                <div className="text-right">
                    <span className="header-role-badge">{currentUser.role}</span>
                </div>
            </header>
            <main className="main-content">
                <div className="dashboard-container">
                    <div className="dashboard-header">
                        <div className="dashboard-header-indicator" style={{ background: gradient }}></div>
                        <h2>{role} Dashboard</h2>
                    </div>
                    {DashboardComponent}
                </div>
            </main>
        </div>
    </div>
  )
}

export default Dashboard