import React from 'react'
import "./Header.scss"

import {ReactComponent as Logo} from '../../asset/Logo.svg'

function Header() {
  return (
    <div className="header-container row">
        <Logo className='logo'/>
    </div>
  )
}

export default Header