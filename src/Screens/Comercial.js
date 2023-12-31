import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import TourCard from '../Component/TourCard'
import TourModal from '../Component/TourModal'

export default function Comercial() {
  const [count, setCount] = React.useState(0)
  const [show, setShow] = React.useState(false)
  const [Data, setData] = React.useState({
    name: "",
    price: "",
  })
  console.log(Data)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TourModal setShow={setShow} show={show} dataf={Data} />
      <Header count={count} setCount={setCount}  />
      <p style={{
        fontFamily: "LEMONMILK-Bold",
        fontSize: '40px',
        textAlign: 'center',
        marginTop: '100px',
        color: "#b41c19",
      }}>
        Our Corporate Packages
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '80vw',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <TourCard
          name="Corporate Stay"
          location={"3 Star Hotel Stay for 2 persons | car for 1 day with fuel upto 100km | Business Hotel"}
          price="10000"
          text="Toll & Parking Charges are not included  For car need Adhar Card & Driving License"
          data={Data}
          setData={setData}
          setShow={setShow}
        />
        <TourCard
          name="Corporate Cars"
          location={"Only Car"}
          data={Data}
          text="For Corporate Self Drive Cars Only"
          setData={setData}
          setShow={setShow}
        />
      </div>
      <Footer />
    </div>
  )
}
