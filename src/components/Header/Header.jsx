import React from 'react'
import style from './Header.module.css'

const Header = ({ title }) => {
  const { headerStyle } = style

  return (
    <header className={headerStyle}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header