import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

export default function Tour() {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <Header count={count} setCount={setCount}/>
        <Footer/>
    </div>
  )
}
