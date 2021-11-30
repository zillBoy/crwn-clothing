import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Homepage from './pages/Homepage.component'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
