import React from 'react'
import { COLORS } from '../Assets/Theme'
import useMediaQuery from './useMediaQuery'

export default function WhyCard({
    Icon,
    title,
    description
}) {
    const mobile = useMediaQuery('(max-width: 768px)');
    return (
        <div style={{
            // height: '250px',
            width: '400px',
            marginBlock: '20px',
            padding: '10px',
            alignSelf: 'flex-start',
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
                        fontSize: mobile? "18px" : '20px',
                        fontFamily: "Poppins-Bold",
                        color: "#b41c19",
                        marginBlock: 0,
                    }}>{title}</p>
                    <p style={{
                        fontSize: mobile?"14px" : '16px',
                        fontFamily: "Poppins-Regular",
                        color: COLORS.text,
                        marginBlock: 0,
                        textAlign: 'justify',
                    }}>{description}</p>
                </div>

            </div>
        </div>
    )
}
