import React from 'react'
import Logo from '../../img/logo.png'

const Header = () => {
  return (
    <div className='Header'>
      <img className='Logo' src={Logo} alt="Logo" width="200px" />
    </div>
  )
}

export default Header