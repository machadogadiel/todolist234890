import React from 'react'
import { Link } from 'react-router-dom'
import style from './Button.module.css'

const Button = ({ href }) => {
  const { buttonStyle } = style

  return (
    <Link className={buttonStyle} to={href}>Ver produto</Link>
  )
}

export default Button