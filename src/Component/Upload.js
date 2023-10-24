import React from 'react'
import { AiOutlineFileDone, AiOutlineUpload } from 'react-icons/ai';
export default function Upload({
    value,
    setValue,
    title,
}) {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    return (
        <>
            <button
                style={{
                    justifyContent: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 43,
                    width: "85%",
                    border: "2px solid lightGray",
                    borderRadius: 6,
                    fontFamily: "Poppins-Regular",
                    fontSize: 16,
                    paddingInline: 10,
                    color:value===null?"lightGray" : "#212121",
                    backgroundColor: "transparent"
                }}
                onClick={handleClick}
            >
                {
                    value === null ?
                        <AiOutlineUpload style={{ marginInlineEnd: "5px" }} size={20} color="#b41c19" />
                        :
                        <AiOutlineFileDone style={{ marginInlineEnd: "5px" }} size={20} color="green" />
                }
                {
                    value === null ?
                        title
                        :
                        value.name
                }
            </button>
            <input
                type="file"
                onChange={(e) => {
                    setValue(e.target.files[0])
                }}
                ref={hiddenFileInput}
                style={{ display: 'none' }} // Make the file input element invisible
            />
        </>
    )
}
