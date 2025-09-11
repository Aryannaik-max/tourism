import React from 'react';

// Mock components - replace with your actual components
const YouTubeCarousel = () => (
  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/30 shadow-inner">
    <div className="text-gray-600 text-lg">YouTube Carousel Component</div>
    <div className="text-gray-500 text-sm mt-2">Replace with your actual YouTube carousel</div>
  </div>
);

const Map = () => (
  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/30 shadow-inner">
    <div className="text-gray-600 text-lg">Interactive Map Component</div>
    <div className="text-gray-500 text-sm mt-2">Replace with your actual map component</div>
  </div>
);

const ExploreTransport = () => (
  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/30 shadow-inner">
    <div className="text-gray-600 text-lg">Transport Explorer Component</div>
    <div className="text-gray-500 text-sm mt-2">Replace with your actual transport component</div>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description, gradient }) => (
  <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
    {/* Animated background glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} blur-xl`}></div>
    </div>
        
    <div className="relative z-10">
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  </div>
);

// Stat Card Component
const StatCard = ({ number, label, icon, gradient }) => (
  <div className="text-center group p-4">
    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${gradient} rounded-3xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
      {icon}
    </div>
    <div className="text-4xl font-extrabold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
      {number}
    </div>
    <div className="text-emerald-200 font-medium group-hover:text-white transition-colors duration-300">
      {label}
    </div>
  </div>
);

const App = () => {
  return (
    <main className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 min-h-screen font-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-tr from-teal-200/30 to-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-green-200/20 to-emerald-200/15 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center text-center text-white overflow-hidden p-4 sm:p-6 md:p-8">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
             backgroundImage: "url('https://source.unsplash.com/1600x900/?jharkhand,india,travel')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-800/70 to-teal-900/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
        </div>
                
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="text-emerald-200 font-medium">Jharkhand, India</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
              Discover the
            </span>
            <br />
            <span className="text-white">Undiscovered</span>
          </h1>
                    
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-12 text-emerald-100 leading-relaxed max-w-4xl mx-auto">
            Experience the soul of India in Jharkhand, a land of enchanting landscapes, 
            rich culture, and vibrant traditions waiting to be explored.
          </p>
                    
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2">
              <svg className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Explore Now
            </button>
                        
            <button className="group inline-flex items-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Virtual Tour
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-20 mt-16 px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard 
                number="50+" 
                label="Destinations" 
                icon={<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>}
                gradient="from-emerald-500 to-green-600"
              />
              <StatCard 
                number="1000+" 
                label="Happy Travelers"
                icon={<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                </svg>}
                gradient="from-green-500 to-teal-600"
              />
              <StatCard 
                number="25+" 
                label="Waterfalls" 
                icon={<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>}
                gradient="from-teal-500 to-emerald-600"
              />
              <StatCard 
                number="15+" 
                label="National Parks"
                icon={<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>}
                gradient="from-emerald-600 to-green-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Tools Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>
              <span className="text-emerald-200 font-medium">Smart Tourism</span>
            </div>
                        
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Digital Tools for Your{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge technology to make your travel experience seamless and unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>}
              title="AI-Powered Itineraries"
              description="Get personalized travel plans crafted by artificial intelligence, tailored specifically to your interests and preferences."
              gradient="from-emerald-500 to-green-600"
            />
            <FeatureCard
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
              </svg>}
              title="Multilingual Support"
              description="Communicate effortlessly with our intelligent chatbot that speaks your language and understands local dialects."
              gradient="from-green-500 to-teal-600"
            />
            <FeatureCard
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              </svg>}
              title="Smart Navigation"
              description="Navigate with precision using our interactive maps featuring real-time updates and geo-location services."
              gradient="from-teal-500 to-emerald-600"
            />
            <FeatureCard
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>}
              title="Cultural Marketplace"
              description="Discover authentic tribal handicrafts, book unique experiences, and support local artisans directly."
              gradient="from-emerald-600 to-green-700"
            />
            <FeatureCard
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg>}
              title="Smart Feedback"
              description="Help us enhance your experience through AI-driven sentiment analysis and intelligent recommendations."
              gradient="from-green-600 to-teal-700"
            />
            <FeatureCard
              icon={<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>}
              title="Tourism Analytics"
              description="Access comprehensive dashboards with real-time insights for tourism officials and stakeholders."
              gradient="from-teal-600 to-emerald-700"
            />
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full border border-emerald-200 mb-8">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
              </svg>
              <span className="text-emerald-700 font-medium">Visual Stories</span>
            </div>
                        
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Journey Through{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Jharkhand
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in breathtaking visuals that showcase the natural beauty and cultural richness of our land
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <YouTubeCarousel />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-32 bg-gradient-to-br from-white via-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200 mb-8">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h6m2 5H7a2 2 0 01-2-2V9a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span className="text-green-700 font-medium">Explore Destinations</span>
            </div>
                        
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Find Your Next{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Adventure
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover hidden gems, popular attractions, and off-the-beaten-path experiences across Jharkhand
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <Map />
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full border border-emerald-200 mb-8">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
              </svg>
              <span className="text-emerald-700 font-medium">Smart Mobility</span>
            </div>
                        
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              Seamless Travel &{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Transport
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Navigate Jharkhand with ease using our integrated transport solutions and real-time travel information
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <ExploreTransport />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Explore{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Jharkhand?
              </span>
            </h2>
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              Join thousands of travelers who have discovered the magic of Jharkhand. 
              Your adventure begins with a single click.
            </p>
                        
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-offset-2">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
