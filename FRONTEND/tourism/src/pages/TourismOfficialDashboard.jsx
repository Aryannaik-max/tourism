import React, { useState } from 'react';
import {
  Home, FileText, BarChart2, Bell, ShieldCheck, PlusCircle, Image, Camera,
  MapPin, Landmark, ArrowLeft, User, Globe, Tag
} from 'lucide-react';

const NavButton = ({ icon: Icon, text, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-4 w-full p-4 rounded-xl font-medium transition-all duration-200
      ${isActive
        ? 'bg-white text-emerald-600 shadow-md transform scale-[1.02]'
        : 'text-gray-600 hover:bg-white/50 hover:text-emerald-600'
      }`}
  >
    <Icon className="w-5 h-5 flex-shrink-0" />
    <span>{text}</span>
  </button>
);

const UserInfoCard = ({ userId }) => (
  <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-lg">
    <User className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
    <h3 className="text-sm font-semibold text-gray-800">Your User ID</h3>
    <p className="text-xs text-gray-600 break-all">{userId}</p>
  </div>
);

// --- Dashboard Page Component ---
const DashboardPage = ({ officialData, activities, onAddActivity }) => {
  const [isAddingActivity, setIsAddingActivity] = useState(false);
  const [newActivity, setNewActivity] = useState('');

  const handleAdd = () => {
    if (newActivity.trim() === '') return;
    onAddActivity({
      text: newActivity,
      createdAt: new Date(),
      id: Date.now()
    });
    setNewActivity('');
    setIsAddingActivity(false);
  };

  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex-shrink-0">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800">
              Welcome, {officialData?.name}!
            </h2>
            <p className="text-gray-600 mt-2">
              You are logged in as a **{officialData?.title}** from **{officialData?.organization}**.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Official ID: {officialData?.officialId}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Key Metrics */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <BarChart2 className="w-5 h-5 text-teal-600" /> Key Metrics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50/70 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-teal-600">125</p>
              <p className="text-sm text-gray-600 mt-1">Pending Verifications</p>
            </div>
            <div className="bg-gray-50/70 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-emerald-600">8.2k</p>
              <p className="text-sm text-gray-600 mt-1">Guides Verified</p>
            </div>
            <div className="bg-gray-50/70 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-cyan-600">45</p>
              <p className="text-sm text-gray-600 mt-1">Active Cases</p>
            </div>
            <div className="bg-gray-50/70 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-600">1.5M</p>
              <p className="text-sm text-gray-600 mt-1">Total Travelers</p>
            </div>
          </div>
        </div>
        {/* Recent Activities */}
        <div className="md:col-span-2 lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Bell className="w-5 h-5 text-cyan-600" /> Recent Activities
            </h3>
            <button
              onClick={() => setIsAddingActivity(!isAddingActivity)}
              className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              <PlusCircle className="w-4 h-4 mr-1" /> Add
            </button>
          </div>
          {isAddingActivity && (
            <div className="mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter new activity..."
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
              />
              <button
                onClick={handleAdd}
                className="w-full mt-2 bg-emerald-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Save Activity
              </button>
            </div>
          )}
          <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
            {activities.length > 0 ? (
              activities.map((activity) => (
                <li key={activity.id} className="flex items-start gap-4 p-3 bg-gray-50/70 rounded-xl shadow-sm">
                  <span className="w-2 h-2 mt-2 rounded-full bg-teal-500"></span>
                  <p className="text-sm text-gray-700">
                    {activity.text}
                    <span className="block text-xs text-gray-500 mt-1">{activity.createdAt.toLocaleString()}</span>
                  </p>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">No recent activities.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- Submissions Page Component ---
const SubmissionsPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
      <FileText className="w-6 h-6 text-emerald-600" /> Guide Submissions to Review
    </h2>
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-4 bg-gray-50/70 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <User className="w-8 h-8 text-gray-500" />
            <div>
              <p className="text-lg font-medium text-gray-800">Ravi Kumar</p>
              <p className="text-sm text-gray-600">Submitted Guide License</p>
            </div>
          </div>
          <button className="text-sm text-emerald-600 hover:text-emerald-800 transition-colors">Review</button>
        </li>
        <li className="flex items-center justify-between p-4 bg-gray-50/70 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <User className="w-8 h-8 text-gray-500" />
            <div>
              <p className="text-lg font-medium text-gray-800">Priya Sharma</p>
              <p className="text-sm text-gray-600">Submitted ID Card and Proof of Address</p>
            </div>
          </div>
          <button className="text-sm text-emerald-600 hover:text-emerald-800 transition-colors">Review</button>
        </li>
        <li className="flex items-center justify-between p-4 bg-gray-50/70 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <User className="w-8 h-8 text-gray-500" />
            <div>
              <p className="text-lg font-medium text-gray-800">Anil Das</p>
              <p className="text-sm text-gray-600">Profile update request</p>
            </div>
          </div>
          <button className="text-sm text-emerald-600 hover:text-emerald-800 transition-colors">Review</button>
        </li>
      </ul>
    </div>
  </div>
);

// --- Media Page Component ---
const MediaPage = ({ mediaItems, onAddMedia }) => {
  const [isAddingMedia, setIsAddingMedia] = useState(false);
  const [newMediaUrl, setNewMediaUrl] = useState('');
  const [newMediaDescription, setNewMediaDescription] = useState('');

  const handleAddMedia = () => {
    if (newMediaUrl.trim() === '' || newMediaDescription.trim() === '') return;
    onAddMedia({
      url: newMediaUrl,
      description: newMediaDescription,
      id: Date.now()
    });
    setNewMediaUrl('');
    setNewMediaDescription('');
    setIsAddingMedia(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <Camera className="w-6 h-6 text-emerald-600" /> Media & Content
      </h2>
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Image className="w-5 h-5 text-cyan-600" /> Upload New Media
          </h3>
          <button
            onClick={() => setIsAddingMedia(!isAddingMedia)}
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800 transition-colors"
          >
            <PlusCircle className="w-4 h-4 mr-1" /> Add
          </button>
        </div>
        {isAddingMedia && (
          <div className="mb-6 space-y-2">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Image URL"
              value={newMediaUrl}
              onChange={(e) => setNewMediaUrl(e.target.value)}
            />
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Description"
              value={newMediaDescription}
              onChange={(e) => setNewMediaDescription(e.target.value)}
            />
            <button
              onClick={handleAddMedia}
              className="w-full mt-2 bg-emerald-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
            >
              Save Media
            </button>
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mt-8 mb-4">
          <Globe className="w-5 h-5 text-teal-600" /> Recently Added
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {mediaItems.length > 0 ? (
            mediaItems.map((item) => (
              <div key={item.id} className="bg-gray-50/70 rounded-xl p-2 text-center shadow-sm">
                <img
                  src={item.url}
                  alt={item.description}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/e2e8f0/4a5568?text=Image+Error"; }}
                />
                <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="col-span-2 sm:col-span-3 text-center text-gray-500">No media added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const officialData = {
    name: "Rajesh Sharma",
    email: "rajesh.sharma@gov.in",
    phoneNumber: "+91 98765 43210",
    title: "Regional Tourism Officer",
    organization: "Ministry of Tourism",
    officialId: "IN-TRSM-001A"
  };

  const [activities, setActivities] = useState([
    { id: 1, text: "Approved new guide license for Ramesh Varma", createdAt: new Date(Date.now() - 3600000) },
    { id: 2, text: "Posted a new promotional campaign video for 'Incredible India'", createdAt: new Date(Date.now() - 7200000) },
    { id: 3, text: "Scheduled a team meeting to discuss Q3 metrics", createdAt: new Date(Date.now() - 10800000) },
  ]);

  const [mediaItems, setMediaItems] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1587840179973-194098481352?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Breathtaking waterfall in Coorg", createdAt: new Date(Date.now() - 14400000) },
    { id: 2, url: "https://images.unsplash.com/photo-1549479905-2d4e84b80a1c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Vibrant market in Jaipur", createdAt: new Date(Date.now() - 18000000) },
  ]);

  const handleAddActivity = (newActivity) => {
    setActivities(prev => [newActivity, ...prev]);
  };

  const handleAddMedia = (newMedia) => {
    setMediaItems(prev => [newMedia, ...prev]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage officialData={officialData} activities={activities} onAddActivity={handleAddActivity} />;
      case 'submissions':
        return <SubmissionsPage />;
      case 'media':
        return <MediaPage mediaItems={mediaItems} onAddMedia={handleAddMedia} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 flex flex-col md:flex-row">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Sidebar */}
      <div className="relative z-20 flex-shrink-0 w-full md:w-64 bg-white/50 backdrop-blur-lg rounded-3xl p-6 shadow-2xl mr-8 flex flex-col justify-between mb-8 md:mb-0 border border-white/20">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-emerald-600" /> Dashboard
          </h1>
          <nav className="space-y-4">
            <NavButton
              icon={Home}
              text="Dashboard"
              onClick={() => setCurrentPage('dashboard')}
              isActive={currentPage === 'dashboard'}
            />
            <NavButton
              icon={FileText}
              text="Submissions"
              onClick={() => setCurrentPage('submissions')}
              isActive={currentPage === 'submissions'}
            />
            <NavButton
              icon={Camera}
              text="Media"
              onClick={() => setCurrentPage('media')}
              isActive={currentPage === 'media'}
            />
          </nav>
        </div>
        <div className="space-y-4">
          <UserInfoCard userId="IN-TRSM-001A" />
          <button
            onClick={() => {}}
            className="flex items-center gap-4 w-full p-4 rounded-xl font-medium transition-colors duration-200 text-red-500 hover:bg-red-500/10"
          >
            <ArrowLeft className="w-5 h-5 flex-shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-grow">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
