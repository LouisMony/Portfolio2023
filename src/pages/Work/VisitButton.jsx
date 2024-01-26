import React from 'react'
import Magnetic from '../../components/Magnetic'
const VisitButton = (props) => {
  return (
    <div className='work__visit'>
        <Magnetic>
            <a href='#' className='work__visit__button'>
                <span>{props.textContent}</span>
            </a>
        </Magnetic>
    </div>
  )
}

export default VisitButton
