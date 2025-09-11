import LocationCard from "../components/LocationCard";

const Tourism = () => {
  return (
    <section className="bg-gray-100 min-h-screen font-sans">
      
      {/* Banner Section */}
      <div className="relative w-full h-80 md:h-96 rounded-b-xl overflow-hidden shadow-lg">
        <img 
          src="https://tourism.jharkhand.gov.in/app-assets/images/EcoTourism.jpg" 
          alt="Eco Tourism Banner" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-[#152A4C] bg-opacity-70 flex flex-col items-center justify-center text-white p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Eco Tourism</h1>
          <h2 className="text-xl md:text-2xl font-light mb-4">Let's create sustainable economies for inclusive growth</h2>
          <p className="max-w-3xl text-sm md:text-base">Jharkhand, with a huge forest cover of 33%, has immense scope for eco-tourism. The lush green jungles, perennial waterfalls, diverse terrain, moderate climate, and rich wildlife make it an ideal destination for developing eco-tourism activities like forest trails, nature walks, jungle safaris, trekking, and rock climbing.</p>
        </div>
      </div>
      
      {/* Locations Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#152A4C] text-center mb-12">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Using a component like LocationCard here would be ideal, but for a complete, self-contained file, the cards are generated inline */}
          {/* This is a placeholder section. If LocationCard exists and is refactored to Tailwind, it should be used here. */}
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_124955.jpg" alt="Udhwa Lake Bird Sanctuary" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Udhwa Lake Bird Sanctuaries</h3>
              <p className="text-sm text-gray-600">Sahebganj</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_142747.jpg" alt="Suraj Kund (Hot Spring Water)" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Suraj Kund (Hot Spring Water)</h3>
              <p className="text-sm text-gray-600">Hazaribagh</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_102705.jpg" alt="Tagore Hill" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Tagore Hill</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_132502.jpg" alt="Dimna Lake" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Dimna Lake</h3>
              <p className="text-sm text-gray-600">West Singhbhum</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_142321.jpg" alt="Hazaribagh National Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Hazaribagh National Park</h3>
              <p className="text-sm text-gray-600">Hazaribagh</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_132655.jpg" alt="Jubilee Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Jubilee Park</h3>
              <p className="text-sm text-gray-600">West Singhbhum</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180508_120652.jpg" alt="Biodiversity Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Biodiversity Park</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_172304.jpg" alt="Birsa Deer Park, Kalamati" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Birsa Deer Park, Kalamati</h3>
              <p className="text-sm text-gray-600">Khunti</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_180226.jpg" alt="Nandan Pahar" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Nandan Pahar</h3>
              <p className="text-sm text-gray-600">Deoghar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180518_140558.jpg" alt="Kamaldah Talab" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Kamaldah Talab</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180518_145406.jpg" alt="Tattapani Hot Water Spring" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Tattapani Hot Water Spring</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180627_162743.jpg" alt="Sidhu and Kanhu Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Sidhu and Kanhu Park</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/ranchi/mmt/activities/m_activities_ranchi_birsa_zoological_park_l_287_573.jpg" alt="Birsa Biological Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Birsa Biological Park</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://www.photobank.in/img/preview/1623226005DSC08117.JPG" alt="The Naspati Garden" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">The Naspati Garden</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://photos.wikimapia.org/p/00/01/45/14/47_big.jpg" alt="Hizla Pahar" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Hizla Pahar</h3>
              <p className="text-sm text-gray-600">Dumka</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/2f3f282a9bfcef08e3e93630853f7173_400x400.jpg" alt="Srishti Pahar" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Srishti Pahar</h3>
              <p className="text-sm text-gray-600">Dumka</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://entartica.com/wp-content/uploads/2022/12/30.jpg" alt="Patratu Dam Boating" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Patratu Dam Boating</h3>
              <p className="text-sm text-gray-600">Ramgarh</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_161144.jpg" alt="Tropic of Cancer" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Tropic of Cancer</h3>
              <p className="text-sm text-gray-600">Ramgarh</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://www.dalmawildlife.in/ranchi/images/customs/croc.jpg" alt="Crocodile Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Crocodile Park</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190627_165609.jpg" alt="Hargaddi Chokahatu (The Land of Megaliths)" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Hargaddi Chokahatu (The Land of Megaliths)</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190701_120213.jpg" alt="Chuttupalu Valley" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Chuttupalu Valley</h3>
              <p className="text-sm text-gray-600">Ramgarh</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_142116.jpg" alt="Dalma Wildlife Sanctuary" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Dalma Wildlife Sanctuary</h3>
              <p className="text-sm text-gray-600">Saraikela Kharsawan</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20200929_133548.jpg" alt="Patratu Valley" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Patratu Valley</h3>
              <p className="text-sm text-gray-600">Ramgarh</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20170426_222144.jpg" alt="Magnolia Sunset Point" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Magnolia Sunset Point</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_131707.jpg" alt="Saranda Forest" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Saranda Forest</h3>
              <p className="text-sm text-gray-600">West Singhbhum</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_171824.jpg" alt="Betla National Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Betla National Park</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_134012.jpg" alt="Khutabandh" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Khutabandh</h3>
              <p className="text-sm text-gray-600">Dumka</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_122313.jpg" alt="Sidhu Kabhi Shaurya Smarak Park" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Sidhu Kabhi Shaurya Smarak Park</h3>
              <p className="text-sm text-gray-600">Dumka</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20190604_105916.jpg" alt="The Forest Guest House" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">The Forest Guest House</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20180514_161300.jpg" alt="Koel View Point" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Koel View Point</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20170426_224210.JPG" alt="Sunrise Point" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Sunrise Point</h3>
              <p className="text-sm text-gray-600">Latehar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_102232.jpg" alt="Ranchi Lake" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Ranchi Lake</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_102355.jpg" alt="Rock Garden" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Rock Garden</h3>
              <p className="text-sm text-gray-600">Ranchi</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_174351.jpg" alt="Kiriburu" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Kiriburu</h3>
              <p className="text-sm text-gray-600">West Singhbhum</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_130709.jpg" alt="Trikuti" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Trikuti</h3>
              <p className="text-sm text-gray-600">Deoghar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160229_125427.jpg" alt="Topchanchi Lake" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Topchanchi Lake</h3>
              <p className="text-sm text-gray-600">Dhanbad</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/location/355X300/location20160203_173215.jpg" alt="Khandoli" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#152A4C]">Khandoli</h3>
              <p className="text-sm text-gray-600">Giridih</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Tourism;
