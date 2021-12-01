import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Homepage from './pages/Homepage.component'
import Shop from './pages/Shop/Shop.component'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
