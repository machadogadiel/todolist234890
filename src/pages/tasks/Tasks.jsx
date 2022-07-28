import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TodoCard from '../../components/Card/TodoCard'
import Header from '../../components/Header/Header'
import style from './Tasks.module.css'

const Tasks = () => {
  const { asideStyle, sectionStyle, containerMain } = style
  const [data, setData] = useState([])
  const params = useParams()

  const requestTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await response.json()

    setData(json)
  }

  useEffect(() => {
    requestTodos()
  }, [])

  const todoCardsCompleted = data.filter(el => el.userId == params.id && el.completed == true)
  const todoCardsUncompleted = data.filter(el => el.userId == params.id && el.completed == false)

  return (
    <div className='container'>
      <Header title='TodoList' />

      <main className={containerMain}>
        <aside className={asideStyle}>
          <h2>{params.nome}</h2>
        </aside>

        <section className={sectionStyle}>
          {[...todoCardsUncompleted, ...todoCardsCompleted].map(el => <TodoCard key={Math.random() * 200} data={el} />)}
        </section>
      </main>
    </div>
  )
}

export default Tasks