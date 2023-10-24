import React from 'react'
import Header from '../Component/Header'

export default function Profile() {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <Header count={count} setCount={setCount}/>
    </div>
  )
}
