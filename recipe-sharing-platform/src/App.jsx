import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'

function App () {
  return(
  <Router>
    <div className='min-h-screen bg-slate-200'>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>

    </div>
  </Router>
  )
}

export default App
