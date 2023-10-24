import React from 'react'
import { IMAGES } from '../Assets/Image'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { COLORS } from '../Assets/Theme'

export default function Header({
    count,
    setCount
}) {
    const target = useLocation()
    const access = useSelector(state => state.Reducers.access)
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
                width: "25vw",
            }}>
                <img src={IMAGES.icon}
                    style={{
                        height: '70px',
                        width: '100px',
                    }}
                />
                <p style={{
                    fontSize: '25px',
                    fontFamily: "LEMONMILK-Bold",
                    color: COLORS.text,
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
                width: "60vw",
                transition: "all 3s ease",
            }}>
                <Link
                    to={'/'}
                    style={{
                        fontSize: '18px',
                        fontFamily: "Poppins-Regular",
                        color: COLORS.text,
                        marginBlock: 0,
                        marginRight: "20px",
                        cursor: "pointer",
                        textDecoration: "none",
                    }}
                    onMouseEnter={OnHover}
                    onMouseLeave={OffHover}
                    onClick={() => {
                        setCount(0)
                    }}
                >
                    Rent A Car
                </Link>
                <Link
                    to={"/"}
                    style={{
                        fontSize: '18px',
                        fontFamily: "Poppins-Regular",
                        color: COLORS.text,
                        marginBlock: 0,
                        cursor: "pointer",
                        marginRight: "20px",
                        textDecoration: "none",
                    }}
                    onMouseEnter={OnHover}
                    onMouseLeave={OffHover}
                    onClick={() => {
                        setCount(1)
                    }}
                >
                    Rent A Bike
                </Link>
                {
                    access === null ?
                        <>
                            <Link
                                to={"/login"}
                                style={{
                                    fontSize: '18px',
                                    fontFamily: "Poppins-Regular",
                                    color: COLORS.text,
                                    marginBlock: 0,
                                    marginRight: "20px",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    borderBlockEnd:target.pathname==="/login"?"2px solid #b41c19":null
                                }}
                                onMouseEnter={OnHover}
                                onMouseLeave={OffHover}
                            >
                                Login
                            </Link>
                            <Link
                                to={"/register"}
                                style={{
                                    fontSize: '18px',
                                    fontFamily: "Poppins-Regular",
                                    color: COLORS.text,
                                    marginBlock: 0,
                                    marginRight: "20px",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    borderBlockEnd:target.pathname==="/register"?"2px solid #b41c19":null
                                }}
                                onMouseEnter={OnHover}
                                onMouseLeave={OffHover}
                            >
                                Register
                            </Link>
                        </>
                        : null
                }
                <Link
                    to={"/tourpackage"}
                    style={{
                        fontSize: '18px',
                        fontFamily: "Poppins-Regular",
                        color: COLORS.text,
                        marginBlock: 0,
                        marginRight: "20px",
                        cursor: "pointer",
                        textDecoration: "none",
                        borderBlockEnd:target.pathname==="/tourpackage"?"2px solid #b41c19":null
                    }}
                    onMouseEnter={OnHover}
                    onMouseLeave={OffHover}
                >
                    Tour Package
                </Link>
                {
                    access !== null ?
                        <>
                            <Link
                                to={"/profile"}
                                style={{
                                    fontSize: '18px',
                                    fontFamily: "Poppins-Regular",
                                    color: COLORS.text,
                                    marginBlock: 0,
                                    marginRight: "20px",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                    borderBlockEnd:target.pathname==="/profile"?"2px solid #b41c19":null
                                }}
                                onMouseEnter={OnHover}
                                onMouseLeave={OffHover}
                            >
                                Profile
                            </Link>
                            <Link
                                to={"/"}
                                style={{
                                    fontSize: '18px',
                                    fontFamily: "Poppins-Regular",
                                    color: "#b41c19",
                                    marginBlock: 0,
                                    marginRight: "20px",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={OnHover}
                                onMouseLeave={OffHover}
                                onClick={() => {
                                    localStorage.clear()
                                    window.location.reload()
                                }}
                            >
                                Logout
                            </Link>
                        </>
                        : null

                }
            </div>
        </div>
    )
}
