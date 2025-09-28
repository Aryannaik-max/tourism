import React, { useState } from 'react';
import { Package, Users, MessageSquare, Compass, MapPin, DollarSign, Search, Heart, MessageCircle, Send, Map, Globe, Camera, ShoppingCart, Hotel, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

// NOTE: External routing (like useNavigate and react-router-dom) is removed 
// to ensure the application remains self-contained in a single, runnable file.

const App = () => {
  const [activeSection, setActiveSection] = useState('packages');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // For navigation to other pages
  // State to hold mutable post data for the 'Go Social' section
  const [posts, setPosts] = useState([
    { id: 1, user: 'Traveler_Raj', location: 'Ranchi', text: 'Had an amazing time at Dassam Falls today! The sound of the water is so calming. #JharkhandTourism', image: 'https://source.unsplash.com/400x300/?dassam-falls,waterfall,india', likes: 25, comments: 5, time: '1 hour ago' },
    { id: 2, user: 'EcoExplorer_Priya', location: 'Betla', text: 'Spotted a beautiful bison on my safari at Betla National Park. What a fantastic experience! #BetlaNationalPark #Wildlife', image: 'https://source.unsplash.com/400x300/?bison,wildlife,india', likes: 42, comments: 12, time: '3 hours ago' },
    { id: 3, user: 'Adventure_Sam', location: 'Netarhat', text: 'Sunrise at Netarhat was absolutely breathtaking. Feeling so energized. #SunrisePoint #Jharkhand', image: 'https://source.unsplash.com/400x300/?sunrise,mountains,india', likes: 78, comments: 21, time: '1 day ago' },
    { id: 4, user: 'Foodie_Neha', location: 'Jamshedpur', text: 'Enjoying some delicious local cuisine in Jamshedpur. The hospitality is incredible!', image: 'https://source.unsplash.com/400x300/?indian-food,cuisine', likes: 19, comments: 8, time: '2 days ago' },
  ]);

  // State for new post creation
  const [newPostText, setNewPostText] = useState('');
  const [newPostLocation, setNewPostLocation] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);

  // Function to simulate adding a new post
  const handleAddPost = () => {
    if (newPostText.trim()) {
      const newPost = {
        id: Date.now(), // Unique ID
        user: 'CanvasExplorer_' + Math.floor(Math.random() * 10000), // Mock current user with random ID
        location: newPostLocation || 'Unknown Location',
        text: newPostText.trim(),
        image: 'https://placehold.co/400x300/a7f3d0/065f46?text=My+New+Post', // Placeholder image
        likes: 0,
        comments: 0,
        time: 'Just now'
      };
      setPosts(prevPosts => [newPost, ...prevPosts]); // Add to the top
      setNewPostText('');
      setNewPostLocation('');
      setShowPostModal(false);
    }
  };

  // Function to simulate adding a comment (increments comment count)
  const handleAddComment = (postId, commentText) => {
    if (!commentText.trim()) return;

    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          // Increment comment count for simulation
          return { ...post, comments: post.comments + 1 };
        }
        return post;
      })
    );
  };
  
  // Component for comment input below each post
  const CommentInput = ({ postId }) => {
    const [commentText, setCommentText] = useState('');
    return (
      <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
        <input
          type="text"
          placeholder="Write your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddComment(postId, commentText);
              setCommentText('');
            }
          }}
          className="flex-grow p-3 mr-2 rounded-full bg-gray-50 border border-gray-200 focus:ring-emerald-500 focus:border-emerald-500 text-sm transition-shadow shadow-inner"
        />
        <button
          onClick={() => {
            handleAddComment(postId, commentText);
            setCommentText('');
          }}
          className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors disabled:bg-gray-400 transform hover:scale-105"
          disabled={!commentText.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    );
  };

  // Modal for creating a new post
  const PostModal = () => {
    if (!showPostModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg space-y-5 transform transition-all scale-100 animate-in fade-in duration-300">
          <h3 className="text-3xl font-bold text-emerald-800 border-b pb-3">Share Your Journey</h3>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Location (Optional)</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"/>
              <input 
                type="text"
                placeholder="Where are you now? (e.g., Netarhat)"
                value={newPostLocation}
                onChange={(e) => setNewPostLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">What's on your mind?</label>
            <textarea 
              placeholder="Share your travel experience, tips, or photos! #TravelDiaries"
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              rows="5"
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 resize-none shadow-sm"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              onClick={() => setShowPostModal(false)}
              className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleAddPost}
              className={`px-6 py-3 rounded-xl text-white font-bold transition-colors ${
                newPostText.trim() ? 'bg-emerald-600 hover:bg-emerald-700 shadow-md' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!newPostText.trim()}
            >
              Post Now
            </button>
          </div>
        </div>
      </div>
    );
  };
  

  const renderSection = () => {
    // Shared Card Style for aesthetics
    const cardStyle = "bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-emerald-100 transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-emerald-300";
    const headerStyle = "text-4xl font-extrabold text-emerald-800 mb-2";
    const subheaderStyle = "text-xl text-gray-600 mb-6";

    switch (activeSection) {
      case 'packages':
        return (
          <div className="space-y-8">
            <h2 className={headerStyle}>Explore Travel Packages</h2>
            <p className={subheaderStyle}>Discover curated itineraries tailored for explorers.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Package 1 */}
              <div className={`${cardStyle}`}>
                <Package className="w-8 h-8 text-emerald-600 mb-3"/>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Waterfall Wonders Tour</h3>
                <p className="text-gray-700 text-sm">A 3-day exploration of Jharkhand's most stunning waterfalls: Hundru, Jonha, and Dassam Falls near Ranchi.</p>
                <div className="mt-4 space-y-2">
                  <span className="flex items-center text-sm text-gray-600"><MapPin className="inline-block w-4 h-4 mr-2 text-red-500"/> Ranchi Region</span>
                  {/* Converted $250 to ₹20,000 */}
                  <span className="flex items-center text-sm text-gray-600"><DollarSign className="inline-block w-4 h-4 mr-2 text-green-500"/> ₹ 20,000 (All-inclusive)</span>
                  <button className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-xl font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-[1.01] shadow-md">Book Now</button>
                </div>
              </div>
              {/* Package 2 */}
              <div className={`${cardStyle}`}>
                <Package className="w-8 h-8 text-emerald-600 mb-3"/>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Wilderness Safari Adventure</h3>
                <p className="text-gray-700 text-sm">An immersive 5-day jungle safari in Betla National Park and Dalma Wildlife Sanctuary for wildlife lovers.</p>
                <div className="mt-4 space-y-2">
                  <span className="flex items-center text-sm text-gray-600"><MapPin className="inline-block w-4 h-4 mr-2 text-red-500"/> Latehar & Jamshedpur</span>
                  {/* Converted $400 to ₹32,000 */}
                  <span className="flex items-center text-sm text-gray-600"><DollarSign className="inline-block w-4 h-4 mr-2 text-green-500"/> ₹ 32,000 (With stay)</span>
                  <button className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-xl font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-[1.01] shadow-md">Book Now</button>
                </div>
              </div>
              {/* Package 3 */}
              <div className={`${cardStyle}`}>
                <Package className="w-8 h-8 text-emerald-600 mb-3"/>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Historical Hues of Hazaribagh</h3>
                <p className="text-gray-700 text-sm">A 2-day heritage trip covering the ancient temples and scenic landscapes around Hazaribagh.</p>
                <div className="mt-4 space-y-2">
                  <span className="flex items-center text-sm text-gray-600"><MapPin className="inline-block w-4 h-4 mr-2 text-red-500"/> Hazaribagh</span>
                  {/* Converted $150 to ₹12,000 */}
                  <span className="flex items-center text-sm text-gray-600"><DollarSign className="inline-block w-4 h-4 mr-2 text-green-500"/> ₹ 12,000 (Budget)</span>
                  <button className="mt-3 w-full bg-emerald-600 text-white py-2 rounded-xl font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-[1.01] shadow-md">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'social':
        const filteredPosts = posts.filter(post => post.location.toLowerCase().includes(searchQuery.toLowerCase()) || post.user.toLowerCase().includes(searchQuery.toLowerCase()) || post.text.toLowerCase().includes(searchQuery.toLowerCase()));

        return (
          <div className="space-y-8">
            <h2 className={headerStyle}>Go Social</h2>
            <p className={subheaderStyle}>Share your experiences and see what others are exploring.</p>
            
            {/* Social Header, Search, and New Post Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
                <div className="relative flex-grow w-full sm:w-auto">
                  <input type="text" placeholder="Search by location, user, or hashtag..." className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 transition-colors shadow-inner bg-white" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"/>
                </div>
                <button
                    onClick={() => setShowPostModal(true)}
                    className="w-full sm:w-auto bg-emerald-600 text-white py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-transform transform hover:scale-105 shadow-lg"
                >
                    <Send className="w-5 h-5"/> New Post
                </button>
            </div>


            <div className="space-y-8">
              {filteredPosts.length > 0 ? filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-emerald-300 overflow-hidden">
                  
                  {/* User Info Header */}
                  <div className="bg-emerald-50/50 p-6 flex items-start justify-between">
                    <div className="flex items-center">
                        <img src={`https://i.pravatar.cc/50?u=${post.user}`} alt={post.user} className="w-14 h-14 rounded-full mr-4 border-4 border-white shadow-md"/>
                        <div>
                        <h4 className="font-extrabold text-xl text-gray-800">{post.user}</h4>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-4 h-4 text-emerald-600"/> {post.location}
                        </p>
                        </div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium mt-1">{post.time}</span>
                  </div>
                  
                  <div className="p-6 pt-4">
                    <p className="text-gray-700 mb-4 text-base">{post.text}</p>
                    
                    {/* Image/Media Area */}
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-80 rounded-2xl mb-5 object-cover shadow-lg border border-gray-100"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/e5e7eb/6b7280?text=Image+Unavailable" }}
                    />
                    
                    {/* Interaction Bar */}
                    <div className="flex items-center justify-start text-gray-600 text-sm border-b pb-4 mb-4">
                      <div className="flex items-center gap-8">
                        {/* Like Button */}
                        <button className="flex items-center text-red-500 font-semibold hover:text-red-700 transition-transform transform hover:scale-105">
                            <Heart className="w-5 h-5 mr-1 fill-red-500"/> {post.likes} Likes
                        </button>
                        {/* Comment Count */}
                        <span className="flex items-center text-blue-500 font-semibold">
                            <MessageCircle className="w-5 h-5 mr-1"/> {post.comments} Comments
                        </span>
                      </div>
                    </div>
                    
                    {/* Comment Input */}
                    <CommentInput postId={post.id} />
                  </div>
                </div>
              )) : (
                <div className="text-center text-gray-500 italic p-12 bg-white rounded-xl shadow-md">No posts found for "{searchQuery}"</div>
              )}
            </div>
            {/* Render the modal */}
            <PostModal /> 
          </div>
        );
      case 'handicrafts':
        const rupeeSymbol = '₹'; // Defining the symbol
        return (
          <div className="space-y-8">
            <h2 className={headerStyle}>Local Handicrafts & Souvenirs</h2>
            <p className={subheaderStyle}>Support local artisans. Discover authentic Dokra art, Paitkar paintings, and bamboo crafts.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className={`${cardStyle} p-4 text-center`}>
                <ShoppingCart className="w-8 h-8 text-amber-600 mb-3 mx-auto"/>
                <img src="https://placehold.co/300x200/fef3c7/b45309?text=Dokra+Art" alt="Dokra Art" className="w-full h-40 object-cover rounded-xl mb-3"/>
                <h3 className="text-xl font-bold text-gray-800">Dokra Metal Craft</h3>
                <p className="text-sm text-gray-600 mb-3">Traditional metal casting by tribal communities.</p>
                {/* Converted $45 to ₹3,600 */}
                <button className="w-full bg-amber-600 text-white py-2 rounded-xl font-semibold hover:bg-amber-700 transition-colors transform hover:scale-[1.01] shadow-md">Add to Cart ({rupeeSymbol} 3,600)</button>
              </div>
              {/* Item 2 */}
              <div className={`${cardStyle} p-4 text-center`}>
                <ShoppingCart className="w-8 h-8 text-amber-600 mb-3 mx-auto"/>
                <img src="https://placehold.co/300x200/fef3c7/b45309?text=Paitkar+Painting" alt="Paitkar Painting" className="w-full h-40 object-cover rounded-xl mb-3"/>
                <h3 className="text-xl font-bold text-gray-800">Paitkar Scroll Painting</h3>
                <p className="text-sm text-gray-600 mb-3">Ancient scroll paintings depicting folklore and life.</p>
                {/* Converted $60 to ₹4,800 */}
                <button className="w-full bg-amber-600 text-white py-2 rounded-xl font-semibold hover:bg-amber-700 transition-colors transform hover:scale-[1.01] shadow-md">Add to Cart ({rupeeSymbol} 4,800)</button>
              </div>
              {/* Item 3 */}
              <div className={`${cardStyle} p-4 text-center`}>
                <ShoppingCart className="w-8 h-8 text-amber-600 mb-3 mx-auto"/>
                <img src="https://placehold.co/300x200/fef3c7/b45309?text=Bamboo+Craft" alt="Bamboo Craft" className="w-full h-40 object-cover rounded-xl mb-3"/>
                <h3 className="text-xl font-bold text-gray-800">Bamboo/Cane Products</h3>
                <p className="text-sm text-gray-600 mb-3">Eco-friendly utility and decorative items.</p>
                {/* Converted $20 to ₹1,600 */}
                <button className="w-full bg-amber-600 text-white py-2 rounded-xl font-semibold hover:bg-amber-700 transition-colors transform hover:scale-[1.01] shadow-md">Add to Cart ({rupeeSymbol} 1,600)</button>
              </div>
            </div>
          </div>
        );
      case 'hotel':
        return (
          <div className="space-y-8">
            <h2 className={headerStyle}>Book Your Stay</h2>
            <p className={subheaderStyle}>Find and reserve verified, comfortable accommodations.</p>
            <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input type="text" placeholder="Destination (e.g., Ranchi)" className="p-3 border rounded-xl focus:ring-emerald-500 focus:border-emerald-500"/>
                <input type="date" placeholder="Check-in Date" className="p-3 border rounded-xl focus:ring-emerald-500 focus:border-emerald-500"/>
                <input type="date" placeholder="Check-out Date" className="p-3 border rounded-xl focus:ring-emerald-500 focus:border-emerald-500"/>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors transform hover:scale-[1.01] shadow-md flex items-center justify-center gap-2">
                <Search className="w-5 h-5"/> Search Hotels
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${cardStyle} p-5`}>
                    <h3 className="text-xl font-bold text-blue-800">Hotel Green Valley</h3>
                    <p className="text-sm text-gray-600 mb-3">Luxury stay near Ranchi's main attractions.</p>
                    <div className="flex justify-between items-center">
                        {/* Converted $85 to ₹6,800 */}
                        <span className="font-bold text-lg text-green-600">₹ 6,800 / night</span>
                        <button className="bg-emerald-600 text-white py-2 px-4 rounded-xl text-sm hover:bg-emerald-700">Book Now</button>
                    </div>
                </div>
                <div className={`${cardStyle} p-5`}>
                    <h3 className="text-xl font-bold text-blue-800">Heritage Homestay, Netarhat</h3>
                    <p className="text-sm text-gray-600 mb-3">Cozy, nature-centric stay with sunrise view.</p>
                    <div className="flex justify-between items-center">
                        {/* Converted $50 to ₹4,000 */}
                        <span className="font-bold text-lg text-green-600">₹ 4,000 / night</span>
                        <button className="bg-emerald-600 text-white py-2 px-4 rounded-xl text-sm hover:bg-emerald-700">Book Now</button>
                    </div>
                </div>
            </div>
          </div>
        );
      case 'guide':
        return (
          <div className="space-y-8">
            <h2 className={headerStyle}>Hire a Certified Local Guide</h2>
            <p className={subheaderStyle}>Connect with knowledgeable guides for an authentic and safe experience.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Guide 1 */}
              <div className={`${cardStyle} flex items-start gap-4`}>
                <UserCheck className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1"/>
                <div>
                    <h3 className="text-xl font-bold text-gray-800">Mr. Alok Singh (Ranchi Specialist)</h3>
                    <p className="text-sm text-gray-600 mb-3">Expert in history, waterfalls, and local tribal culture. 5+ years experience.</p>
                    <div className="flex justify-between items-center">
                        {/* Converted $30 to ₹2,400 */}
                        <span className="font-bold text-lg text-purple-600">₹ 2,400 / day</span>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-xl text-sm hover:bg-purple-700 transition-colors">Hire Guide</button>
                    </div>
                </div>
              </div>
              {/* Guide 2 */}
              <div className={`${cardStyle} flex items-start gap-4`}>
                <UserCheck className="w-10 h-10 text-purple-600 flex-shrink-0 mt-1"/>
                <div>
                    <h3 className="text-xl font-bold text-gray-800">Ms. Sanjana Kumari (Wildlife Expert)</h3>
                    <p className="text-sm text-gray-600 mb-3">Certified guide for Betla and Dalma National Parks. Specializes in bird watching.</p>
                    <div className="flex justify-between items-center">
                        {/* Converted $45 to ₹3,600 */}
                        <span className="font-bold text-lg text-purple-600">₹ 3,600 / day</span>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-xl text-sm hover:bg-purple-700 transition-colors">Hire Guide</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'arvr':
        return (
          <div className="space-y-8">
            <h2 className={headerStyle}>Immersive AR/VR Experiences</h2>
            <p className={subheaderStyle}>Step into the future of travel. Experience destinations virtually before you visit.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* AR Guide Simulation */}
              <div className={`${cardStyle} bg-gradient-to-tr from-emerald-50 to-teal-100`}>
                <div className="flex items-center gap-4 mb-4">
                  <Camera className="w-10 h-10 text-emerald-600 p-2 bg-emerald-100 rounded-full"/>
                  <h3 className="text-2xl font-bold text-gray-800">Augmented Reality Guide</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Point your phone camera at historical sites like Jagannath Temple, Ranchi, and instantly view digital overlays providing
                  <span className="font-semibold text-emerald-700"> real-time information, 3D reconstructions, and narrated history.</span>
                  This enhances your on-site educational experience.
                </p>
                <div className="bg-emerald-50 p-4 rounded-xl text-sm text-emerald-800 border-l-4 border-emerald-400">
                  <p className="font-semibold">Simulated AR View:</p>
                  <p>Historical data appears over the landmark. Try it at the iconic Sun Temple!</p>
                </div>
                <button className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors transform hover:scale-[1.01] shadow-md">
                  <Globe className="w-5 h-5"/> Launch AR Mode (Mock)
                </button>
              </div>

              {/* VR Tour Simulation */}
              <div className={`${cardStyle} bg-gradient-to-tr from-blue-50 to-indigo-100`}>
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-10 h-10 text-blue-600 p-2 bg-blue-100 rounded-full"/>
                  <h3 className="text-2xl font-bold text-gray-800">Virtual Reality 360&deg; Tour</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Dive into a fully immersive, 360-degree environment of stunning natural locations like Netarhat's Magnolia Point or Betla National Park.
                  <span className="font-semibold text-blue-700"> Plan your trip better by previewing the destination up close.</span>
                </p>
                <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 border-l-4 border-blue-400">
                  <p className="font-semibold">Simulated VR Experience:</p>
                  <p>Full panorama views of the stunning Netarhat sunrise, accessible with a VR headset or phone motion.</p>
                </div>
                <button className="mt-12 w-full bg-blue-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors transform hover:scale-[1.01] shadow-md">
                  <Camera className="w-5 h-5"/> Start VR Tour (Mock)
                </button>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-emerald-900 text-white rounded-3xl shadow-2xl">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><MapPin/> Focus for SIH: Jharkhand Heritage</h4>
                <p className="text-sm text-emerald-200">
                  Our AR/VR focus is on preserving and presenting the rich, often overlooked, heritage sites of Jharkhand, providing both tourists and locals with a deeper connection to their culture.
                </p>
            </div>
          </div>
        );
      case 'chatbot':
        return (
          <div className="text-center p-12 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl space-y-4">
            <MessageSquare className="w-16 h-16 mx-auto text-emerald-600"/>
            <h2 className={headerStyle}>AI Chatbot Assistant</h2>
            <p className={subheaderStyle}>Your personalized travel guide for instant answers.</p>
            <p className="text-gray-700">
              This section would link to the dedicated AI Chatbot page where you can ask questions about weather, routes, local customs, and more.
            </p>
            <button className="bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-105 shadow-md" onClick={() => {
              setActiveSection('chatbot')
              navigate('/chatbot')
            }}>Go to Chatbot (Simulated)</button>
          </div>
        );
      case 'itinerary':
        return (
          <div className="text-center p-12 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl space-y-4">
            <Compass className="w-16 h-16 mx-auto text-emerald-600"/>
            <h2 className={headerStyle}>Itinerary Planning</h2>
            <p className={subheaderStyle}>Create and optimize your perfect trip plan.</p>
            <p className="text-gray-700">
              This section is for building multi-day travel plans, setting budgets, and organizing reservations.
            </p>
            <button className="bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-105 shadow-md" onClick={() => {
              setActiveSection('itinerary')
              navigate('/itinerary-planner')
            }

            }>Go to Planner (Simulated)</button>
          </div>
        );
        case 'currentplan':
        return (
          <div className="text-center p-12 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl space-y-4">
            <Map className="w-16 h-16 mx-auto text-emerald-600"/>
            <h2 className={headerStyle}>My Current Travel Plan</h2>
            <p className={subheaderStyle}>View and manage your active trip details.</p>
            <p className="text-gray-700">
              Check out your current itinerary, including booked packages, accommodation details, and next steps for your ongoing journey.
            </p>
            <button className="bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors transform hover:scale-105 shadow-md" onClick={() => setActiveSection('currentplan')}>View Details (Simulated)</button>
          </div>
        );
        
      default: return null;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .sidebar-link {
            transition: all 0.2s ease-in-out;
        }
        .sidebar-link:hover {
            transform: translateX(4px);
        }
      `}</style>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 bg-emerald-900 text-white p-6 md:p-8 space-y-4 shadow-2xl h-screen fixed top-0 left-0">
  <div className="text-2xl font-bold text-green-600">
    JharkhandTravel
  </div>
  <nav className="space-y-3">
    {/* Navigation Links */}
    {[
      { id: 'currentplan', label: 'Current Plan', Icon: Map },
      { id: 'packages', label: 'Packages', Icon: Package },
      { id: 'social', label: 'Go Social', Icon: Users },
      { id: 'arvr', label: 'AR/VR Experience', Icon: Globe },
      { id: 'chatbot', label: 'AI Chatbot', Icon: MessageSquare },
      { id: 'itinerary', label: 'Itinerary Planning', Icon: Compass },
      { id: 'handicrafts', label: 'Handicrafts', Icon: ShoppingCart },
      { id: 'hotel', label: 'Book Hotel', Icon: Hotel },
      { id: 'guide', label: 'Hire Guide', Icon: UserCheck },
    ].map(({ id, label, Icon }) => (
      <a 
        key={id} 
        href="#" 
        onClick={(e) => { e.preventDefault(); setActiveSection(id); }} 
        className={`flex items-center gap-3 p-4 rounded-xl transition-all sidebar-link text-lg
          ${activeSection === id 
            ? 'bg-emerald-700 font-bold shadow-lg text-white' 
            : 'hover:bg-emerald-800 text-emerald-100 hover:text-white'
          }`}
      >
        <Icon className="w-5 h-5" /> {label}
      </a>
    ))}
  </nav>
</aside>

        {/* Main Content Area */}
        <main className="flex-grow p-6 md:p-12 overflow-y-auto ml-64">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default App;
