import React from 'react';


// Data for various tourist spots in Jharkhand, categorized by type.
// Placeholder images from placehold.co and a '#' link are used
// for a complete, runnable example.
const touristSpots = {
  natural: [
    { name: "Dassam Falls (Ranchi)", desc: "A beautiful 144-foot high waterfall.", img:"/Images/image11.png", link: "https://en.wikipedia.org/wiki/Dassam_Falls" },
    { name: "Hundru Falls (Ranchi)", desc: "Jharkhand's highest waterfall (320 ft.).", img: "/Images/image12.png", link: "https://en.wikipedia.org/wiki/Hundru_Falls" },
    { name: "Jonha Falls (Ranchi)", desc: "Waterfall at Ganga–Raru river confluence.", img: "/Images/image13.png", link: "https://en.wikipedia.org/wiki/Jonha_Falls" },
    { name: "Panchghagh Falls (Khunti)", desc: "Known for 5 cascading waterfalls", img: "/Images/image14.png", link: "https://en.wikipedia.org/wiki/Panchghagh_Falls" },
    { name: "Hirni Falls (Ranchi)", desc: "An attractive spot amidst a dense forest.", img: "/Images/image15.png", link: "https://en.wikipedia.org/wiki/Hirni_Falls" },
    { name:"Usri Falls (Giridih)", desc:"A scenic waterfall surrounded by lush greenery.", img: "/Images/image16.png", link:"https://en.wikipedia.org/wiki/Usri_Falls"},
    { name: "Lodh Falls (Latehar)", desc: "The highest waterfall in Jharkhand (143 m).", img: "/Images/image17.png", link: "https://en.wikipedia.org/wiki/Lodh_Falls" },
    {name:"Rajrappa Falls (Ramgarh)", desc:"Waterfall near Rajrappa Temple", img: "/Images/image18.png", link:"https://en.wikipedia.org/wiki/Rajrappa"},
    {name:"Perwaghagh Falls (Khunti)", desc:"Scenic picturesque waterfall", img: "/Images/image19.png", link:"https://en.wikipedia.org/wiki/Perwaghagh_Falls"}
  ],
  lakesHills: [
  { name: "Patratu Valley & Dam (Ranchi)", desc: "Famous for stunning hill views and boating.", img: "/Images/image21.png", link: "https://en.wikipedia.org/wiki/Patratu" },
  { name: "Tagore Hill (Ranchi)", desc: "Named after Rabindranath Tagore, a great sunrise/sunset point.", img: "/Images/image22.png", link: "https://en.wikipedia.org/wiki/Tagore_Hill" },
  { name: "Netarhat (Latehar)", desc: "The 'Queen of Chotanagpur,' a scenic hill station.", img: "/Images/image23.png", link: "https://en.wikipedia.org/wiki/Netarhat" },
  { name: "Parasnath Hill (Giridih)", desc: "A Jain pilgrimage site and Jharkhand's highest peak (1366 m).", img: "/Images/image24.png", link: "https://en.wikipedia.org/wiki/Parasnath" },
  { name: "Rajrappa Temple & River Confluence (Ramgarh)",  desc: "A Shakti Peeth at the confluence of Damodar and Bhairavi rivers.", img: "/Images/image25.png", link: "https://en.wikipedia.org/wiki/Rajrappa" },
  { name: "Dimna Lake (Jamshedpur)", desc: "Artificial lake at Dalma Hills, perfect for boating & picnic.", img: "/Images/image26.png", link: "https://en.wikipedia.org/wiki/Dimna_Lake" },
  { name: "Tilaiya Dam (Koderma)", desc: "Scenic reservoir surrounded by forested hills.", img: "/Images/image27.png", link: "https://en.wikipedia.org/wiki/Tilaiya_Dam" },
  { name: "Topchanchi Lake (Dhanbad)", desc: "A beautiful lake nestled amidst forests and hills.", img: "/Images/image28.png", link: "https://en.wikipedia.org/wiki/Topchanchi_Wildlife_Sanctuary" },
  { name: "Maithon Dam (Dhanbad)", desc: "Hydroelectric dam known for scenic views and tourism.", img: "/Images/image29.png", link: "https://en.wikipedia.org/wiki/Maithon_Dam" },
],
 wildlife : [
  { name: "Betla National Park (Latehar)", desc: "A famous Tiger Reserve known for elephant safaris.", img: "/Images/image31.png", link: "https://en.wikipedia.org/wiki/Betla_National_Park" },
  { name: "Dalma Wildlife Sanctuary (Jamshedpur)", desc: "Popular for elephants and trekking.", img: "/Images/image32.png", link: "https://en.wikipedia.org/wiki/Dalma_Wildlife_Sanctuary" },
  { name: "Hazaribagh Wildlife Sanctuary (Hazaribagh)", desc: "A rich spot for flora and fauna.", img: "/Images/image33.png", link: "https://en.wikipedia.org/wiki/Hazaribagh_Wildlife_Sanctuary"  },
  { name: "Palamu Tiger Reserve (Latehar)", desc: "Part of Betla National Park, home to tigers and wild bison.", img: "/Images/image34.png", link: "https://en.wikipedia.org/wiki/Palamu_Tiger_Reserve" },
  { name: "Udhwa Bird Sanctuary (Sahibganj)", desc: "Famous wetland attracting thousands of migratory birds.", img: "/Images/image35.png", link: "https://en.wikipedia.org/wiki/Udhwa" },
  { name: "Lawalong Wildlife Sanctuary (Chatra)", desc: "Dense forests with leopards, deer, and peacocks.", img: "/Images/image36.png", link: "https://en.wikipedia.org/wiki/Lawalong_Wildlife_Sanctuary" },
  { name: "Topchanchi Wildlife Sanctuary (Dhanbad)", desc: "Known for aquatic birds and lush greenery.", img: "/Images/image37.png", link: "https://en.wikipedia.org/wiki/Topchanchi_Wildlife_Sanctuary" },
  { name: "Parasnath Wildlife Sanctuary (Giridih)", desc: "Covers Parasnath Hills, habitat for deer and leopards.", img: "/Images/image38.png", link: "https://en.wikipedia.org/wiki/Parasnath" },
  { name: "Singhbhum Elephant Reserve (Chaibasa)", desc: "Dedicated to wild elephants, spread over large forest area.", img: "/Images/image39.png", link: "https://appforest.jharkhand.gov.in/wildlife/singhbhum.aspx" },
],

cultural : [
  { name: "Baidyanath Dham (Deoghar)", desc: "One of the 12 Jyotirlingas, important for Shiv devotees.", img: "/Images/image41.png", link: "https://en.wikipedia.org/wiki/Baidyanath_Dham" },
  { name: "Jagannath Temple (Ranchi)", desc: "A replica of the Puri Jagannath Temple.", img: "/Images/image42.png", link: "https://en.wikipedia.org/wiki/Jagannath_Temple,_Ranchi" },
  { name: "Pahari Mandir (Ranchi)", desc: "A hilltop Shiva temple and a landmark of Ranchi.", img: "/Images/image43.png", link: "https://en.wikipedia.org/wiki/Pahari_Mandir" },
  { name: "Naulakha Mandir (Deoghar)", desc: "A heritage Radha-Krishna temple with beautiful architecture.", img: "/Images/image44.png", link: "https://en.wikipedia.org/wiki/Naulakha_Temple,_Deoghar" },
  { name: "Shikharji / Parasnath (Giridih)", desc: "One of the most important Jain pilgrimage sites on Parasnath Hills.", img: "/Images/image47.png", link: "https://en.wikipedia.org/wiki/Shikharji" },
  { name: "Sun Temple (Ranchi)", desc: "A beautiful temple shaped like a giant chariot with 18 wheels.", img: "/Images/image46.png", link: "https://en.wikipedia.org/wiki/Sun_Temple,_Ranchi" },
  { name: "Tapovan Temple (Deoghar)", desc: "Ancient caves and temples dedicated to Lord Shiva, popular among devotees.", img: "/Images/image48.png", link: "https://tourism.jharkhand.gov.in/how-to-reach/105/4" },
  { name: "Angrabadi Temple Complex (Khunti)", desc: "A group of temples dedicated to multiple deities, peaceful spiritual site.", img: "/Images/image49.png", link: "https://en.wikipedia.org/wiki/Amreshwar_Dham" },
    { name: "Maluti Temples (Dumka)", desc: "A cluster of ancient terracotta temples.", img: "/Images/image45.png", link: "https://en.wikipedia.org/wiki/Maluti_temples" },
],
 historical : [
  { name: "Rajmahal Hills (Sahibganj)", desc: "A site of archaeological and historical importance.", img: "/Images/image51.png", link: "https://en.wikipedia.org/wiki/Rajmahal_Hills" },
  { name: "Palamu Fort (Latehar)", desc: "A heritage fort from the Mughal era.", img: "/Images/image52.png", link: "https://en.wikipedia.org/wiki/Palamu_Fort" },
  { name: "Ranchi War Cemetery (Ranchi)", desc: "A memorial site from WWII.", img: "/Images/image53.png", link: "https://www.nzwargraves.org.nz/cemeteries/ranchi-war-cemetery" },
  { name: "Navratangarh Fort (Gumla)", desc: "Capital of the Nagvanshi dynasty with unique architecture.", img: "/Images/image54.png", link: "https://en.wikipedia.org/wiki/Navratangarh" },
  { name: "Itkhori (Chatra)", desc: "A heritage site with Buddhist, Hindu, and Jain relics.", img: "/Images/image55.png", link: "https://en.wikipedia.org/wiki/Itkhori" },
  { name: "Jami Masjid (Hazaribagh)", desc: "An ancient mosque showcasing Mughal architecture.", img: "/Images/image56.png", link: "https://commons.wikimedia.org/wiki/File:Jama_Masjid_Hazaribagh.jpg" },

],

};

// The main App component that contains the entire application.
//export default function App() {
export default function TouristGallery() {
  return (
    <div className="min-h-screen bg-green-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 text-center mb-4">
          Jharkhand Tourist Gallery 🏞️
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-35 max-w-2xl mx-auto">
          Explore the rich natural, cultural, and historical beauty of Jharkhand.
        </p>

        {Object.entries(touristSpots).map(([category, spots]) => (
          <section key={category}>
            <h2 className="text-4xl font-bold text-green-700 mb-13 text-center">
              {category === "natural" && "🌿 Natural Attractions & Waterfalls"}
              {category === "lakesHills" && "🏞️ Lakes, Hills & Scenic Spots"}
              {category === "wildlife" && "🐘 Wildlife & National Parks"}
              {category === "cultural" && "🏛️ Cultural & Religious Sites"}
              {category === "historical" && "🏘️ Historical & Heritage Sites"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {spots.map((spot, index) => (
                <a
                  key={index}
                  href={spot.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                >
                  <img
                    src={spot.img}
                    alt={spot.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="p-4 text-center font-semibold text-gray-800">
                    {spot.name}
                    <p className="text-sm font-normal text-gray-600 mt-1">{spot.desc}</p>
                  </div>
                </a>
              ))}
           </div>
{/* Adding a separator between categories */}
<div className="my-15 h-1 bg-green-900 rounded-full mx-auto max-w-lg"></div>
</section>

        ))}
      </div>
    </div>
  );
}
