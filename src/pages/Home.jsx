import React from 'react'
import { useEffect, useState } from 'react'
import UserCard from '../components/Card/UserCard'
import Header from '../components/Header/Header'

const Home = () => {
  const [data, setData] = useState([])

  const request = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()

    setData(json)
  }

  useEffect(() => {
    request()
  }, [])

  const userCards = data.map((el) => {
    return <UserCard key={Math.random() * 200} data={el} />
  })

  return (
    <main>
      <div className='container'>
        <Header title='Teste' />

        <div className='usercard-grid' >
          {userCards}
        </div>
      </div>
    </main>
  )
}

export default Home