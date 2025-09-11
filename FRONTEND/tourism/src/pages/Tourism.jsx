const Tourism = () => {
  // Data for the location cards
  const destinations = [
    { title: "Udhwa Lake Bird Sanctuaries", location: "Sahebganj", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_124955.jpg" },
    { title: "Suraj Kund (Hot Spring Water)", location: "Hazaribagh", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_142747.jpg" },
    { title: "Tagore Hill", location: "Ranchi", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_102705.jpg" },
    { title: "Dimna Lake", location: "West Singhbhum", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_132502.jpg" },
    { title: "Hazaribagh National Park", location: "Hazaribagh", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_142321.jpg" },
    { title: "Jubilee Park", location: "West Singhbhum", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_132655.jpg" },
    { title: "Biodiversity Park", location: "Ranchi", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180508_120652.jpg" },
    { title: "Birsa Deer Park, Kalamati", location: "Khunti", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_172304.jpg" },
    { title: "Nandan Pahar", location: "Deoghar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_180226.jpg" },
    { title: "Kamaldah Talab", location: "Latehar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180518_140558.jpg" },
    { title: "Tattapani Hot Water Spring", location: "Latehar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180518_145406.jpg" },
    { title: "Sidhu and Kanhu Park", location: "Ranchi", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180627_162743.jpg" },
    { title: "Birsa Biological Park", location: "Ranchi", image: "https://hblimg.mmtcdn.com/content/hubble/img/ranchi/mmt/activities/m_activities_ranchi_birsa_zoological_park_l_287_573.jpg" },
    { title: "The Naspati Garden", location: "Latehar", image: "https://www.photobank.in/img/preview/1623226005DSC08117.JPG" },
    { title: "Hizla Pahar", location: "Dumka", image: "https://photos.wikimapia.org/p/00/01/45/14/47_big.jpg" },
    { title: "Srishti Pahar", location: "Dumka", image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/2f3f282a9bfcef08e3e93630853f7173_400x400.jpg" },
    { title: "Patratu Dam Boating", location: "Ramgarh", image: "https://entartica.com/wp-content/uploads/2022/12/30.jpg" },
    { title: "Tropic of Cancer", location: "Ramgarh", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_161144.jpg" },
    { title: "Crocodile Park", location: "Ranchi", image: "https://www.dalmawildlife.in/ranchi/images/customs/croc.jpg" },
    { title: "Hargaddi Chokahatu (The Land of Megaliths)", location: "Ranchi", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190627_165609.jpg" },
    { title: "Chuttupalu Valley", location: "Ramgarh", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190701_120213.jpg" },
    { title: "Dalma Wildlife Sanctuary", location: "Saraikela Kharsawan", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_142116.jpg" },
    { title: "Patratu Valley", location: "Ramgarh", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20200929_133548.jpg" },
    { title: "Magnolia Sunset Point", location: "Latehar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20170426_222144.jpg" },
    { title: "Saranda Forest", location: "West Singhbhum", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_131707.jpg" },
    { title: "Betla National Park", location: "Latehar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_171824.jpg" },
    { title: "Khutabandh", location: "Dumka", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_134012.jpg" },
    { title: "Sidhu Kabhi Shaurya Smarak Park", location: "Dumka", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_122313.jpg" },
    { title: "The Forest Guest House", location: "Latehar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_105916.jpg" },
    { title: "Koel View Point", location: "Latehar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180514_161300.jpg" },
    { title: "Sunrise Point", location: "Latehar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20170426_224210.JPG" },
    { title: "Ranchi Lake", location: "Ranchi", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_102232.jpg" },
    { title: "Rock Garden", location: "Ranchi", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_102355.jpg" },
    { title: "Kiriburu", location: "West Singhbhum", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_174351.jpg" },
    { title: "Trikuti", location: "Deoghar", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_130709.jpg" },
    { title: "Topchanchi Lake", location: "Dhanbad", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_125427.jpg" },
    { title: "Khandoli", location: "Giridih", image: "https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_173215.jpg" }
  ];

  // Component for a single location card
  const LocationCard = ({ title, location, image }) => (
    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 mb-1">{title}</h3>
        <p className="text-sm font-medium text-gray-500">{location}</p>
      </div>
    </div>
  );

  return (
    <section className="font-sans text-gray-900">
      
      {/* Banner Section */}
      <div className="relative w-full h-80 sm:h-96 rounded-b-[4rem] overflow-hidden shadow-2xl">
        <img 
          src="https://tourism.jharkhand.gov.in/app-assets/images/EcoTourism.jpg" 
          alt="Eco Tourism Banner" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-800/70 to-teal-900/80 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-green-300">Eco Tourism</h1>
          <h2 className="text-xl md:text-2xl font-light mb-4 text-emerald-100">Let's create sustainable economies for inclusive growth</h2>
          <p className="max-w-3xl text-sm md:text-base text-emerald-200 leading-relaxed">Jharkhand, with a huge forest cover of 33%, has immense scope for eco-tourism. The lush green jungles, perennial waterfalls, diverse terrain, moderate climate, and rich wildlife make it an ideal destination for developing eco-tourism activities like forest trails, nature walks, jungle safaris, trekking, and rock climbing.</p>
        </div>
      </div>
      
      {/* Locations Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <LocationCard
              key={index}
              title={destination.title}
              location={destination.location}
              image={destination.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tourism;
