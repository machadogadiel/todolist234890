import React from 'react'
import Button from '../Button/Button'
import style from './Card.module.css'

const UserCard = ({ data }) => {
  const { name, email, id } = data
  const { userCardStyle } = style

  return (
    <div className={userCardStyle}>
      <h3>{name}</h3>
      <p>{email}</p>

      <Button href={`/tasks/${id}/${name}`} />
    </div>
  )
}

export default UserCard