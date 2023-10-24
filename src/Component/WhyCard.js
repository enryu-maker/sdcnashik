import React from 'react'

export default function WhyCard({
    Icon,
    title,
    description
}) {
    return (
        <div style={{
            height: '200px',
            width: '400px',
            backgroundColor: 'white',
            marginBlock: '20px',
            padding: '10px',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
            }}>
                <div style={{
                    display: 'flex',
                    height: '50px',
                    width: '50px',
                    backgroundColor: '#b41c19',
                    borderRadius: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon
                        size={30} color="#ffffff" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // height: '150px',
                    width: '300px',
                    alignSelf: 'center',
                }}>
                    <p style={{
                        fontSize: '20px',
                        fontFamily: "Poppins-Bold",
                        color: "#b41c19",
                        marginBlock: 0,
                    }}>{title}</p>
                    <p style={{
                        fontSize: '16px',
                        fontFamily: "Poppins-Regular",
                        color: "ButtonText",
                        marginBlock: 0,
                    }}>{description}</p>
                </div>

            </div>
        </div>
    )
}
