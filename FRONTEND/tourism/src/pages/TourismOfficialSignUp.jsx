import React, { useState } from 'react';
import { User, Mail, Phone, Landmark, IdCard, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// This component is for a tourism official to sign up.
// It uses the same styling and state management patterns as the Guide and Tourist pages.

const TourismOfficialSignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    title: '',
    organization: '',
    officialId: '',
    location: ''
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tourism Official signup data:', formData);
    // In a real app, you would submit this data to a backend.
    // For this example, we'll just log it.
    navigate('tourism-official/dashboard');
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
              <Landmark className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Join as a Tourism Official</h1>
            <p className="text-lg text-gray-600">Represent your organization and help regulate the tourism industry</p>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <User className="w-6 h-6 text-emerald-600" />
                    Personal & Organizational Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="flex space-x-3 items-center">
                        <User className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                          placeholder="Your Full Name"
                          required
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <div className="flex space-x-3 items-center">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                          placeholder="your.email@organization.gov"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="flex space-x-3 items-center">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>
                    {/* Official ID */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Official ID Number</label>
                      <div className="flex space-x-3 items-center">
                        <IdCard className="w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="officialId"
                          value={formData.officialId}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                          placeholder="e.g., A1234567"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization Name */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                    <div className="flex space-x-3 items-center">
                      <Landmark className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                        placeholder="e.g., Ministry of Tourism"
                        required
                      />
                    </div>
                  </div>

                  {/* Official Title */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Official Title/Role</label>
                    <div className="flex space-x-3 items-center">
                      <Tag className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                        placeholder="e.g., Regional Tourism Officer"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                  >
                    Join as an Official
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Already have an account? 
              <button className="ml-1 text-emerald-600 hover:text-emerald-700 font-medium">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismOfficialSignupPage;
