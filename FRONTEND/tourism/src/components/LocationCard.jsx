import './LocationCard.css'

const LocationCard = ({loc, title, link}) => {
  return (
    <div className="main">
        <div className="image">
            <img src={`${link}`} alt="" />
        </div>
        <div className="locat">
            <h2>{loc}</h2>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default LocationCard