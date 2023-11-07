import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { COLORS } from '../Assets/Theme';
import useMediaQuery from './useMediaQuery';
export default function HomeCard({
    count
}) {
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
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection:mobile?"column" : 'row',
                    marginTop: '70px',
                    height: mobile?null : '60vh',
                    width: '100vw',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignSelf: 'center',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: mobile?"100%" : '40%',
                    height:mobile?  '80vh':"60vh",
                    paddingBlock: '20px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                    <p style={{
                        fontSize:mobile?"24px" : '30px',
                        fontFamily: "Poppins-Regular",
                        color: "ButtonText",
                        textAlign: "left",
                        width: "90%",
                        marginBlock: 0,
                    }}>Fast and easy to rent a {Vehicle[count].name} </p>
                    <div style={{
                        flexWrap: 'wrap',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '100%',
                        height:mobile?"100%" : '80%',
                    }}>
                        <Controller
                            name='pickup'
                            control={control}
                            defaultValue=''
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Pickup Cannot be Empty',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <div style={{
                                    width: mobile?"90%" : "45%",
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                    }}>
                                        Pickup Location
                                    </p>
                                    <select
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            border: "2px solid lightGray",
                                            borderRadius: 6,
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 16,
                                            paddingInline: 10,
                                            color: COLORS.text
                                        }}
                                        placeholder='Choose Pickup Location*'
                                        // value={passwordText}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    >
                                        <option value="" disabled selected>Choose Pickup Location*</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </select>
                                    {errors.pickup && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.pickup.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='delivery'
                            control={control}
                            defaultValue=''
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Pickup Cannot be Empty',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <div style={{
                                    width: mobile?"90%" : "45%",
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                    }}>
                                        Drop Location
                                    </p>
                                    <select
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            border: "2px solid lightGray",
                                            borderRadius: 6,
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 16,
                                            paddingInline: 10,
                                            color: COLORS.text
                                        }}
                                        placeholder='Delivery*'
                                        // value={passwordText}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    >
                                        <option value="" disabled selected>Choose Delivery Location*</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </select>
                                    {errors.delivery && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.delivery.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='pickupdate'
                            control={control}
                            defaultValue=''
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Pickup Cannot be Empty',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <div style={{
                                    width: mobile?"90%" : "45%",
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                    }}>
                                        Pickup Date
                                    </p>
                                    <input
                                        style={{
                                            height: 35,
                                            width: "98%",
                                            border: "2px solid lightGray",
                                            borderRadius: 6,
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 16,
                                            // paddingInline: 10,
                                            color: COLORS.text
                                        }}
                                        placeholder='Pickup Date*'
                                        type='date'
                                        // value={passwordText}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.delivery && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.delivery.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='returndate'
                            control={control}
                            defaultValue=''
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Pickup Cannot be Empty',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <div style={{
                                    width: mobile?"90%" : "45%",
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                    }}>
                                        Delivery Date
                                    </p>
                                    <input
                                        style={{
                                            height: 35,
                                            width: "98%",
                                            border: "2px solid lightGray",
                                            borderRadius: 6,
                                            fontSize: 16,
                                            fontFamily: "Poppins-Regular",
                                            // paddingInline: 10,
                                            color: COLORS.text
                                        }}
                                        placeholder='Pickup Date*'
                                        type='date'
                                        // value={passwordText}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.delivery && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.delivery.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        <Controller
                            name='pickuptime'
                            control={control}
                            defaultValue=''
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Pickup Cannot be Empty',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <div style={{
                                    width: mobile?"90%" : "45%",
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                    }}>
                                        Pickup Time
                                    </p>
                                    <input
                                        style={{
                                            height: 35,
                                            width: "98%",
                                            border: "2px solid lightGray",
                                            borderRadius: 6,
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 18,
                                            // paddingInline: 10,
                                            color: COLORS.text
                                        }}
                                        placeholder='Pickup Date*'
                                        type='time'
                                        // value={passwordText}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.delivery && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.delivery.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='deliverytime'
                            control={control}
                            defaultValue=''
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Pickup Cannot be Empty',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <div style={{
                                    width: mobile?"90%" : "45%",
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                    }}>
                                        Delivery Time
                                    </p>
                                    <input
                                        style={{
                                            height: 35,
                                            width: "98%",
                                            border: "2px solid lightGray",
                                            borderRadius: 6,
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 16,
                                            // paddingInline: 10,
                                            color: COLORS.text
                                        }}
                                        placeholder='Pickup Date*'
                                        type='time'
                                        // value={passwordText}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.delivery && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.delivery.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <button style={{
                            height: '40px',
                            width: mobile?"90%" : '94%',
                            borderRadius: '8px',
                            border: 'none',
                            backgroundColor: '#b41c19',
                            color: '#ffffff',
                            fontFamily: "LEMONMILK-Bold",
                            fontSize: '20px',
                            letterSpacing: '0.5px',
                            paddingInline: 10,
                        }}>
                            Book Now
                        </button>

                    </div>
                </div>
                <img src={Vehicle[count].image} 
                style={{
                    height:mobile?"50%" : '100%',
                    width:mobile?"100%" : '50%',
                    objectFit:"contain"
                }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: mobile?"column":'row',
                    justifyContent:'space-evenly',
                    alignItems:mobile? "flex-start" : 'center',
                    height: mobile? null : '30px',
                    width: '100vw',
                    backgroundColor: '#b41c19',
                }}>
                <div style={{
                    display: 'flex',
                    justifyContent:mobile? "flex-start" : 'center',
                    alignItems: 'center',
                }}>
                    <MdDone style={{
                        borderInline: '2px solid white',
                        backgroundColor: 'green',
                    }} size={30} color="white" />
                    <p style={{
                        fontSize: mobile?"16px" : '18px',
                        fontFamily: "Poppins-Regular",
                        color: "white",
                        marginBlock: 0,
                        marginInlineStart: "10px",
                    }}>New Vehicles</p>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <MdDone style={{
                        borderInline: '2px solid white',
                        backgroundColor: 'green',
                    }} size={30} color="white" />
                    <p style={{
                        fontSize: mobile?"16px" : '18px',
                        fontFamily: "Poppins-Regular",
                        color: "white",
                        marginBlock: 0,
                        marginInlineStart: "10px",
                    }}>City Free Delivery</p>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <MdDone style={{
                        borderInline: '2px solid white',
                        backgroundColor: 'green',
                    }} size={30} color="white" />
                    <p style={{
                        fontSize: mobile?"16px" : '18px',
                        fontFamily: "Poppins-Regular",
                        color: "white",
                        marginBlock: 0,
                        marginInlineStart: "10px",
                    }}>Reservation and Road Assistance 24/7</p>
                </div>
            </div>
        </>
    )
}
