import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
export default function HomeCard({
    count
}) {
    const [index, setIndex] = React.useState(count);
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const Vehicle = [
        {
            name: "Car",
            image: require('../Assets/Image/Car.png'),
        },
        {
            name: "Bike",
            image: require('../Assets/Image/Bike.png'),
        },
    ]
    return (
        <>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '70px',
                height: '60vh',
                width: '100vw',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'center',
            }}
        >
            <div>
                <p style={{
                    fontSize: '30px',
                    fontFamily: "Poppins-Regular",
                    color: "ButtonText",
                    marginBlock: 0,
                }}>Fast and easy to rent a {Vehicle[count].name} </p>
                <div style={{
                    flexWrap: 'wrap',
                }}>

                </div>
            </div>
            <img src={Vehicle[count].image}
                // style={{
                //     height: '100%',
                //     width: '45%',
                // }}
            />
        </div>
        <div
        style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'center',
            height:'30px',
            width:'100vw',
            backgroundColor:'#b41c19',
        }}>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <MdDone style={{
                    borderInline:'2px solid white',
                    backgroundColor:'green',
                }} size={30} color="white"/>
                <p style={{
                    fontSize:'18px',
                    fontFamily:"Poppins-Regular",
                    color:"white",
                    marginBlock:0,
                    marginInlineStart:"10px",
                }}>New Vehicles</p>
            </div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <MdDone style={{
                    borderInline:'2px solid white',
                    backgroundColor:'green',
                }} size={30} color="white"/>
                <p style={{
                    fontSize:'18px',
                    fontFamily:"Poppins-Regular",
                    color:"white",
                    marginBlock:0,
                    marginInlineStart:"10px",
                }}>City Free Delivery</p>
            </div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <MdDone style={{
                    borderInline:'2px solid white',
                    backgroundColor:'green',
                }} size={30} color="white"/>
                <p style={{
                    fontSize:'18px',
                    fontFamily:"Poppins-Regular",
                    color:"white",
                    marginBlock:0,
                    marginInlineStart:"10px",
                }}>Reservation and Road Assistance 24/7</p>
            </div>
        </div>
        </>
    )
}
