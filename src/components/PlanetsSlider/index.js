// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    slidesToShow: 1,
    dots: false,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-main-container" data-testid="planets">
      <h1 className="planets-main-heading">PLANETS</h1>
      <Slider {...settings} className="slider-container">
        {planetsList.map(eachObject => (
          <PlanetItem eachObject={eachObject} key={eachObject.key} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
