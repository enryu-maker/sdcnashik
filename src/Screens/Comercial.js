import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

export default function Comercial() {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <Header count={count} setCount={setCount}/>
        <p style={{
            fontFamily: "LEMONMILK-Bold",
            fontSize: '40px',
            textAlign: 'center',
            marginTop: '100px',
            color: "#b41c19",
        }}>
          OUr Commercial Packages
          </p>
        
        <Footer/>
    </div>
  )
}
