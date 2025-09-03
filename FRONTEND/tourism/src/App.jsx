import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Culture from './pages/Culture'
import Tourism from './pages/Tourism'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/culture' element={<Culture />} />
        <Route path='/tourism' element={<Tourism />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
