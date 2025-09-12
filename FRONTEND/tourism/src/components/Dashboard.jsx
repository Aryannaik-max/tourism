import React, { useState } from 'react';
import { Package, Users, MessageSquare, Compass, MapPin, DollarSign, Search, Heart, MessageCircle, Send } from 'lucide-react';

const TouristDashboard = () => {
  const [activeSection, setActiveSection] = useState('packages');
  const [searchQuery, setSearchQuery] = useState('');

  const renderSection = () => {
    switch (activeSection) {
      case 'packages':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Explore Travel Packages</h2>
            <p className="text-lg text-gray-600">Discover curated itineraries and book your next adventure.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/20">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Waterfall Wonders Tour</h3>
                <p className="text-gray-700">A 3-day tour of Jharkhand's most stunning waterfalls including Hundru, Jonha, and Dassam Falls.</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                  <span><MapPin className="inline-block w-4 h-4 mr-1"/> Ranchi</span>
                  <span><DollarSign className="inline-block w-4 h-4 mr-1"/> $250</span>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg border border-white/20">
                <h3 className="text-xl font-bold text-emerald-600 mb-2">Wilderness Safari</h3>
                <p className="text-gray-700">An immersive jungle safari in Betla National Park and Dalma Wildlife Sanctuary.</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                  <span><MapPin className="inline-block w-4 h-4 mr-1"/> Latehar</span>
                  <span><DollarSign className="inline-block w-4 h-4 mr-1"/> $400</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'social':
        const posts = [
          { id: 1, user: 'Traveler_Raj', location: 'Ranchi', text: 'Had an amazing time at Dassam Falls today! The sound of the water is so calming. #JharkhandTourism', image: 'https://source.unsplash.com/400x300/?dassam-falls,waterfall', likes: 25, comments: 5 },
          { id: 2, user: 'EcoExplorer_Priya', location: 'Betla', text: 'Spotted a beautiful bison on my safari at Betla National Park. What a fantastic experience! #BetlaNationalPark #Wildlife', image: 'https://source.unsplash.com/400x300/?bison,wildlife,india', likes: 42, comments: 12 },
          { id: 3, user: 'Adventure_Sam', location: 'Netarhat', text: 'Sunrise at Netarhat was absolutely breathtaking. Feeling so energized. #SunrisePoint #Jharkhand', image: 'https://source.unsplash.com/400x300/?sunrise,mountains', likes: 78, comments: 21 },
          { id: 4, user: 'Foodie_Neha', location: 'Jamshedpur', text: 'Enjoying some delicious local cuisine in Jamshedpur. The hospitality is incredible!', image: 'https://source.unsplash.com/400x300/?indian-food,cuisine', likes: 19, comments: 8 },
        ];
        const filteredPosts = posts.filter(post => post.location.toLowerCase().includes(searchQuery.toLowerCase()));
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Go Social</h2>
            <p className="text-lg text-gray-600">Share your experiences and see what others are exploring.</p>
            <div className="relative mb-6">
              <input type="text" placeholder="Search by location..." className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 transition-colors" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"/>
            </div>
            <div className="space-y-8">
              {filteredPosts.length > 0 ? filteredPosts.map(post => (
                <div key={post.id} className="bg-white/70 backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-white/20">
                  <div className="flex items-center mb-4">
                    <img src={`https://i.pravatar.cc/50?u=${post.user}`} alt={post.user} className="w-10 h-10 rounded-full mr-4"/>
                    <div>
                      <h4 className="font-bold text-gray-800">{post.user}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3"/> {post.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.text}</p>
                  <img src={post.image} alt="Post" className="w-full h-auto rounded-2xl mb-4 object-cover"/>
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center"><Heart className="w-4 h-4 mr-1 text-red-500 fill-current"/> {post.likes} Likes</div>
                      <div className="flex items-center"><MessageCircle className="w-4 h-4 mr-1 text-blue-500"/> {post.comments} Comments</div>
                    </div>
                    <button className="text-emerald-600 font-semibold hover:underline">View Post</button>
                  </div>
                </div>
              )) : (
                <div className="text-center text-gray-500 italic p-8">No posts found for "{searchQuery}"</div>
              )}
            </div>
          </div>
        );
      case 'chatbot':
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">AI Chatbot</h2>
            <p className="text-lg text-gray-600">Get instant answers and recommendations from our intelligent travel assistant.</p>
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20">
              <MessageSquare className="mx-auto w-12 h-12 text-emerald-600 mb-4"/>
              <p className="text-gray-600">The AI Chatbot feature is currently a placeholder. Please check back later for full functionality.</p>
              <div className="mt-6 flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white/50">
                <input type="text" placeholder="Type your message..." className="flex-grow bg-transparent focus:outline-none text-gray-800"/>
                <button className="ml-2 p-2 bg-emerald-500 rounded-full text-white"><Send className="w-5 h-5"/></button>
              </div>
            </div>
          </div>
        );
      case 'itinerary':
        return (
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Itinerary Planning</h2>
            <p className="text-lg text-gray-600">Create a personalized travel plan tailored to your interests and timeline.</p>
            <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg border border-white/20">
              <Compass className="mx-auto w-12 h-12 text-emerald-600 mb-4"/>
              <p className="text-gray-600">The Itinerary Planning feature is a placeholder. A fully functional tool to build your perfect trip is coming soon!</p>
              <button className="mt-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">Start Planning</button>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="w-full md:w-64 bg-emerald-900 text-white p-6 md:p-8 space-y-4">
          <div className="text-2xl font-bold mb-8">Tourist Dashboard</div>
          <nav className="space-y-2">
            <a href="#" onClick={() => setActiveSection('packages')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'packages' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <Package className="w-5 h-5" /> Packages
            </a>
            <a href="#" onClick={() => setActiveSection('social')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'social' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <Users className="w-5 h-5" /> Go Social
            </a>
            <a href="#" onClick={() => setActiveSection('chatbot')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'chatbot' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <MessageSquare className="w-5 h-5" /> AI Chatbot
            </a>
            <a href="#" onClick={() => setActiveSection('itinerary')} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'itinerary' ? 'bg-emerald-700 font-semibold' : 'hover:bg-emerald-800'}`}>
              <Compass className="w-5 h-5" /> Itinerary Planning
            </a>
          </nav>
        </aside>
        <main className="flex-grow p-8 md:p-12">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default TouristDashboard;
