import { Link } from "react-router-dom"
import YouTubeCarousel from "../components/YouTubeCarousel"

const Home = () => {
  return (
    <>
    <section className="home-section">
        <div className="tag-line">
            <h1>Experience the Soul of India</h1>
        </div>
        <div className="explore-btn">
            <Link to={'/tourism'}>
              Explore Now
            </Link>
        </div>
    </section>
    <section className="vid-section">
      <YouTubeCarousel />
    </section>
    </>
  )
}

export default Home