import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, MapPin, ShoppingBag, Building, Shield, Mail, Lock, CheckCircle, Eye, EyeOff } from "lucide-react";

const RoleCard = ({ title, description, icon: Icon, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`group relative p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 ease-out flex items-start space-x-4 overflow-hidden
    ${isSelected 
      ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-400 shadow-xl scale-[1.02] ring-2 ring-emerald-200' 
      : 'bg-white/80 backdrop-blur-sm border-gray-200 hover:border-emerald-300 hover:shadow-lg hover:scale-[1.01] hover:bg-white/90'
    }`}
  >
    {/* Animated background glow */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
      ${isSelected ? 'opacity-20' : ''}
    `}>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-green-400/10 blur-xl"></div>
    </div>
    
    <div className={`relative z-10 p-3 rounded-xl transition-all duration-300
      ${isSelected 
        ? 'bg-emerald-500 text-white shadow-lg' 
        : 'bg-gray-100 text-gray-600 group-hover:bg-emerald-100 group-hover:text-emerald-600'
      }`}>
      <Icon size={24} strokeWidth={2} />
    </div>
    
    <div className="relative z-10 flex-1">
      <h3 className={`font-bold text-lg mb-1 transition-colors duration-300
        ${isSelected ? 'text-emerald-700' : 'text-gray-800 group-hover:text-emerald-700'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed transition-colors duration-300
        ${isSelected ? 'text-emerald-600' : 'text-gray-500 group-hover:text-emerald-600'}`}>
        {description}
      </p>
    </div>
    
    {isSelected && (
      <div className="absolute top-4 right-4 text-emerald-500 animate-in zoom-in duration-200">
        <CheckCircle size={20} fill="currentColor" />
      </div>
    )}
  </div>
);

const InputField = ({ label, type = "text", value, onChange, placeholder, required = false, icon: Icon, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;
  
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-gray-700 font-semibold text-sm">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200">
          <Icon size={20} strokeWidth={2} className={isFocused || value ? 'text-emerald-500' : ''} />
        </div>
        <input
          type={inputType}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl bg-gray-50/50 backdrop-blur-sm transition-all duration-300 text-gray-800 placeholder-gray-400
            ${isFocused || value 
              ? 'border-emerald-400 bg-white shadow-md ring-4 ring-emerald-100' 
              : 'border-gray-200 hover:border-gray-300'
            }`}
          required={required}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors duration-200"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

const Signup = () => {
  const [role, setRole] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    if(role=='tourist') {
      navigate('/tourist/signup');
    }else if(role=='shop_owner') {
      navigate('/vendor/signup');
    }else if(role=='hotel_owner') {
      navigate('/hotelowner/signup');
    }
    // setTimeout(() => {
    //   console.log("Form submitted:", { role, email, password });
    //   setIsLoading(false);
    // }, 2000);
  };

  const roles = [
    { 
      id: 'tourist', 
      title: 'Tourist', 
      description: 'Explore breathtaking destinations and create unforgettable memories', 
      icon: User 
    },
    { 
      id: 'guide', 
      title: 'Local Guide', 
      description: 'Share your expertise and help travelers discover hidden gems', 
      icon: MapPin 
    },
    { 
      id: 'shop_owner', 
      title: 'Shop Owner', 
      description: 'Showcase your handicrafts and connect with travelers worldwide', 
      icon: ShoppingBag 
    },
    { 
      id: 'hotel_owner', 
      title: 'Hotel Owner', 
      description: 'Provide comfortable stays and exceptional hospitality', 
      icon: Building 
    },
    { 
      id: 'tourism_official', 
      title: 'Tourism Official', 
      description: 'Manage and promote sustainable tourism development', 
      icon: Shield 
    }
  ];

  const isFormValid = role ;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-emerald-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-2xl border border-white/50 ring-1 ring-gray-200/50">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl text-white font-bold text-2xl mb-6 shadow-lg ring-4 ring-emerald-100">
            JH
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Join JharkhandTravel
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Create your account and start your journey with Jharkhand's finest experiences
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          
          {/* Role Selection */}
          <div>
            <h2 className="text-gray-700 font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              Choose your role
            </h2>
            <div className="grid gap-4">
              {roles.map((r) => (
                <RoleCard
                  key={r.id}
                  title={r.title}
                  description={r.description}
                  icon={r.icon}
                  isSelected={role === r.id}
                  onClick={() => handleRoleSelect(r.id)}
                />
              ))}
            </div>
          </div>

          {/* Form Fields */}
          {/* <div className="space-y-6">
            <InputField
              label="Email Address"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              icon={Mail}
              required
            />

            <InputField
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              icon={Lock}
              required
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 transform
              ${isFormValid && !isLoading
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Creating Account...</span>
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 hover:underline"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;