import React from 'react'
import { COLORS } from './Assets/Theme'
import Home from './Screens/Home'
import Footer from './Component/Footer'

export default function App() {
  return (
    <div
    style={{
      display:'flex',
      backgroundColor:COLORS.background
    }}
    >
      <Home/>
      <Footer/>
    </div>
  )
}
