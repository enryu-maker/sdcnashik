import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import useMediaQuery from './useMediaQuery';
export default function Footer() {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: mobile ? 'column' : "row",
                width: '100vw',
                // height: '30vh',
                backgroundColor: "#212121",
                alignItems: "center",
                justifyContent: "center",
                marginBlockStart: "100px",
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: mobile ? 'column' : "row",
                width: mobile ? "100%" : "88%",
                alignSelf: "center",
                justifyContent: "space-between",
                marginBlock: 20
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: mobile ? "flex-start" : "flex-end",
                    width: mobile ? "90%" : "22%",
                    alignSelf: "center",
                }}>
                    <p style={{
                        fontSize: "20px",
                        fontFamily: "LEMONMILK-Bold",
                        color: "#ffffff",
                        // marginBlock: 0,
                    }}>
                        About <span style={{
                            color: "#b41c19",
                        }}>SDC</span>
                    </p>
                    <p style={{
                        fontSize: "16px",
                        fontFamily: "Poppins-Regular",
                        color: "#ffffff",
                        textAlign: mobile ? "justify" : "right",
                        marginBlock: 0,
                    }}>
                        SELF DRIVE CARS NASHIK (is unit of Agrawal Group) is Nashik's first self drive car rental service provider. We provide self drive car rental services in Mumbai, Pune, Nashik, Shirdi, Nagpur and all over India.
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: mobile ? "flex-start" : "flex-end",
                    width: mobile ? "90%" : "22%",
                    alignSelf: "center",
                }}>
                    <p style={{
                        fontSize: "20px",
                        fontFamily: "LEMONMILK-Bold",
                        color: "#ffffff",
                        // marginBlock: 0,
                    }}>
                        Contact
                    </p>
                    <p style={{
                        fontSize: "16px",
                        fontFamily: "Poppins-Regular",
                        color: "#ffffff",
                        textAlign: mobile ? "justify" : "right",
                        marginBlock: 0,
                    }}>
                        7385309348
                        Cabin no 8, jagdish sankul kbt circle above welness forever, Nashik, Maharashtra 422005
                        selfdrivecars003@gmail.com
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: mobile ? "flex-start" : "flex-end",
                    width: mobile ? "90%" : "24%",
                    alignSelf: "center",
                }}>
                    <p style={{
                        fontSize: "20px",
                        fontFamily: "LEMONMILK-Bold",
                        color: "#ffffff",
                        // marginBlock: 0,
                    }}>
                        Service Hours
                    </p>
                    <p style={{
                        fontSize: "16px",
                        fontFamily: "Poppins-Regular",
                        color: "#ffffff",
                        marginBlock: 0,
                        textAlign: mobile ? "justify" : "right",
                    }}>
                        Monday - Sunday: 9:00 AM - 11:00 PM
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: mobile ? "flex-start" : "flex-end",
                    width: mobile ? "90%" : "22%",
                    alignSelf: "center",
                }}>
                    <p style={{
                        fontSize: "20px",
                        fontFamily: "LEMONMILK-Bold",
                        color: "#ffffff",
                    }}>
                        SOCIAL NETWORK
                    </p>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}>
                        <div style={{
                            display: "flex",
                            height: "50px",
                            width: "50px",
                            backgroundColor: "#b41c19",
                            borderRadius: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <AiFillFacebook size={30} color="#ffffff" />
                        </div>
                        <div style={{
                            display: "flex",
                            height: "50px",
                            width: "50px",
                            backgroundColor: "#b41c19",
                            borderRadius: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "10px",
                        }}>
                            <AiFillTwitterCircle size={30} color="#ffffff" />
                        </div>
                        <div style={{
                            display: "flex",
                            height: "50px",
                            width: "50px",
                            backgroundColor: "#b41c19",
                            borderRadius: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "10px",
                        }}>
                            <AiFillInstagram size={30} color="#ffffff" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
