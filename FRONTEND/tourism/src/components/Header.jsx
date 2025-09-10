import './Header.css'

const Header = () => {
  return (
    <header className="app-header">
        <div className="header-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="header-icon lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <h1 className="header-title">Live Transport Tracker</h1>
        </div>
    </header>
  )
}

export default Header