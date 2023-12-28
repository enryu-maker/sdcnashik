import React from 'react'
import Modal from 'react-modal'
import { RiCloseFill } from 'react-icons/ri'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Oval } from 'react-loader-spinner'
import { BookTour } from '../Store/action'
import useMediaQuery from './useMediaQuery'

export default function TourModal({
    setShow,
    show,
    dataf
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <Modal
            isOpen={show}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
                content: {
                    width: mobile ? null : '400px',
                    height: '300px',
                    margin: 'auto',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px #88888850',
                },
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                }}
            >
                <p
                    style={{
                        marginBlock: 0,
                        fontFamily: 'Poppins-Regular',
                        fontSize: '20px',
                    }}
                >
                    Book Your Tour
                </p>
                <RiCloseFill
                    style={{
                        height: '20px',
                        width: '20px',
                        color: '#b41c19',
                        cursor: 'pointer',
                    }}
                    onClick={() => setShow(false)}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: "90%",
                }}
            >
                <Controller
                    control={control}
                    name="name"
                    defaultValue=""
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <input
                            style={{
                                height: 35,
                                width: "80%",
                                border: "2px solid lightGray",
                                borderRadius: 6,
                                fontFamily: "Poppins-Regular",
                                fontSize: 18,
                                paddingInline: 10,
                                color: "black"
                            }}
                            placeholder="Name"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.name && (
                    <p style={{ color: 'red', marginBlock: 0, textAlign: 'center' }}>
                        This field is required
                    </p>
                )}
                <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <input
                            style={{
                                height: 35,
                                width: "80%",
                                border: "2px solid lightGray",
                                borderRadius: 6,
                                fontFamily: "Poppins-Regular",
                                fontSize: 18,
                                paddingInline: 10,
                                color: "black",
                            }}
                            placeholder="Email"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.email && (
                    <p style={{ color: 'red', marginBlock: 0, textAlign: 'center' }}>
                        This field is required
                    </p>
                )}
                <Controller
                    control={control}
                    name="phone"
                    defaultValue=""
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <input
                            style={{
                                height: 35,
                                width: "80%",
                                border: "2px solid lightGray",
                                borderRadius: 6,
                                fontFamily: "Poppins-Regular",
                                fontSize: 18,
                                paddingInline: 10,
                                color: "black"
                            }}
                            placeholder="Phone"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.phone && (
                    <p style={{ color: 'red', marginBlock: 0, textAlign: 'center' }}>
                        This field is required
                    </p>
                )}
                <button
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: "80%",
                        height: '40px',
                        borderRadius: '10px',
                        border: '1px solid #b41c19',
                        outline: 'none',
                        backgroundColor: '#b41c19',
                        color: '#fff',
                        fontFamily: 'Poppins-Bold',
                        fontSize: '18px',
                        cursor: 'pointer',
                    }}
                    onClick={handleSubmit((data) => {
                        data["TourName"] = dataf.name
                        data["Rs"] = dataf.price
                        console.log(data)
                        dispatch(BookTour(data, setLoading))
                        setShow(false)
                    }
                    )}
                >
                    {
                        loading ?
                            <Oval
                                color="#fff"
                                height={20}
                                width={20}
                            /> :

                            "Book Now"
                    }
                </button>
            </div>
        </Modal>
    )
}
