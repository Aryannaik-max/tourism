import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Heart, Globe, Languages } from 'lucide-react';

const TouristSignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    preferredDestinations: '',
    interest: '',
    nationality: '',
    preferredLanguage: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tourist signup data:', formData);
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Join as a Tourist</h1>
            <p className="text-lg text-gray-600">Discover amazing destinations and create unforgettable memories</p>
          </div>

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="space-y-6">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <User className="w-6 h-6 text-green-600" />
                  Personal Information
                </h2>
                
                {/* Name Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="flex items-center space-x-3 ">
                    <Mail className="h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="flex items-center space-x-3">
                    <Phone className=" h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Travel Preferences Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-green-600" />
                  Travel Preferences
                </h2>

                {/* Preferred Destinations */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Destinations</label>
                  <div className="flex items-start  border- space-x-3">
                    <MapPin className=" w-5 mt-3 h-5  text-gray-400" />
                    <textarea
                      name="preferredDestinations"
                      value={formData.preferredDestinations}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70 resize-none"
                      placeholder="Beach destinations, Mountains, Historical sites..."
                    />
                  </div>
                </div>

                {/* Interests */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                  <div className="flex items-start  border- space-x-3">
                    <Heart className=" w-5 mt-3 h-5  text-gray-400" />
                    <textarea
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70 resize-none"
                      placeholder="Photography, Adventure sports, Cultural experiences..."
                      required
                    />
                  </div>
                </div>

                {/* Nationality */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                  <div className="space-x-2 flex items-center">
                    <Globe className="h-5 text-gray-400" />
                    <select
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      required
                    >
                      <option value="">Select your nationality</option>
                      <option value="Indian">Indian</option>
                      <option value="American">American</option>
                      <option value="British">British</option>
                      <option value="Canadian">Canadian</option>
                      <option value="Australian">Australian</option>
                      <option value="German">German</option>
                      <option value="French">French</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Language */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                  <div className="flex items-center space-x-2">
                    <Languages className="h-5 text-gray-400" />
                    <select
                      name="preferredLanguage"
                      value={formData.preferredLanguage}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      required
                    >
                      <option value="">Select preferred language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Arabic">Arabic</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                >
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Already have an account? 
              <button className="ml-1 text-green-600 hover:text-green-700 font-medium">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSignupPage;