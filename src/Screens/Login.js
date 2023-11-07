import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Controller, useForm } from 'react-hook-form'
import Loader from '../Component/Loader';
import useMediaQuery from '../Component/useMediaQuery';
export default function Login() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [count, setCount] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Loader loading={loading} />
            <Header count={count} setCount={setCount} />
            <p style={{
                fontFamily: "LEMONMILK-Bold",
                fontSize: '40px',
                textAlign: 'center',
                marginTop: '100px',
                color: "#b41c19",
            }}>
                Login
            </p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: mobile?"88%" : "35%",
                height: "40vh",
                boxShadow: "5px 5px 10px #88888850",
                alignSelf: "center",
                borderRadius: "10px",
            }}>
                <Controller
                    name='mobile'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: {
                            value: true,
                            message:
                                'Mobile Cannot be Empty',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <input
                                style={{
                                    height: 35,
                                    width: "80%",
                                    border: "2px solid lightGray",
                                    borderRadius: 6,
                                    fontFamily: "Poppins-Regular",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: "lightgray"
                                }}
                                placeholder='Mobile*'
                                // value={passwordText}
                                onChangeText={(text) => {
                                    onChange(text);
                                }}
                            />
                            {errors?.mobile && (
                                <p style={{

                                }}>
                                    {errors?.mobile?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: {
                            value: true,
                            message:
                                'Mobile Cannot be Empty',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <>
                            <input
                                style={{
                                    height: 35,
                                    width: "80%",
                                    border: "2px solid lightGray",
                                    borderRadius: 6,
                                    fontFamily: "Poppins-Regular",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: "lightgray"
                                }}
                                placeholder='Password*'
                                // value={passwordText}
                                onChangeText={(text) => {
                                    onChange(text);
                                }}
                            />
                            {errors?.password && (
                                <p style={{

                                }}>
                                    {errors?.password?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                <button style={{
                    height: 45,
                    width: "45%",
                    border: "none",
                    boxShadow: "5px 5px 10px #88888850",
                    borderRadius: 6,
                    fontFamily: "LEMONMILK-Bold",
                    fontSize: 18,
                    paddingInline: 10,
                    color: "white",
                    backgroundColor: "green",
                    letterSpacing: 2,
                }}>
                    Login
                </button>
            </div>
            <Footer />
        </div>
    )
}
