import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Send from './pages/Send'
import TransactionSuccess from './pages/TransactionSuccess'
import Home from './pages/Home'



const App = () => {
  return (
    <div className='font-poppins'>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home /> }></Route>
            <Route path='/home' element={<Home /> }></Route>
            <Route path='/signup' element={<Signup /> }></Route>
            <Route path='/signin' element={<Signin /> }></Route>
            <Route path='/dashboard' element={<Dashboard /> }></Route>
            <Route path='/send' element={<Send /> }></Route>
            <Route path='/transactionsuccess' element={<TransactionSuccess /> }></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App