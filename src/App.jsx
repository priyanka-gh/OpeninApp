import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GoogleAuth from './components/Auth/GoogleAuth'
import Dashboard from './components/Dashboard/Dashboard'
import './index.css'

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path = "/" element={<GoogleAuth/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
      </Routes>

    </Router>
    </div>
  )
}

export default App