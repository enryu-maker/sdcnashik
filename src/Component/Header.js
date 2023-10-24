import React from 'react'
import { IMAGES } from '../Assets/Image'

export default function Header({
    count,
    setCount
}) {
    const OnHover = (e) => {
        e.target.style.color = "#b41c19"
        e.target.style.fontFamily = "LEMONMILK-Bold"
    }
    const OffHover = (e) => {
        e.target.style.color = "ButtonText"
        e.target.style.fontFamily = "Poppins-Regular"
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                height: '70px',
                width: '100vw',
                backgroundColor: "white",
                borderBlockEnd: '2px solid #E5E5E5',
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '70px',
                width:"25vw",
            }}>
                <img src={IMAGES.icon}
                    style={{
                        height: '70px',
                        width: '100px',
                    }}
                />
                <p style={{
                    fontSize: '25px',
                    fontFamily:"LEMONMILK-Bold",
                    color: "ButtonText",
                    // marginBlock:0,
                }}><span style={{
                    color: "#b41c19",
                }}>S</span>ELF <span style={{
                    color: "#b41c19",
                }}>D</span>RIVE <span style={{
                    color: "#b41c19",
                }}>C</span>
                ARS </p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: '70px',
                width:"60vw",
                transition: "all 3s ease",
            }}>
                <p style={{
                    fontSize: '18px',
                    fontFamily:"Poppins-Regular",
                    color: "ButtonText",
                    marginBlock:0,
                    marginRight:"20px",
                    cursor:"pointer",
                }}
                onMouseEnter={OnHover}
                onMouseLeave={OffHover}
                onClick={() => {
                    setCount(0)
                }}
                >
                    Rent A Car
                </p>
                <p style={{
                    fontSize: '18px',
                    fontFamily:"Poppins-Regular",
                    color: "ButtonText",
                    marginBlock:0,
                    cursor:"pointer",
                    marginRight:"20px",
                }}
                onMouseEnter={OnHover}
                onMouseLeave={OffHover}
                onClick={() => {
                    setCount(1)
                }}
                >
                    Rent A Bike
                </p>
                <p style={{
                    fontSize: '18px',
                    fontFamily:"Poppins-Regular",
                    color: "ButtonText",
                    marginBlock:0,
                    marginRight:"20px",
                    cursor:"pointer",
                }}
                onMouseEnter={OnHover}
                onMouseLeave={OffHover}
                >
                    Login
                </p>
                <p style={{
                    fontSize: '18px',
                    fontFamily:"Poppins-Regular",
                    color: "ButtonText",
                    marginBlock:0,
                    marginRight:"20px",
                    cursor:"pointer",
                }}
                onMouseEnter={OnHover}
                onMouseLeave={OffHover}
                >
                    Register
                </p>
                <p style={{
                    fontSize: '18px',
                    fontFamily:"Poppins-Regular",
                    color: "ButtonText",
                    marginBlock:0,
                    marginRight:"20px",
                    cursor:"pointer",
                }}
                onMouseEnter={OnHover}
                onMouseLeave={OffHover}
                >
                    Tour Package
                </p>
            </div>
        </div>
    )
}
