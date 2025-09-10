import React, { useState } from 'react';
import { Palette, MapPin, FileText, Upload, Hammer, Star, Package } from 'lucide-react';

const VendorSignupPage = () => {
  const [formData, setFormData] = useState({
    craftSpecialization: '',
    workshopLocation: { city: '' },
    workshopAddress: '',
    artisanCertificationUrl: '',
    identityProofUrl: ''
  });

  const [files, setFiles] = useState({
    artisanCertification: null,
    identityProof: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('location.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        workshopLocation: {
          ...prev.workshopLocation,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
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
    // Convert workshopLocation to JSONB format
    const submitData = {
      ...formData,
      workshopLocation: JSON.stringify(formData.workshopLocation)
    };
    console.log('Vendor signup data:', submitData);
    console.log('Files:', files);
  };

  const craftSpecializations = [
    'Wood Carving',
    'Pottery',
    'Textile Weaving',
    'Metal Work',
    'Jewelry Making',
    'Leather Craft',
    'Stone Carving',
    'Embroidery',
    'Painting',
    'Sculpture',
    'Bamboo Craft',
    'Paper Art',
    'Glass Work',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mb-4">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Join as an Artisan Vendor</h1>
            <p className="text-lg text-gray-600">Share your craftsmanship and connect with art enthusiasts worldwide</p>
          </div>

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="space-y-8">
              {/* Craft Information Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <Hammer className="w-6 h-6 text-orange-600" />
                  Craft Specialization
                </h2>
                
                {/* Craft Specialization */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Craft Specialization</label>
                  <div className="relative">
                    <Palette className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="craftSpecialization"
                      value={formData.craftSpecialization}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      required
                    >
                      <option value="">Select your specialization</option>
                      {craftSpecializations.map((craft) => (
                        <option key={craft} value={craft}>
                          {craft}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Workshop Information Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  Workshop Location
                </h2>

                {/* Workshop Location Fields */}
                {/* Workshop City */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Workshop City</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location.city"
                      value={formData.workshopLocation.city}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/70"
                      placeholder="Enter your city (e.g., Mumbai, Delhi, Bangalore)"
                      required
                    />
                  </div>
                  {/* <p className="text-xs text-gray-500 mt-1">We'll use this to help customers find local artisans</p> */}
                </div>

                {/* Workshop Address */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Workshop Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="workshopAddress"
                      value={formData.workshopAddress}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white/70 resize-none"
                      placeholder="Complete workshop address with street, area, city, and postal code"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-orange-600" />
                  Required Documents
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Artisan Certification */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Artisan Certification</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-orange-400 transition-colors duration-200 bg-white/50">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload Certification</p>
                      <p className="text-xs text-gray-500 mb-2">Craft certification or training certificate</p>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'artisanCertification')}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {files.artisanCertification && (
                        <p className="text-xs text-orange-600 font-medium">{files.artisanCertification.name}</p>
                      )}
                    </div>
                  </div>

                  {/* Identity Proof */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Identity Proof</label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-orange-400 transition-colors duration-200 bg-white/50">
                      <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload ID Proof</p>
                      <p className="text-xs text-gray-500 mb-2">Aadhaar, Passport, or Driving License</p>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'identityProof')}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {files.identityProof && (
                        <p className="text-xs text-orange-600 font-medium">{files.identityProof.name}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Metrics Info */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-500" />
                  Your Journey Starts Here
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Package className="w-8 h-8 text-orange-500 mb-2" />
                    <p className="text-sm font-medium text-gray-700">Products</p>
                    <p className="text-lg font-bold text-orange-600">0</p>
                    <p className="text-xs text-gray-500">Start adding your crafts</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FileText className="w-8 h-8 text-orange-500 mb-2" />
                    <p className="text-sm font-medium text-gray-700">Orders</p>
                    <p className="text-lg font-bold text-orange-600">0</p>
                    <p className="text-xs text-gray-500">Build your customer base</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star className="w-8 h-8 text-orange-500 mb-2" />
                    <p className="text-sm font-medium text-gray-700">Rating</p>
                    <p className="text-lg font-bold text-orange-600">5.0</p>
                    <p className="text-xs text-gray-500">Maintain quality service</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                >
                  Start Your Artisan Journey
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Already have an account? 
              <button className="ml-1 text-orange-600 hover:text-orange-700 font-medium">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignupPage;