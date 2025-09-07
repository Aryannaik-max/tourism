import { useState } from "react";

const Menu = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const X = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Header = ({ currentView, setCurrentView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Home', 'Handicrafts', 'Events', 'Homestays', 'Ecotourism'];

    const NavLink = ({ viewName }) => (
        <button
            onClick={() => {
                setCurrentView(viewName);
                setIsMenuOpen(false);
            }}
            className={`nav-link ${currentView === viewName ? 'active' : ''}`}
        >
            {viewName}
        </button>
    );

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <h1 className="header-title">JHARKALA</h1>
                    <nav className="header-nav">
                        {navItems.map(item => <NavLink key={item} viewName={item} />)}
                    </nav>
                    <div className="mobile-menu-button-container">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
                           {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="header-nav-mobile">
                    <nav>
                         {navItems.map(item => <NavLink key={item} viewName={item} />)}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header