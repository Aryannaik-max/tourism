import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Culture from './pages/Culture'
import Tourism from './pages/Tourism'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Complain from './pages/Complain'
import ScrollToTop from './ScrollToTop'
import TransportServices from './pages/TransportServices'
import Dashboard from './components/Dashboard'
// import { AuthProvider } from './context/AuthContext'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
        {/* <AuthProvider> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/culture' element={<Culture />} />
            <Route path='/tourism' element={<Tourism />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/complain' element={<Complain />} />
            <Route path='/transport' element={<TransportServices />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        {/* </AuthProvider> */}
      <Footer />
    </>
  )
}

export default App
