import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import '../style/Style__Header.scss'
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
      <Link to={'/'}>Louis Mony - Folio 2024</Link>
      <div className='header__about' onClick={toggleAboutFunction}>
        <div className='header__about__hoverable'>
          <p>ABOUT</p>
          <p>ABOUT</p>
        </div>
      </div>
    </div>
  )
}

export default Component__Header
