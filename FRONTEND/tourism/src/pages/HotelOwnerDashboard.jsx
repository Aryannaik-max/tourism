import React, { useState } from 'react';
import { Briefcase, Hotel, TrendingUp, DollarSign, Users, Image as ImageIcon, PlusCircle, Trash2, Edit2, BarChart2 } from 'lucide-react';

// --- Sub-components for different dashboard sections ---

const ProfileManagement = ({ hotelData, setHotelData, handleUpdateProfile }) => (
  <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
      <Hotel className="w-6 h-6 text-emerald-600"/> My Hotel Profile
    </h2>
    <form onSubmit={handleUpdateProfile} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Hotel Name</label>
          <input type="text" value={hotelData.name} onChange={(e) => setHotelData({...hotelData, name: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Star Rating</label>
          <select value={hotelData.starRating} onChange={(e) => setHotelData({...hotelData, starRating: e.target.value})} className="mt-1 w-full p-2 border rounded-md">
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea value={hotelData.description} onChange={(e) => setHotelData({...hotelData, description: e.target.value})} className="mt-1 w-full p-2 border rounded-md" rows="3"></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Amenities</label>
          <input type="text" value={hotelData.amenities} onChange={(e) => setHotelData({...hotelData, amenities: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" value={hotelData.location} onChange={(e) => setHotelData({...hotelData, location: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Total Rooms</label>
          <input type="number" value={hotelData.totalRooms} onChange={(e) => setHotelData({...hotelData, totalRooms: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Available Rooms</label>
          <input type="number" value={hotelData.availableRooms} onChange={(e) => setHotelData({...hotelData, availableRooms: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in Time</label>
          <input type="time" value={hotelData.checkInTime} onChange={(e) => setHotelData({...hotelData, checkInTime: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out Time</label>
          <input type="time" value={hotelData.checkOutTime} onChange={(e) => setHotelData({...hotelData, checkOutTime: e.target.value})} className="mt-1 w-full p-2 border rounded-md" />
        </div>
      </div>
      <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors">Update Profile</button>
    </form>
  </div>
);

const RoomsManagement = ({ hotelData, setHotelData }) => {
  const [newRoom, setNewRoom] = useState({ name: '', price: '', image: null });
  const [editingRoomId, setEditingRoomId] = useState(null);

  const handleAddRoom = (e) => {
    e.preventDefault();
    if (!newRoom.name || !newRoom.price || !newRoom.image) {
      console.error('Please fill out all room details and upload an image.');
      return;
    }
    const newRoomEntry = {
      id: Date.now(),
      name: newRoom.name,
      price: newRoom.price,
      imageUrl: URL.createObjectURL(newRoom.image),
    };
    setHotelData(prevData => ({
      ...prevData,
      rooms: [...prevData.rooms, newRoomEntry]
    }));
    setNewRoom({ name: '', price: '', image: null });
  };
  
  const handleRemoveRoom = (roomId) => {
    setHotelData(prevData => ({
      ...prevData,
      rooms: prevData.rooms.filter(room => room.id !== roomId)
    }));
  };

  const handleEditRoom = (room) => {
    setEditingRoomId(room.id);
    setNewRoom({ name: room.name, price: room.price, image: null });
  };
  
  const handleUpdateRoom = (e) => {
    e.preventDefault();
    setHotelData(prevData => ({
      ...prevData,
      rooms: prevData.rooms.map(room => 
        room.id === editingRoomId ? { ...room, name: newRoom.name, price: newRoom.price, imageUrl: newRoom.image ? URL.createObjectURL(newRoom.image) : room.imageUrl } : room
      )
    }));
    setEditingRoomId(null);
    setNewRoom({ name: '', price: '', image: null });
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <ImageIcon className="w-6 h-6 text-emerald-600"/> Manage Rooms & Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <form onSubmit={editingRoomId ? handleUpdateRoom : handleAddRoom} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Room Name/Number</label>
              <input type="text" value={newRoom.name} onChange={(e) => setNewRoom({...newRoom, name: e.target.value})} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., Suite 101" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price per Night ($)</label>
              <input type="number" value={newRoom.price} onChange={(e) => setNewRoom({...newRoom, price: e.target.value})} className="mt-1 w-full p-2 border rounded-md" placeholder="e.g., 150" required/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Room Image</label>
              <input type="file" onChange={(e) => setNewRoom({...newRoom, image: e.target.files[0]})} className="mt-1 w-full p-2 border rounded-md" />
            </div>
            <button type="submit" className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
              {editingRoomId ? (
                <>
                  <Edit2 className="w-5 h-5"/> Update Room
                </>
              ) : (
                <>
                  <PlusCircle className="w-5 h-5"/> Add Room
                </>
              )}
            </button>
            {editingRoomId && (
              <button type="button" onClick={() => setEditingRoomId(null)} className="w-full bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors">
                Cancel
              </button>
            )}
          </form>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Room Listings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {hotelData.rooms.map((room) => (
                  <tr key={room.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <img src={room.imageUrl} alt={room.name} className="w-12 h-12 object-cover rounded-md"/>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{room.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${room.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex gap-2">
                        <button onClick={() => handleEditRoom(room)} className="text-emerald-600 hover:text-emerald-800">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleRemoveRoom(room.id)} className="text-red-600 hover:text-red-800">
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

const BookingsView = ({ hotelData, setHotelData }) => {
  const handleStatusChange = (bookingId, newStatus) => {
    setHotelData(prevData => ({
      ...prevData,
      bookings: prevData.bookings.map(booking => 
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    }));
  };
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <Briefcase className="w-6 h-6 text-emerald-600"/> Recent Bookings
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hotelData.bookings.map((booking, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.guestName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.checkInDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <select
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    className="p-1 border rounded-md text-sm"
                  >
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AnalyticsView = () => (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
        <BarChart2 className="w-6 h-6 text-emerald-600"/> Analytics
      </h2>
      <p className="text-gray-600">
        This section would show real-time graphs and charts of your hotel's performance.
      </p>
      <div className="mt-4 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center text-gray-400">
        <BarChart2 className="mx-auto w-16 h-16 mb-4" />
        <p>Analytics are a placeholder for a future feature.</p>
      </div>
    </div>
);


// --- Main Hotel Owner Dashboard Component ---
const HotelOwnerDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const [hotelData, setHotelData] = useState({
    name: 'Luxury Oasis Hotel',
    description: 'A stunning hotel with a serene ambiance and top-tier amenities, perfect for a relaxing getaway.',
    location: 'Ranchi',
    amenities: 'Wi-Fi, AC, Swimming Pool, Parking, Restaurant',
    totalRooms: 50,
    availableRooms: 35,
    starRating: '4',
    checkInTime: '14:00',
    checkOutTime: '11:00',
    bookings: [
      { id: 'BK12345', guestName: 'John Doe', checkInDate: '2024-06-15', status: 'Confirmed' },
      { id: 'BK12346', guestName: 'Jane Smith', checkInDate: '2024-06-18', status: 'Pending' },
      { id: 'BK12347', guestName: 'Sam Wilson', checkInDate: '2024-06-20', status: 'Confirmed' },
    ],
    rooms: [
      { id: 1, name: 'Deluxe Suite', price: 150, imageUrl: 'https://placehold.co/100x100/E5E7EB/4B5563?text=Room+1' },
      { id: 2, name: 'Standard Room', price: 90, imageUrl: 'https://placehold.co/100x100/E5E7EB/4B5563?text=Room+2' },
    ]
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log('Profile update requested:', hotelData);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileManagement hotelData={hotelData} setHotelData={setHotelData} handleUpdateProfile={handleUpdateProfile} />;
      case 'rooms':
        return <RoomsManagement hotelData={hotelData} setHotelData={setHotelData} />;
      case 'bookings':
        return <BookingsView hotelData={hotelData} setHotelData={setHotelData} />;
      case 'analytics':
        return <AnalyticsView />;
      default:
        return <ProfileManagement hotelData={hotelData} setHotelData={setHotelData} handleUpdateProfile={handleUpdateProfile} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white/80 backdrop-blur-md text-gray-900 p-6 md:p-8 space-y-4 shadow-xl">
          <div className="text-2xl font-bold text-emerald-600 mb-8">
            Hotel Owner
          </div>
          <nav className="space-y-2">
            <button onClick={() => setActiveSection('profile')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'profile' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <Hotel className="w-5 h-5" /> Profile
            </button>
            <button onClick={() => setActiveSection('rooms')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'rooms' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <ImageIcon className="w-5 h-5" /> Rooms & Pricing
            </button>
            <button onClick={() => setActiveSection('bookings')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'bookings' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <Briefcase className="w-5 h-5" /> Bookings
            </button>
            <button onClick={() => setActiveSection('analytics')} className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-colors ${activeSection === 'analytics' ? 'bg-emerald-100 font-bold text-emerald-800' : 'hover:bg-emerald-50'}`}>
              <BarChart2 className="w-5 h-5" /> Analytics
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 md:p-12">
          <div className="container mx-auto">
            {/* Key Metrics - This section remains visible on every page */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20 text-center">
                <TrendingUp className="mx-auto w-12 h-12 text-emerald-500 mb-4"/>
                <h3 className="text-2xl font-bold text-gray-800">Total Bookings</h3>
                <p className="text-4xl font-extrabold text-emerald-600">{hotelData.bookings.length}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20 text-center">
                <DollarSign className="mx-auto w-12 h-12 text-teal-500 mb-4"/>
                <h3 className="text-2xl font-bold text-gray-800">Available Rooms</h3>
                <p className="text-4xl font-extrabold text-teal-600">{hotelData.availableRooms}</p>
                <p className="text-sm text-gray-500">of {hotelData.totalRooms}</p>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 border border-white/20 text-center">
                <Users className="mx-auto w-12 h-12 text-green-500 mb-4"/>
                <h3 className="text-2xl font-bold text-gray-800">New Guests</h3>
                <p className="text-4xl font-extrabold text-green-600">87</p>
                <p className="text-sm text-gray-500">last week (mock data)</p>
              </div>
            </div>
            
            {/* Render active section */}
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HotelOwnerDashboard;
