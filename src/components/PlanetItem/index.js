// Write your code here

import './index.css'

const PlanetItem = props => {
  const {eachObject} = props
  const {name, imageUrl, description} = eachObject

  return (
    <div className="carousel-main-container">
      <img src={imageUrl} alt={`planet ${name}`} className="carousel-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
