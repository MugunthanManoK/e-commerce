import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './component/LoginPage'
import RegisterPage from './component/RegisterPage'
import ForgetPage from './component/ForgetPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/forget' element={<ForgetPage/>} />
      </Routes>
    </div>
  )
}

export default App