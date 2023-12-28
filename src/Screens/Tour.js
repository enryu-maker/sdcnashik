import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import TourCard from '../Component/TourCard'
import FlatList from 'flatlist-react/lib'
import TourModal from '../Component/TourModal'

export default function Tour() {
  const [count, setCount] = React.useState(0)
  const [show, setShow] = React.useState(false)
  const [Data,setData] = React.useState({
    name: "",
    price: "",
  })

  const data = [
    {
      id: 1,
      name: "Nashik to Mumbai",
      price: 5000,
      text: "Toll & Parking Charges are not included"
    },
    {
      id: 2,
      name: "Nashik to Pune",
      price: `13(NON-AC) / ₹ 15(AC) Per km`,
      text: "Toll & Parking Charges are not included"
    },
    {
      id: 3,
      name: "Nashik to Shirdi",
      price: 3500,
      text: "All Inclusive"
    },
    {
      id: 4,
      name: "Nashik Local Tour",
      location: "Trimbakeshwar, Godawari, Sita Gufa and Sula Vineyards",
      price: 3500,
      text: "All Inclusive"
    },
    {
      id: 4,
      name: "Nashik to Igatpuri",
      price: 15000,
      text: "All Inclusive Car & hotel stay for 1 days"
    },
    {
      id: 5,
      name: "Tempo Traveller & Bus",
      text: "Contact Us for more details"
    },
  ]
  return (
    <div>
      <Header count={count} setCount={setCount} />
      <TourModal setShow={setShow} show={show} dataf={Data} />
      <p style={{
        fontFamily: "LEMONMILK-Bold",
        fontSize: '40px',
        textAlign: 'center',
        marginTop: '100px',
        color: "#b41c19",
      }}>
        OUr Tour Packages
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignSelf: 'center',
      }}>
        <FlatList
          list={data}
          renderItem={(item, index) => (
            <TourCard
              key={index}
              name={item.name}
              price={item.price}
              text={item.text}
              location={item.location}
              setShow={setShow}
              setData={setData}
              data={Data}
            />
          )
          }
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </div>
      <Footer />
    </div>
  )
}
