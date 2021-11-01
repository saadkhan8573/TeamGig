import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';

const DiplayUserData = ({ handleClose, open }) => {

    
    return (
        <>
            <div className="w-10/12 ml-auto bg-white h-screen z-10 absolute top-0 right-0 transition-transform" style={{ transform: `translateX(${open ? '0%' : '100%'})`, transition: "" }}>
                <p onClick={handleClose} className="absolute top-4 left-4 cursor-pointer">
                    <AiOutlineLeft className="text-3xl text-red-800" />
                </p>
            </div>
        </>
    )
}

export default DiplayUserData