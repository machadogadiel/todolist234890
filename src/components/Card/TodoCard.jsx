import React from 'react'
import style from './Card.module.css'

const TodoCard = ({ data }) => {
  const { title, completed } = data
  const { todoCardStyle, todoCardStyleGreen, todoCardStyleRed } = style

  const color = completed ? todoCardStyleGreen : todoCardStyleRed

  return (
    <div className={`${todoCardStyle} ${color}`}>
      <p>{title}</p>

      <p>
        {completed ? "Feito" : "A fazer"}
      </p>
    </div>
  )
}

export default TodoCard