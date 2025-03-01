import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Header from './components/Header'
import Register from './pages/Register'


function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact-us' Component={Contact}/>
      <Route path='/register' Component={Register}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App