import React from 'react'
import { MdOutlineDiscount } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { RxCross1 } from 'react-icons/rx'
export default function TourCard({
    name,
    price,
    text,
    location,
    setShow,
    setData,
    data
}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                height: '450px',
                width: '370px',
                borderRadius: '10px',
                boxShadow: "5px 5px 10px #88888850",
                marginBlock: '20px',
            }}
        >
            <div style={{
                display: 'flex',
                backgroundColor: "#b41c1960",
                padding: '6px',
                borderRadius: "10px",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <MdOutlineDiscount style={{
                    height: '15px',
                    width: '15px',
                    color: '#b41c19',
                }} />
                <p style={{
                    marginBlock: 0,
                    fontFamily: "Poppins-Regular",
                    fontSize: '12px',
                    letterSpacing: '0.5px',
                    color: '#b41c19',
                }}>
                    Discounted Price
                </p>
            </div>
            <p style={{
                fontFamily: "LEMONMILK-Bold",
                fontSize: '25px',
                textAlign: 'center',
            }}>
                {name}
            </p>
            {
                location != null ?
                    <p style={{
                        fontFamily: "Poppins-LightItalic",
                        fontSize: '18px',
                        textAlign: 'center',
                        width:"90%"
                    }}>
                        {location}
                    </p> : null
            }
            {
                price ?
                    <p style={{
                        fontFamily: "LEMONMILK-Bold",
                        fontSize: '30px',
                        letterSpacing: '2.0px',
                        width: '90%',
                        textAlign: 'center',
                        marginBlockStart: '0px',
                    }}>
                        ₹ {price}
                    </p>
                    : null
            }
            <button style={{
                height: '40px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#0B6623',
                color: 'white',
                fontFamily: "LEMONMILK-Bold",
                fontSize: '20px',
                letterSpacing: '0.5px',
                paddingInline:10,
                cursor:"pointer",
            }}
            onClick={()=>{
                setShow(true);
                setData({name:name,price:price})
            }}
            >
                {
                    price ?
                        "Book Now"
                        :
                        "Contact Us"
                }
            </button>
            <div style={{
                height: 1,
                width: "90%",
                backgroundColor: "#E5E5E5",
                marginBlock: "20px",
            }} />
            <p style={{
                fontFamily: "Poppins-LightItalic",
                fontSize: '16px',
                letterSpacing: '0.5px',
                marginBlock: 0,
                width: "90%",
            }}>
                {text}
            </p>

        </div>
    )
}
