import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Components/NavBar'
import AppRoutes from './AppRoutes'
import Footer from './Components/Footer'
import { sharedBackgroundStyle } from './styles'

function App() {
  const appStyle = {
    ...sharedBackgroundStyle,
    margin: 0,
  };

  return (
    <Router>
      <div style={appStyle}>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
