import React, { useState, useMemo } from 'react';

// Enhanced icon components with better styling
const MapPin = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Hotel = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
    <path d="m9 16 .34 2.04" />
    <path d="m15 16 .34 2.04" />
    <path d="M12 6V4" />
    <path d="M12 12v-2" />
    <path d="M12 18v-2" />
    <path d="M6 10h12" />
  </svg>
);

const ShoppingCart = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/>
  </svg>
);

const CalendarDays = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const Users = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const CheckCircle = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const Building = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <path d="M9 22v-4h6v4"/>
    <path d="M8 6h.01"/>
    <path d="M16 6h.01"/>
    <path d="M12 6h.01"/>
    <path d="M12 10h.01"/>
    <path d="M12 14h.01"/>
    <path d="M16 10h.01"/>
    <path d="M16 14h.01"/>
    <path d="M8 10h.01"/>
    <path d="M8 14h.01"/>
  </svg>
);

const Settings = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

// Enhanced StatCard component
const StatCard = ({ title, value, change, changeType, icon }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
        {change && (
          <p className={`text-sm font-medium flex items-center ${
            changeType === 'increase' ? 'text-emerald-600' : 'text-red-500'
          }`}>
            <span className="mr-1">
              {changeType === 'increase' ? '↗' : '↘'}
            </span>
            {change}
          </p>
        )}
      </div>
      {icon && (
        <div className="ml-4 p-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
          {icon}
        </div>
      )}
    </div>
  </div>
);

// Enhanced DashboardCard component
const DashboardCard = ({ icon, title, children, customClasses = '', gradient = false }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${gradient ? 'bg-gradient-to-br from-white to-gray-50' : ''} ${customClasses}`}>
    <div className="flex items-center mb-4">
      <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-4 transform transition-transform duration-200 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <div className="text-gray-600">{children}</div>
  </div>
);

// Individual Dashboard Components
const TouristDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <DashboardCard 
      icon={<MapPin style={{color: '#f43f5e'}} />} 
      title="Local Attractions"
      gradient={true}
    >
      <div className="space-y-3">
        {[
          { name: 'Mountain View Point', rating: '4.8', distance: '2.3 km' },
          { name: 'Historic Downtown', rating: '4.6', distance: '0.8 km' },
          { name: 'Sunny Beach', rating: '4.9', distance: '5.1 km' },
          { name: 'National Museum', rating: '4.7', distance: '1.2 km' }
        ].map((attraction, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl hover:from-pink-100 hover:to-rose-100 transition-colors duration-200">
            <div>
              <p className="font-medium text-gray-900">{attraction.name}</p>
              <p className="text-sm text-gray-600">⭐ {attraction.rating} • {attraction.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>

    <DashboardCard icon={<Hotel style={{color: '#f59e0b'}} />} title="Book a Hotel">
      <p className="mb-4 text-gray-700">Find the perfect stay for your trip. Exclusive deals available!</p>
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Available Hotels</span>
          <span className="font-semibold text-amber-600">47 found</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Average Price</span>
          <span className="font-semibold text-amber-600">$89/night</span>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
        Search Hotels
      </button>
    </DashboardCard>

    <DashboardCard icon={<ShoppingCart style={{color: '#84cc16'}} />} title="Nearby Shops">
      <p className="mb-4 text-gray-700">Discover local crafts and souvenirs. Special discounts for tourists.</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-lime-600">
          <span className="w-2 h-2 bg-lime-500 rounded-full mr-2"></span>
          15% off at Art & Crafts Corner
        </div>
        <div className="flex items-center text-sm text-lime-600">
          <span className="w-2 h-2 bg-lime-500 rounded-full mr-2"></span>
          Buy 2 Get 1 Free at Souvenir Central
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold py-3 px-4 rounded-xl hover:from-lime-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
        Find Shops
      </button>
    </DashboardCard>

    <DashboardCard 
      icon={<CalendarDays style={{color: '#0ea5e9'}} />} 
      title="Upcoming Events" 
      customClasses="md:col-span-2 lg:col-span-3"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-2 font-semibold text-gray-900">Event</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-900">Date</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-900">Location</th>
              <th className="text-left py-3 px-2 font-semibold text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { event: 'Summer Music Festival', date: 'Aug 15-17', location: 'Central Park' },
              { event: 'Artisan Food Market', date: 'Every Saturday', location: 'Town Square' },
              { event: 'Historical Walking Tour', date: 'Daily at 10am', location: 'City Hall' }
            ].map((item, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 transition-colors duration-200">
                <td className="py-3 px-2 font-medium text-gray-900">{item.event}</td>
                <td className="py-3 px-2 text-gray-700">{item.date}</td>
                <td className="py-3 px-2 text-gray-700">{item.location}</td>
                <td className="py-3 px-2">
                  <button className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-sky-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200">
                    Join
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  </div>
);

const GuideDashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <StatCard 
      title="Total Tours This Month" 
      value="28" 
      change="+5" 
      changeType="increase"
      icon={<Users style={{color: '#8b5cf6'}} />}
    />
    <StatCard 
      title="Earnings" 
      value="$4,200" 
      change="+15%" 
      changeType="increase"
      icon={<Building style={{color: '#10b981'}} />}
    />
    <DashboardCard icon={<Users style={{color: '#8b5cf6'}} />} title="Upcoming Bookings">
      <div className="space-y-3">
        {[
          { tour: 'City Tour - 4 people', tag: 'Tomorrow', color: 'bg-red-100 text-red-800' },
          { tour: 'Hiking Trail - 2 people', tag: 'Aug 12', color: 'bg-yellow-100 text-yellow-800' },
          { tour: 'Museum Visit - 6 people', tag: 'Aug 14', color: 'bg-green-100 text-green-800' }
        ].map((booking, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl">
            <span className="font-medium text-gray-900">{booking.tour}</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${booking.color}`}>
              {booking.tag}
            </span>
          </div>
        ))}
      </div>
    </DashboardCard>
    <DashboardCard 
      icon={<CalendarDays style={{color: '#0ea5e9'}} />} 
      title="Manage Schedule" 
      customClasses="md:col-span-2 lg:col-span-3"
    >
      <p className="mb-4 text-gray-700">View and update your availability for tours.</p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-sky-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
          Open Calendar
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
          Set Availability
        </button>
      </div>
    </DashboardCard>
  </div>
);

// Enhanced Dashboard component
const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState({ name: "Jessica Wells", role: "Tourist" });
  const [isAnimating, setIsAnimating] = useState(false);
  
  const roleOptions = ['Tourist', 'Guide', 'Shop Owner', 'Hotel Owner', 'Tourism Official'];
  
  const handleRoleChange = (newRole) => {
    if (newRole !== currentUser.role) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentUser(prev => ({ ...prev, role: newRole }));
        setIsAnimating(false);
      }, 150);
    }
  };

  const { role } = currentUser;

  const DashboardComponent = useMemo(() => {
    switch(role) {
      case 'Tourist': return <TouristDashboard />
      case 'Guide': return <GuideDashboard />
      case 'Shop Owner': return <div className="text-center p-8 text-gray-600">Shop Owner Dashboard - Coming Soon!</div>
      case 'Hotel Owner': return <div className="text-center p-8 text-gray-600">Hotel Owner Dashboard - Coming Soon!</div>
      case 'Tourism Official': return <div className="text-center p-8 text-gray-600">Tourism Official Dashboard - Coming Soon!</div>
      default: return <p className="text-center p-8 text-gray-600">No dashboard available for this user role.</p>
    }
  }, [role]);

  const roleColors = {
    'Tourist': 'from-pink-500 to-rose-500',
    'Guide': 'from-purple-500 to-violet-500',
    'Shop Owner': 'from-lime-500 to-green-500',
    'Hotel Owner': 'from-amber-500 to-orange-500',
    'Tourism Official': 'from-sky-500 to-cyan-500',
  };

  const roleIcons = {
    'Tourist': <MapPin className="w-5 h-5" />,
    'Guide': <Users className="w-5 h-5" />,
    'Shop Owner': <ShoppingCart className="w-5 h-5" />,
    'Hotel Owner': <Hotel className="w-5 h-5" />,
    'Tourism Official': <Building className="w-5 h-5" />,
  };

  const gradient = roleColors[role] || 'from-gray-500 to-gray-600';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Enhanced Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                Dashboard
              </h1>
              <p className="text-xl text-gray-600">Welcome back, {currentUser.name}! ✨</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Role Switcher */}
              <div className="relative">
                <select
                  value={currentUser.role}
                  onChange={(e) => handleRoleChange(e.target.value)}
                  className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-2 pr-8 font-semibold text-gray-900 hover:border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                >
                  {roleOptions.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className={`flex items-center gap-2 bg-gradient-to-r ${gradient} text-white px-4 py-2 rounded-xl font-semibold shadow-lg`}>
                {roleIcons[currentUser.role]}
                <span>{currentUser.role}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
            <div className="flex items-center mb-8">
              <div className={`w-3 h-12 bg-gradient-to-b ${gradient} rounded-full mr-4 shadow-lg`}></div>
              <h2 className="text-3xl font-bold text-gray-900">{role} Dashboard</h2>
            </div>
            
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              {DashboardComponent}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Tourism Dashboard. Designed with love for better travel experiences.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;