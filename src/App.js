import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import { TailSpin } from 'react-loader-spinner'
import Login from './Screens/Login'
import Register from './Screens/Register'
import Tour from './Screens/Tour'
import Profile from './Screens/Profile'

export default function App() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
    , [])
  if (loading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <TailSpin
        height="70"
        width="70"
        color="#b41c19"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
  else
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tourpackage" element={<Tour />} />
      </Routes>
    )
}