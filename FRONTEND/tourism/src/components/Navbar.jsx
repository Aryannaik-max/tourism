import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-menu">
            <div className="logo">
            <img src="/ecologo.png" alt="" />
        </div>
        <div className="nav-links">
            <div className="nav-link home">
                <p>
                <Link to={'/'}>
                    Home
                </Link>
                </p>
            </div>
            <div className="nav-link culture">
                <Link to={'/culture'}>
                    Culture
                </Link>
            </div>
            <div className="nav-link culture">
                <Link to={'/tourism'}>
                    Tourism
                </Link>
            </div>
            <div className="nav-link gallery">
                <Link to={'/gallery'}>
                    Gallery
                </Link>
            </div>
            <div className="nav-link signup">
                <Link to={'/signup'}>
                    SIGN IN
                </Link>
            </div>
        </div>
        </div>  
    </nav>
  )
}

export default Navbar