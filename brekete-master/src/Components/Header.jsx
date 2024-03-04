import React from 'react'
import "../Components/Header.css/"
import PlayerContext from './PlayerContext'
import { useContext } from 'react'

const Header = () => {
     

  const { albumList, currentAlbum} = useContext(PlayerContext)
  return (

      <h3 className='header-div'>{albumList[currentAlbum].Album}</h3>

  )
}

export default Header
