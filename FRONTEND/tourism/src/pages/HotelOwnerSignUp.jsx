import React, { useState } from 'react';
import { Building, Mail, Phone, MapPin, FileText, Upload, CreditCard, Shield } from 'lucide-react';

const HotelOwnerSignupPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    panNumber: '',
    gstNumber: '',
    businessNumber: '',
    businessEmail: '',
    businessAddress: '',
    businessLicenseUrl: '',
    panCardUrl: '',
    propertyDocumentUrl: ''
  });

  const [files, setFiles] = useState({
    businessLicense: null,
    panCard: null,
    propertyDocument: null
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
      // In a real app, you would upload the file and get a URL
      const fakeUrl = `https://example.com/uploads/${file.name}`;
      setFormData(prev => ({
        ...prev,
        [`${fileType}Url`]: fakeUrl
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hotel owner signup data:', formData);
    console.log('Files:', files);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Join as a Hotel Owner</h1>
            <p className="text-lg text-gray-600">Showcase your property and welcome travelers from around the world</p>
          </div>

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="space-y-8">
              {/* Business Information Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <Building className="w-6 h-6 text-emerald-600" />
                  Business Information
                </h2>
                
                {/* Business Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                  <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      placeholder="Your Hotel/Property Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* PAN Number */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number</label>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                        placeholder="ABCDE1234F"
                        required
                      />
                    </div>
                  </div>

                  {/* GST Number */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="gstNumber"
                        value={formData.gstNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                        placeholder="22AAAAA0000A1Z5"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-emerald-600" />
                  Contact Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Business Phone */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Phone</label>
                    <div className="flex items-center space-x-2">
                      <Phone className=" w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="businessNumber"
                        value={formData.businessNumber}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  {/* Business Email */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70"
                        placeholder="business@hotel.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Business Address */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                  <div className="flex  space-x-2">
                    <MapPin className="w-5 mt-3 h-5 text-gray-400" />
                    <textarea
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white/70 resize-none"
                      placeholder="Complete business address with city, state, and postal code"
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
                  {/* Business License */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business License</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors duration-200 bg-white/50">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload License</p>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'businessLicense')}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {files.businessLicense && (
                        <p className="text-xs text-emerald-600 font-medium">{files.businessLicense.name}</p>
                      )}
                    </div>
                  </div>

                  {/* PAN Card */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">PAN Card</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors duration-200 bg-white/50">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload PAN</p>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'panCard')}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {files.panCard && (
                        <p className="text-xs text-emerald-600 font-medium">{files.panCard.name}</p>
                      )}
                    </div>
                  </div>

                  {/* Property Document */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Document</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors duration-200 bg-white/50">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload Document</p>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'propertyDocument')}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {files.propertyDocument && (
                        <p className="text-xs text-emerald-600 font-medium">{files.propertyDocument.name}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                >
                  Register Your Business
                </button>
              </div>
            </div>
          </div>

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

export default HotelOwnerSignupPage;