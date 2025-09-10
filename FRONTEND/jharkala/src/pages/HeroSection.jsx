import CategoryCard from '../components/CategoryCard'

const HeroSection = ({ setCurrentView }) => (
  <div className="hero-section">
    <div className="container">
      <div className="hero-content">
          <h2 className="hero-title">Welcome to the Heart of Jharkhand</h2>
          <p className="hero-subtitle">
              Discover authentic tribal handicrafts, vibrant local events, serene homestays, and breathtaking ecotourism.
          </p>
      </div>
      <div className="hero-grid">
          <CategoryCard
              title="Handicrafts"
              description="Artisan-crafted treasures."
              imageUrl="https://imgs.search.brave.com/0sjINxpbVolVU1yqazJD_hWBghwL_deJx4kms1KK5Es/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJiLzgy/LzAzLzJiODIwMzY5/YjIwYjQ3YjgzZWVi/YmIwZGYzOWYzZmQ1/LmpwZw"
              onClick={() => setCurrentView('Handicrafts')}
          />
          <CategoryCard
              title="Events"
              description="Experience local culture."
              imageUrl="https://imgs.search.brave.com/uakJbkdOZFJVAr3AxSq30Ajvj0TydXCUc78ienUlVSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbS5o/dW50LmluL2NnL2po/YXIvQWJvdXQvUHJv/ZmlsZS9Tb2hyYWlG/ZXN0aXZhbEpoYXJr/aGFuZC5qcGc"
              onClick={() => setCurrentView('Events')}
          />
          <CategoryCard
              title="Homestays"
              description="Live like a local."
              imageUrl="https://imgs.search.brave.com/1OqU_MHAhCZwiK3xbwpzorJRLUWRYyPeqC9nFL6rye8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aHduc3RhdGljLmNv/bS81MDAvMzUwLzgw/L2ZhbHNlL1M5ejdi/NDZOYklIbzlTZHp2/WkwuTXBTSHpTWHJm/WUZ0SzUxZkhuZzYz/RkY0bmhaOGxXTXFj/YlRsREM0REZaOW5Y/ZWVDaWdRMkF2RVFN/eWI2d3ZDR05BZ1dU/RW5YYnh6aWxIRzE3/RkwxazZTaUFscjJ0/anIyLldIN04yd18"
              onClick={() => setCurrentView('Homestays')}
          />
          <CategoryCard
              title="Ecotourism"
              description="Explore pristine nature."
              imageUrl="https://imgs.search.brave.com/KBRhNzVAwy4aaDPAdWT9GDqYdTr_TFGOTnC1C62UOeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9sb2RoLXdhdGVy/ZmFsbHMtcmFuY2hp/LWpoYXJraGFuZC0x/LWF0dHItaGVybz9x/bHQ9ODImdHM9MTcy/NzAxMDk0MjIyMA"
              onClick={() => setCurrentView('Ecotourism')}
          />
      </div>
    </div>
  </div>
);

export default HeroSection