import React from 'react'
import { Circles } from 'react-loader-spinner'
import Modal from 'react-modal'
export default function Loader({
    loading
}) {
    return (
        <Modal
            isOpen={loading}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
                content: {
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "white",
                height: "100px",
                width: "100px",
                borderRadius: "50%",
            }}>
                <Circles
                    height="80"
                    width="80"
                    color="#b41c19"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </Modal>
    )
}
