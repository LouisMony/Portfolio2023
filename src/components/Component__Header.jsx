import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../style/Style__HeaderFooter.scss'
import { handleTransi } from '../js/handleTransi'

const Component__Header = ({ toggleAboutFunction }) => {
  const naviguate = useNavigate()
  const location = useLocation()

  const checkLocation = () => {
    if (location.pathname !== '/') {
      handleTransi(naviguate, '/')
    }
  }

  return (
    <div className='header'>
      <span onClick={() => checkLocation()} className='homelink'>
        Louis Mony - Folio 2023
      </span>
      <span onClick={toggleAboutFunction} className='homelink'>
        About
      </span>
    </div>
  )
}

export default Component__Header
