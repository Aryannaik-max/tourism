import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const go = (path) => () => {
        navigate(path)
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <>
    {isMenuOpen && <div className='overlay' onClick={toggleMenu}></div>}
    <nav className="navbar">
        <div className="nav-menu">
            <div className="logo">
                <img src="/ecologo.png" alt="" />
            </div>
            <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} role='button' tabIndex={0}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <div className="close-icon" onClick={toggleMenu} role='button' tabIndex={0}>&times;</div>
                <div className={`nav-link home-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={go('/')}
                role='button'
                tabIndex={0}
                >
                    Home
                </div>
                <div className={`nav-link culture-link ${location.pathname === '/culture' ? 'active' : ''}`}
                onClick={go('/culture')}
                role='button'
                tabIndex={0}
                >
                    Culture
                </div>
                <div className={`nav-link tourism-link ${location.pathname === '/tourism' ? 'active' : ''}`}
                onClick={go('/tourism')}
                tabIndex={0}
                >
                    Tourism
                </div>
                <div className={`nav-link gallery-link ${location.pathname === '/gallery' ? 'active' : ''}`}
                onClick={go('/gallery')}
                role='button'
                tabIndex={0}
                >
                    Gallery
                </div>
                <div className={`nav-link signup-link`}
                onClick={go('/signup')}
                role='button'
                tabIndex={0}
                >
                    SIGN IN
                </div>
            </div>
        </div>  
    </nav>
    </>
  )
}

export default Navbar