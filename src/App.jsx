import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact-us' Component={Contact}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App