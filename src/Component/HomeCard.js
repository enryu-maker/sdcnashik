import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { COLORS } from '../Assets/Theme';
import useMediaQuery from './useMediaQuery';
import { useDispatch } from 'react-redux';
import { BookCar } from '../Store/action';
export default function HomeCard({
    count
}) {
    const dispatch = useDispatch();
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
    const [loading,setLoading] = React.useState(false)
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
                            name='pickupLocation'
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
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    >
                                        <option value="" disabled selected>Choose Pickup Location*</option>
                                        <option value="Nashik">Nashik</option>
                                    </select>
                                    {errors.pickupLocation && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.pickupLocation.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='dropLocation'
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
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    >
                                        <option value="" disabled selected>Choose Delivery Location*</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Nashik">Nashik</option>

                                    </select>
                                    {errors.dropLocation && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.dropLocation.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='pickupDate'
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
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.pickupDate && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.pickupDate.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='deliveryDate'
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
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.deliveryDate && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.deliveryDate.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

                        <Controller
                            name='pickupTime'
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
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.pickupTime && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.pickupTime.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='deliveryTime'
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
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.deliveryTime && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.deliveryTime.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='email'
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
                                        Email
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
                                        placeholder='User Email*'
                                        type='email'
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.email && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                        <Controller
                            name='mobile'
                            control={control}
                            defaultValue=''
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Name Cannot be Empty',
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <div style={{
                                    width: mobile?"90%" : "45%",
                                    marginBlockEnd:mobile?20:0
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        fontFamily: "Poppins-Regular",
                                        color: COLORS.text,
                                        marginBlock: 0,
                                    }}>
                                        Mobile
                                    </p>
                                    <input
                                        style={{
                                            height: 35,
                                            width: "98%",
                                            border: "2px solid lightGray",
                                            borderRadius: 6,
                                            fontFamily: "Poppins-Regular",
                                            fontSize: 16,
                                            color: COLORS.text
                                        }}
                                        placeholder='Mobile*'
                                        type='number'
                                        value={value}
                                        onChange={(text) => {
                                            onChange(text);
                                        }}
                                    />
                                    {errors.name && (
                                        <p style={{
                                            fontSize: '12px',
                                            fontFamily: "Poppins-Regular",
                                            color: "red",
                                            marginBlock: 0,
                                        }}>
                                            {errors.name.message}
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
                        }}
                        onClick={handleSubmit((data) => {
                            data["type"]= Vehicle[count].name;
                            console.log(data);
                            dispatch(BookCar(data,setLoading))
                        })}
                        >
                            {
                                loading?"Loading...":"Book Now"
                            }
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
