import { Link } from 'react-router-dom'
import '../ExploreTransport.css'

const ExploreTransport = () => {
  return (
    <div className="main-container">
        <div className="text-container">
            Explore Transport Services
        </div>
        <div className="indicator">
            <div className="button">
                <Link to={'/transport'}>
                    EXPLORE
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ExploreTransport