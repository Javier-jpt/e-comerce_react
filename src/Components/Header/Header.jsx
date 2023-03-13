import React, { useContext } from 'react'
import { UserContext } from '../../Context/Users/UserContext'
import Logo from '../../img/logo.png'


const Header = () => {
  
  const { userData } = useContext(UserContext)

  return (
    <div className='Header'>
      <img className='Logo' src={Logo} alt="Logo" width="200px" />
      <h1>Wellcome to AnimeLandia: {userData.email} </h1>
    </div>
  )
}

export default Header