import React from 'react'

const SliderItem = (props) => {
  return (
    <div className={`Home2__Slider__Item ${props.activeItem === true ? 'activeItem' : ''}`}>
        <img src={props.thumbnail} alt="Vignette" />
    </div>
  )
}

export default SliderItem
