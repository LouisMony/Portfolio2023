import React from 'react'
import '../style/Style__Menu.scss';

const Component__Menu = () => {
    const handlClick = (event) => {
        event.preventDefault()
    };
    
    return (
        <div className='Menu' onClick={handlClick}>
            <ul>
                <li>
                    <a href='#'>Collections</a>
                </li>
                <li>
                    <a href='#'>Qui sommes-nous ?</a>
                </li>
                <li>
                    <a href='#'>Besoin d'aide ?</a>
                </li>
            </ul>
        </div>
  )
}

export default Component__Menu
