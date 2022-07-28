
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Tasks from './pages/tasks/Tasks'

function Routes() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/tasks/:id/:nome/' element={<Tasks />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
