import React, { useState } from 'react';
import { UserPlus, Mail, Phone, MapPin, FileText, Upload, IdCard, Shield, User, Landmark, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Guide Sign-up Page Component ---
const GuideSignupPage = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    bio: '',
    location: '',
  });

  const [files, setFiles] = useState({
    idCard: null,
    guideLicense: null,
    proofOfAddress: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0];
    if (file) {
      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guide signup data:', formData);
    console.log('Files:', files);
    onSignupSuccess(formData);
    navigate('/guide/dashboard');
  };

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Join as a Local Guide</h1>
            <p className="text-lg text-gray-600">Share your local knowledge and passion with travelers</p>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <div className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <User className="w-6 h-6 text-emerald-600" />
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <div className="flex items-center relative">
                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
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
                      <div className="flex items-center relative">
                        <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="flex items-center relative">
                        <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                    </div>
                    {/* Specialization */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                      <div className="flex items-center relative">
                        <Tag className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                          placeholder="e.g., Trekking, Cultural Tours"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <div className="flex items-center relative">
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70 resize-none"
                        placeholder="Tell us about yourself and your experience"
                        required
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="flex items-center relative">
                      <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                        placeholder="e.g., Ranchi"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Document Upload Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-emerald-600" />
                    Required Documents
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* ID Card */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">ID Card (Aadhar/PAN)</label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors duration-200 bg-white/50">
                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload File</p>
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, 'idCard')}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {files.idCard && (
                          <p className="text-xs text-emerald-600 font-medium">{files.idCard.name}</p>
                        )}
                      </div>
                    </div>

                    {/* Guide License */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tour Guide License</label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors duration-200 bg-white/50">
                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload File</p>
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, 'guideLicense')}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {files.guideLicense && (
                          <p className="text-xs text-emerald-600 font-medium">{files.guideLicense.name}</p>
                        )}
                      </div>
                    </div>

                    {/* Proof of Address */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Proof of Address</label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors duration-200 bg-white/50">
                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload File</p>
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, 'proofOfAddress')}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {files.proofOfAddress && (
                          <p className="text-xs text-emerald-600 font-medium">{files.proofOfAddress.name}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                  >
                    Create My Guide Profile
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

// --- App Container Component (manages views) ---
const App = () => {
  const [showSignup, setShowSignup] = useState(true);

  const handleSignupSuccess = (data) => {
    // In a real application, you would handle backend submission here
    console.log('Sign-up successful, switching to dashboard...');
    setShowSignup(false);
  };

  const GuideDashboardPlaceholder = () => (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-center p-8">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard!</h1>
        <p className="text-lg text-gray-600">Your guide profile has been created successfully.</p>
        <p className="text-gray-500 mt-2">This is a placeholder for your future dashboard.</p>
        <button onClick={() => setShowSignup(true)} className="mt-6 bg-emerald-500 text-white py-2 px-6 rounded-full hover:bg-emerald-600 transition-colors">
          Go Back to Sign Up
        </button>
      </div>
    </div>
  );

  return showSignup ? <GuideSignupPage onSignupSuccess={handleSignupSuccess} /> : <GuideDashboardPlaceholder />;
};

export default App;
