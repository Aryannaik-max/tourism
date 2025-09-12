import React, { useState } from 'react';
import { Briefcase, Calendar, Star, BarChart2, Users, MapPin, Tag, PlusCircle, Edit2, Trash2, Send, MessageCircle, Heart, CheckCircle, Clock } from 'lucide-react';

// --- Sub-components for different dashboard sections ---

const GuideProfile = ({ guideData }) => (
  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
      <Briefcase className="w-6 h-6 text-emerald-600"/> My Guide Profile
      {guideData.isVerified && (
        <span className="text-sm font-semibold text-white bg-blue-500 rounded-full px-3 py-1 flex items-center gap-1 ml-auto">
          <CheckCircle className="w-4 h-4" /> Verified
        </span>
      )}
    </h2>
    <div className="flex items-center gap-6 mb-6">
      <img src={guideData.profilePic} alt="Guide" className="w-24 h-24 rounded-full object-cover shadow-md"/>
      <div>
        <h3 className="text-3xl font-bold text-gray-800">{guideData.name}</h3>
        <p className="text-gray-500">{guideData.specialization}</p>
        <div className="flex items-center text-sm text-yellow-500 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(guideData.rating) ? 'fill-current' : ''}`} />
          ))}
          <span className="ml-2 text-gray-600">{guideData.rating.toFixed(1)} ({guideData.reviews} reviews)</span>
        </div>
      </div>
    </div>
    <div className="space-y-4">
      <p className="text-gray-700">{guideData.bio}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
        <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-emerald-600"/> {guideData.location}</div>
        <div className="flex items-center gap-2"><Tag className="w-5 h-5 text-emerald-600"/> Languages: {guideData.languages.join(', ')}</div>
      </div>
    </div>
  </div>
);

const BookingsView = ({ guideData }) => (
  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
      <Calendar className="w-6 h-6 text-emerald-600"/> Upcoming Bookings
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tourist Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {guideData.bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.touristName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.tourName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {booking.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ToursManagement = ({ guideData, setGuideData }) => {
  const [newTour, setNewTour] = useState({ name: '', description: '', price: '', duration: '' });

  const handleAddTour = (e) => {
    e.preventDefault();
    const tourId = `tour-${Date.now()}`;
    const newTourEntry = {
      id: tourId,
      name: newTour.name,
      description: newTour.description,
      price: parseFloat(newTour.price),
      duration: newTour.duration,
    };
    setGuideData(prevData => ({
      ...prevData,
      tours: [...prevData.tours, newTourEntry]
    }));
    setNewTour({ name: '', description: '', price: '', duration: '' });
  };

  const handleRemoveTour = (tourId) => {
    setGuideData(prevData => ({
      ...prevData,
      tours: prevData.tours.filter(tour => tour.id !== tourId)
    }));
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <MapPin className="w-6 h-6 text-emerald-600"/> My Tours
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <form onSubmit={handleAddTour} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Add a New Tour</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tour Name</label>
              <input type="text" value={newTour.name} onChange={(e) => setNewTour({ ...newTour, name: e.target.value })} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., Hundru Falls Trek" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea value={newTour.description} onChange={(e) => setNewTour({ ...newTour, description: e.target.value })} className="mt-1 w-full p-2 border rounded-md" placeholder="Describe your tour" rows="3" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price ($)</label>
              <input type="number" value={newTour.price} onChange={(e) => setNewTour({ ...newTour, price: e.target.value })} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., 50" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration (hours)</label>
              <input type="number" value={newTour.duration} onChange={(e) => setNewTour({ ...newTour, duration: e.target.value })} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., 4" required />
            </div>
            <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
              <PlusCircle className="w-5 h-5"/> Add Tour
            </button>
          </form>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Tour Listings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {guideData.tours.map((tour) => (
                  <tr key={tour.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tour.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${tour.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tour.duration} hrs</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex gap-2">
                        <button onClick={() => console.log('Editing tour:', tour.id)} className="text-emerald-600 hover:text-emerald-800">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleRemoveTour(tour.id)} className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsView = ({ guideData }) => (
  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
      <BarChart2 className="w-6 h-6 text-emerald-600"/> Analytics & Performance
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-emerald-500"/> Total Tours Completed</h3>
        <p className="text-3xl font-bold text-emerald-600 mt-2">{guideData.analytics.toursCompleted}</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2"><Star className="w-5 h-5 text-yellow-500"/> Average Rating</h3>
        <p className="text-3xl font-bold text-yellow-600 mt-2">{guideData.analytics.avgRating.toFixed(1)}</p>
      </div>
    </div>
  </div>
);

const CommunityView = () => (
  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
      <Users className="w-6 h-6 text-emerald-600"/> Guide Community
    </h2>
    <div className="space-y-6">
      <p className="text-lg text-gray-600">Connect with other local guides, share tips, and collaborate on new tours.</p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center gap-4 mb-3">
          <img src="https://i.pravatar.cc/50?u=guide_user_1" alt="Community Member" className="w-10 h-10 rounded-full"/>
          <div>
            <h4 className="font-bold text-gray-800">Ravi_Guide</h4>
            <p className="text-sm text-gray-500">Just finished an amazing tour of the waterfalls! The tourists loved it.</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center"><Heart className="w-4 h-4 mr-1 text-red-500 fill-current"/> 15 Likes</div>
            <div className="flex items-center"><MessageCircle className="w-4 h-4 mr-1 text-blue-500"/> 3 Comments</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center gap-4 mb-3">
          <img src="https://i.pravatar.cc/50?u=guide_user_2" alt="Community Member" className="w-10 h-10 rounded-full"/>
          <div>
            <h4 className="font-bold text-gray-800">Neha_Trekker</h4>
            <p className="text-sm text-gray-500">Looking for a partner for a new trekking route near Parasnath Hill. Anyone interested?</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center"><Heart className="w-4 h-4 mr-1 text-red-500 fill-current"/> 22 Likes</div>
            <div className="flex items-center"><MessageCircle className="w-4 h-4 mr-1 text-blue-500"/> 8 Comments</div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6 flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white/50">
      <input type="text" placeholder="Share a tip or ask a question..." className="flex-grow bg-transparent focus:outline-none text-gray-800"/>
      <button className="ml-2 p-2 bg-emerald-500 rounded-full text-white"><Send className="w-5 h-5"/></button>
    </div>
  </div>
);

// --- Main Guide Dashboard Component ---
const App = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [guideData, setGuideData] = useState({
    name: 'Amit Kumar',
    specialization: 'Cultural & Trekking Guide',
    bio: 'I am a certified local guide specializing in cultural tours and trekking expeditions. I love sharing the rich history and natural beauty of Jharkhand.',
    location: 'Ranchi',
    languages: ['Hindi', 'English', 'Santhali'],
    rating: 5.0,
    reviews: 120,
    isVerified: true,
    profilePic: 'https://i.pravatar.cc/150?u=amit_kumar',
    bookings: [
      { id: 'BKG123', touristName: 'Anil Kumar', tourName: 'Hundru Falls Trek', date: '2024-07-01', status: 'Confirmed' },
      { id: 'BKG124', touristName: 'Jane Doe', tourName: 'City Heritage Walk', date: '2024-07-05', status: 'Confirmed' },
    ],
    tours: [
      { id: 'tour-1', name: 'Hundru Falls Trek', description: 'A scenic trek to the famous Hundru Falls.', price: 50, duration: 4 },
      { id: 'tour-2', name: 'City Heritage Walk', description: 'Explore the historical monuments of Ranchi.', price: 30, duration: 2 },
    ],
    analytics: {
      toursCompleted: 25,
      avgRating: 5.0,
    },
  });

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <GuideProfile guideData={guideData} />;
      case 'bookings':
        return <BookingsView guideData={guideData} />;
      case 'myTours':
        return <ToursManagement guideData={guideData} setGuideData={setGuideData} />;
      case 'analytics':
        return <AnalyticsView guideData={guideData} />;
      case 'community':
        return <CommunityView />;
      default:
        return <GuideProfile guideData={guideData} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-emerald-900 text-white p-6 md:p-8 space-y-4">
          <div className="text-2xl font-bold mb-8">Guide Portal</div>
          <nav className="space-y-2">
            <a href="#" onClick={() => setActiveSection('profile')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'profile' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <Briefcase className="w-5 h-5" /> Profile
            </a>
            <a href="#" onClick={() => setActiveSection('bookings')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'bookings' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <Calendar className="w-5 h-5" /> Bookings
            </a>
            <a href="#" onClick={() => setActiveSection('myTours')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'myTours' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <MapPin className="w-5 h-5" /> My Tours
            </a>
            <a href="#" onClick={() => setActiveSection('analytics')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'analytics' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <BarChart2 className="w-5 h-5" /> Analytics
            </a>
            <a href="#" onClick={() => setActiveSection('community')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'community' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <Users className="w-5 h-5" /> Community
            </a>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-grow p-8 md:p-12">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default App;
