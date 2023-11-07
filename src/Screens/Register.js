import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Controller, set, useForm } from 'react-hook-form'
import { AiOutlineFileDone, AiOutlineUpload, AiOutlineUser } from 'react-icons/ai';
import Upload from '../Component/Upload';
import Loader from '../Component/Loader';
import useMediaQuery from '../Component/useMediaQuery';
export default function Register() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const [count, setCount] = React.useState(0);
    const [page, setPage] = React.useState(0);
    const [frontA, setFrontA] = React.useState(null);
    const [backA, setBackA] = React.useState(null);
    const [license, setLicense] = React.useState(null);
    const [page1, setPage1] = React.useState(false);
    const [page2, setPage2] = React.useState(false);
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
                Register
            </p>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: mobile?"88%" : "35%",
                height: "60vh",
                boxShadow: "5px 5px 10px #88888850",
                alignSelf: "center",
                borderRadius: "10px",
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '85%',
                }}>
                    <div style={{
                        height: 2,
                        width: '10%',
                        backgroundColor: page1 ? "green" : '#b41c19',
                    }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <button style={{
                            display: 'flex',
                            height: 40,
                            width: 40,
                            border: page ? "none" : "2px solid #b41c19",
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: "LEMONMILK-Bold",
                            color: "white",
                            backgroundColor: page1 ? "green" : "transparent",
                            letterSpacing: 2,
                        }}
                            onClick={() => {
                                setPage(0)
                            }}
                        >
                            <AiOutlineUser size={20} color={page1 ? "white" : "#b41c19"} />
                        </button>
                        <p style={{
                            fontSize: "12px",
                            fontFamily: "Poppins-Regular",
                            color: page1 ? "green" : "#b41c19",
                            marginBlock: "10px",
                        }}>
                            Personal Details
                        </p>
                    </div>
                    <div style={{
                        height: 2,
                        width: '20%',
                        backgroundColor: page1 ? "green" : '#b41c19',
                    }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <button style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 40,
                            border: page2 ? "none" : "2px solid #b41c19",
                            borderRadius: 25,
                            fontFamily: "LEMONMILK-Bold",
                            color: "white",
                            backgroundColor: page2 ? "green" : "transparent",
                        }}
                            onClick={() => {
                                setPage(0)
                            }}
                        >
                            <AiOutlineUpload size={20} color={page2 ? "white" : "#b41c19"} />
                        </button>
                        <p style={{
                            fontSize: "12px",
                            fontFamily: "Poppins-Regular",
                            color: page2 ? "green" : "#b41c19",
                            marginBlock: "10px",
                        }}>
                            Upload Documents
                        </p>
                    </div>
                    <div style={{
                        height: 2,
                        width: '10%',
                        backgroundColor: page2 ? "green" : '#b41c19',
                    }} />
                </div>
                {
                    page === 0 ?
                        <>
                            <Controller
                                name='name'
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
                                                color: "#212121"
                                            }}
                                            placeholder='Full Name*'
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
                                name='email'
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
                                                color: "#212121"
                                            }}
                                            placeholder='Email*'
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
                                                color: "#212121"
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
                                                color: "#212121"
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
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                width: '85%',
                            }}>
                                <button style={{
                                    height: 45,
                                    width: "40%",
                                    border: "none",
                                    boxShadow: "5px 5px 10px #88888850",
                                    borderRadius: 6,
                                    fontFamily: "LEMONMILK-Bold",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: "white",
                                    backgroundColor: "green",
                                    letterSpacing: 2,
                                }}
                                    onClick={() => {
                                        setPage(1)
                                        setPage1(true)
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </> :
                        <>
                            <Upload
                                value={frontA}
                                setValue={setFrontA}
                                title="Upload Your Front Side of Aadhar*"
                            />
                            <Upload
                                value={backA}
                                setValue={setBackA}
                                title="Upload Your Back Side of Aadhar*"
                            />
                            <Upload
                                value={license}
                                setValue={setLicense}
                                title="Upload Your License*"
                            />

                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '85%',
                            }}>
                                <button style={{
                                    height: 45,
                                    width: "40%",
                                    border: "none",
                                    boxShadow: "5px 5px 10px #88888850",
                                    borderRadius: 6,
                                    fontFamily: "LEMONMILK-Bold",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: "white",
                                    backgroundColor: "#b41c19",
                                    letterSpacing: 2,
                                }}
                                    onClick={() => {
                                        setPage(0)
                                        setPage1(false)
                                    }}
                                >
                                    Back
                                </button>
                                <button style={{
                                    height: 45,
                                    width: "40%",
                                    border: "none",
                                    boxShadow: "5px 5px 10px #88888850",
                                    borderRadius: 6,
                                    fontFamily: "LEMONMILK-Bold",
                                    fontSize: 18,
                                    paddingInline: 10,
                                    color: "white",
                                    backgroundColor: "green",
                                    letterSpacing: 2,
                                }}
                                    onClick={() => {
                                        setPage2(true)
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </>
                }
            </div>
            <Footer />
        </div>
    )
}
