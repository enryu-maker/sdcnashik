import React from 'react'
import { IMAGES } from '../Assets/Image'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { COLORS } from '../Assets/Theme'
import useMediaQuery from './useMediaQuery'

export default function Header({
    setCount
}) {
    const mobile = useMediaQuery('(max-width: 768px)')
    const [show, setShow] = React.useState(false)
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
        <>
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
                    width: "30vw",
                }}>
                    <img 
                    alt='icon'
                    src={IMAGES.icon}
                        style={{
                            height: '70px',
                            width: '100px',
                        }}

                    />
                    {
                        mobile ?
                            null :

                            <p style={{
                                fontSize: '20px',
                                fontFamily: "LEMONMILK-Bold",
                                color: COLORS.text,
                                // marginBlock:0,
                            }}>SELF DRIVE CARS NASHIK</p>
                    }
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '70px',
                    width: "70vw",
                    transition: "all 3s ease",
                }}>
                    {
                        mobile ?
                            <img
                                alt='menu'
                                src={IMAGES.menu}
                                style={{
                                    height: 30,
                                    width: 30,
                                    marginRight: "20px",
                                }}
                                onClick={() => {
                                    setShow(!show)
                                }}
                            />
                            :
                            <>
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
                                        borderBlockEnd: target.pathname === "/tourpackage" ? "2px solid #b41c19" : null
                                    }}
                                    onMouseEnter={OnHover}
                                    onMouseLeave={OffHover}
                                >
                                    Tour Package
                                </Link>
                                <Link
                                    to={"/commercialpackage"}
                                    style={{
                                        fontSize: '18px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                        marginRight: "20px",
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        borderBlockEnd: target.pathname === "/commercialpackage" ? "2px solid #b41c19" : null
                                    }}
                                    onMouseEnter={OnHover}
                                    onMouseLeave={OffHover}
                                >
                                    Corporate Package
                                </Link>
                            </>
                    }
                </div>
            </div>
            {
                show ?
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100vw',
                        marginTop: "70px",
                        transition: "all 3s easein",
                        boxShadow: "5px 5px 10px #88888850",
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width:"90%",
                            height: "25vh",
                            alignSelf: "center",
                            marginBlock: "20px",
                            justifyContent: "space-evenly",
                            alignItems: "flex-start",
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
                                    setShow(false)
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
                                    setShow(false)
                                }}
                            >
                                Rent A Bike
                            </Link>
                            <Link
                                to={"/tourpackage"}
                                style={{
                                    fontSize: '18px',
                                    fontFamily: "Poppins-Regular",
                                    color: COLORS.text,
                                    marginBlock: 0,
                                    marginRight: "20px",
                                    cursor: "pointer",
                                    width: "50%",
                                    textDecoration: "none",
                                    borderBlockEnd: target.pathname === "/tourpackage" ? "2px solid #b41c19" : null
                                }}
                                onMouseEnter={OnHover}
                                onMouseLeave={OffHover}
                                onClick={() => {
                                    setShow(false)
                                }}
                            >
                                Tour Package
                            </Link>
                            <Link
                                to={"/commercialpackage"}
                                style={{
                                    fontSize: '18px',
                                    fontFamily: "Poppins-Regular",
                                    color: COLORS.text,
                                    marginBlock: 0,
                                    marginRight: "20px",
                                    cursor: "pointer",
                                    width: "70%",
                                    textDecoration: "none",
                                    borderBlockEnd: target.pathname === "/commercialpackage" ? "2px solid #b41c19" : null
                                }}
                                onMouseEnter={OnHover}
                                onMouseLeave={OffHover}
                                onClick={() => {
                                    setShow(false)
                                }}
                            >
                                Commercial Package
                            </Link>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}
