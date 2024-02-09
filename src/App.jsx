import React from 'react'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import { DarkModeProvider } from './context/DarkModeContext'



function App() {

  return (
    <>
      <DarkModeProvider>
        <Dashboard/>
      </DarkModeProvider>
    </>
  )
}

export default App
