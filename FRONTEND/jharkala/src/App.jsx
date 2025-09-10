import { useState, useEffect } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import HeroSection from './pages/HeroSection'
import Section from './components/Section'
import HandicraftCard from './components/HandicraftCard'
import EventCard from './components/EventCard'
import HomestayCard from './components/HomeStayCard'
import EcotourismCard from './components/EcoTourismCard'

const mockData = {
  handicrafts: [
    { id: 1, name: 'Dokra Elephant Statue', artisan: 'Sohrai Artisans', price: 2500, image: 'https://imgs.search.brave.com/BFuH3EShAZhXNN2xy6tXJ58Dv4yYt-oeiKZ4XQSyAF8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE4NjgwNTg5L3Iv/aWwvYWMzNTI3LzI5/ODQ5MjE1OTIvaWxf/NjAweDYwMC4yOTg0/OTIxNTkyXzM1NWQu/anBn', description: 'Intricate brasswork using the lost-wax casting technique. A symbol of tribal heritage.' },
    { id: 2, name: 'Sohrai Painting', artisan: 'Khovar Painters Collective', price: 1800, image: 'https://imgs.search.brave.com/tLiCPpfgbTcfony1hwPOZknIUG0YSAddsxRouIrp2Bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWJu/ZWVsLmNvbS9kYWls/eS9zaXRlcy9kZWZh/dWx0L2ZpbGVzL2lt/YWdlcy9kYWlseS8w/NS0yMDIwLzExLXNv/aHJhaS1wYWludGlu/Zy1oYXJtb255LWxp/ZmUtdHJpYmFsLWFy/dC1qaGFya2hhbmQu/anBn', description: 'Traditional mural art on a terracotta vase, depicting nature and folklore.' },
    { id: 3, name: 'Bamboo Utility Basket', artisan: 'Munda Weavers', price: 750, image: 'https://imgs.search.brave.com/c_NO-4V3GmDKzKyrFTMMgx6f5SaBldOEIJ7YiNOuehM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/ZGVmX2NvbnRlbnRf/Y2F0ZWdvcnkvYmFt/Ym9vLWhhbmRpY3Jh/ZnQtbWFudWZhY3R1/cmVycy8zNjAtZi00/MzU1MzE5MzctZnpk/OXFvNXBveDBlZWxo/MTM1OHB0YzlybXd4/amc5cm0tYmFtYm9v/LWhhbmRpY3JhZnQt/bWFudWZhY3R1cmVy/cy0xLXQ0amdlLTI1/MC5qcGc_dz02NDAm/cT03NQ', description: 'Handwoven bamboo basket, perfect for storage or as a decorative piece. Eco-friendly and durable.' },
    { id: 4, name: 'Paitkar Scroll Painting', artisan: 'Chitrakar Community', price: 3200, image: 'https://imgs.search.brave.com/KwTo6weduLZI6lutLSsWr_luhdwO6doOONtmV-INLFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI0LzUv/NDE1OTc4NjcxL1pJ/L0NEL1BBLzI0Mjky/MTQyL3BhaXRrYXIt/dHJpYmFsLWZvbGst/cGFpbnRpbmdzLW9m/LWpoYXJraGFuZC0x/MDAweDEwMDAuanBn', description: 'A narrative scroll painting depicting mythological stories, rendered on cloth with natural dyes.' },
  ],
  events: [
    { id: 1, name: 'Sarhul Festival Celebration', location: 'Ranchi', date: 'March 2026', description: 'Join the vibrant celebration of the new year with traditional dance, music, and rituals dedicated to nature.', image: 'https://imgs.search.brave.com/oqItYdSmI4C3qPW-MP2VQqK35DOz5BdAngrUWkxkd1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZmL1Nhcmh1bF9G/ZXN0aXZhbF9DZWxl/YnJhdGlvbl9Jbl9D/ZW50cmFsX1VuaXZl/cnNpdHlfT2ZfSmhh/cmtoYW5kXyxCcmFt/YmVfQ2FtcHVzLF9S/YW5jaGlfLF9zYW1w/bGVfMS5qcGc' },
    { id: 2, name: 'Tribal Art Workshop', location: 'Jamshedpur', date: 'October 2025', description: 'A 3-day workshop with local artisans. Learn the basics of Sohrai painting and Dokra art.', image: 'https://imgs.search.brave.com/hOZImYnGGNCgw_hmBsyqBmu6zArqfEfFZyMU7V3DP_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWFkaXZhc2kub3Jn/L3N0b3JhZ2UvMDFI/UUpETVFUMVY3MVQz/MENZUkhGWTFLOFAu/anBn' },
  ],
  homestays: [
    { id: 1, name: 'Netarhat Jungle Stay', host: 'Birsa Munda', capacity: 4, price: 3000, image: 'https://imgs.search.brave.com/19kZFNql7qn-_MGMh13vukT59mJ2KfEx7PIU2QaFHf4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MWIvNjUvMjcvMDIv/Zm9yZXN0LWJ1bmdh/bG93LWluLW5ldGFy/aGF0LmpwZw', description: 'A rustic cottage nestled in the serene forests of Netarhat. Experience tribal hospitality and cuisine.' },
    { id: 2, name: 'Maduwa Village Experience', host: 'Sarita Devi', capacity: 6, price: 2200, image: 'https://imgs.search.brave.com/TpKS3k2KEl6nR67ooXQEIYabXpcFGUqxHL123shl-nA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9hLXRyaWJhbC12/aWxsYWdlLTEtYm9k/eT9xbHQ9ODImdHM9/MTcyNzAxMjM4ODc1/OQ', description: 'Live with a local family in a traditional mud house. Participate in farming activities and village life.' },
  ],
  ecotourism: [
    { id: 1, name: 'Dalma Hills Trekking', duration: '2 Days / 1 Night', price: 4500, image: 'https://imgs.search.brave.com/S5DE4pXUHtaaqxAZ7Q_FqfzF4m6Eop-yLtxQpkKIYDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9kYWxtYS1oaWxs/cy1qYW1zaGVkcHVy/LWpoYXJraGFuZC0z/LWF0dHItaGVybz9x/bHQ9ODImdHM9MTc0/MjE2MTc2MTA3MQ', description: 'A guided trek through the Dalma Wildlife Sanctuary. Spot elephants, deer, and enjoy panoramic views.' },
    { id: 2, name: 'Patratu Valley Cycling Tour', duration: '1 Day', price: 1500, image: 'https://imgs.search.brave.com/fsB3LoyF0xd0Hl5_kCsLAQ9B5EMfX63Wuw6VronQGHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE1L1BhdHJhdHVf/dmFsbGV5LmpwZw', description: 'An exhilarating cycling tour through the winding roads of Patratu Valley, with stunning lake views.' },
  ],
};

function App() {
  const [currentView, setCurrentView] = useState('Home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState('');

  const handleSelect = (item, type) => {
      setSelectedItem(item);
      setModalType(type);
  };

  const handleCloseModal = () => {
      setSelectedItem(null);
      setModalType('');
  };

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedItem]);

  const renderContent = () => {
    switch (currentView) {
      case 'Handicrafts':
        return (
            <Section title="Tribal Handicrafts" subtitle="Own a piece of Jharkhand's soul, crafted by hand with ancient techniques.">
                <div className="grid-container grid-container-handicrafts">
                    {mockData.handicrafts.map(item => <HandicraftCard key={item.id} item={item} onSelect={(item) => handleSelect(item, 'handicrafts')} />)}
                </div>
            </Section>
        );
      case 'Events':
        return (
            <Section title="Local Events & Festivals" subtitle="Immerse yourself in the vibrant traditions and celebrations of Jharkhand.">
                  <div className="grid-container space-y">
                    {mockData.events.map(item => <EventCard key={item.id} item={item} onSelect={(item) => handleSelect(item, 'events')} />)}
                </div>
            </Section>
        );
      case 'Homestays':
        return (
            <Section title="Authentic Homestays" subtitle="Experience genuine hospitality and live amongst the local communities.">
                <div className="grid-container grid-container-homestays">
                    {mockData.homestays.map(item => <HomestayCard key={item.id} item={item} onSelect={(item) => handleSelect(item, 'homestays')} />)}
                </div>
            </Section>
        );
      case 'Ecotourism':
        return (
            <Section title="Ecotourism Adventures" subtitle="Explore the untouched natural beauty of Jharkhand's hills, forests, and waterfalls.">
                  <div className="grid-container grid-container-ecotourism">
                    {mockData.ecotourism.map(item => <EcotourismCard key={item.id} item={item} onSelect={(item) => handleSelect(item, 'ecotourism')} />)}
                </div>
            </Section>
        );
      default:
        return <HeroSection setCurrentView={setCurrentView} />;
    }
  };

  return (
    <>
      <div className="app-container">
          <Header currentView={currentView} setCurrentView={setCurrentView} />
          <main>
              {renderContent()}
          </main>
          <Footer />
          <Modal item={selectedItem} onClose={handleCloseModal} type={modalType} />
      </div>
    </>
  )
}

export default App
