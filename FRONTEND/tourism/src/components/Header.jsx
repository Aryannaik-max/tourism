import './Header.css'

const Header = () => {
  return (
    <header className="app-header">
        <div className="header-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target-icon lucide-target" className='header-icon'><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            <h1 className="header-title">Live Transport Tracker</h1>
        </div>
    </header>
  )
}

export default Header