import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../redux/action';
import DiplayUserData from './DiplayUserData';
import './home.css'

const Homee = () => {
    const [open, setOpen] = useState(false);
    const [data, setdata] = useState({})

    const dispatch = useDispatch()
    const Reducer = useSelector(state => state.Reducer)
    useEffect(() => {
        dispatch(getUserData())
    }, [])

    const handleClickOpen = (val) => {
        setOpen(true);
        setdata(val)
    };
    const handleClose = () => {
        setOpen(false);
    };
    console.log(data)
    const str = "Do you understand why your Ads Campaigns are performing the way they are? Do you feel confident in the ROI you can get from this platform? I bring an analytics based approach to the discipline of creating great Facebook and Instagram";
    return (
        <>
            <div className="w-3/4 border border-gray-300 mx-auto my-2 rounded shadow">
                {
                    Reducer?.user?.map((val) => {
                        return (<>
                            <div className="border-b border-gray-300 h-52 bg-white py-4 px-6">
                                <div className="flex items-center gap-3 ">
                                    <img className="w-14 h-14 rounded-full" src="https://www.upwork.com/profile-portraits/c1Kflz7Z24wzzl9Eq8CL1Va6WaMWRY0Ct7Mze9RHslLzFOtFegqtZZZxGlAG0cK-jd" alt="Profile" />
                                    <div>
                                        <h4 className="text-red-800 font-bold capitalize cursor-pointer" onClick={() => handleClickOpen(val)}>{val?.name}.</h4>
                                        <p className="font-sans underline">Digital Marketing that Outperforms | Reports that Dazzle</p>
                                        <p className="font-sans text-gray-400">United States</p>
                                    </div>
                                </div>
                                <p className="font-sans text-sm m-2">{str.length > 175 ? `${str.substr(0, 175)}.....` : str}</p>
                                <div className="flex items-center gap-3 mx-1.5 my-4 overflow-y-auto hideScroll">
                                    <p className="font-sans text-sm bg-gray-300 px-3 text-gray-800 py-1 rounded-2xl min-w-max">FaceBook Ads Manager</p>
                                    <p className="font-sans text-sm bg-gray-300 px-3 text-gray-800 py-1 rounded-2xl min-w-max">FaceBook Ads Manager</p>
                                    <p className="font-sans text-sm bg-gray-300 px-3 text-gray-800 py-1 rounded-2xl min-w-max">FaceBook Ads Manager</p>
                                    <p className="font-sans text-sm bg-gray-300 px-3 text-gray-800 py-1 rounded-2xl min-w-max">FaceBook Ads Manager</p>
                                    <p className="font-sans text-sm bg-gray-300 px-3 text-gray-800 py-1 rounded-2xl min-w-max">FaceBook Ads Manager</p>
                                    <p className="font-sans text-sm bg-gray-300 px-3 text-gray-800 py-1 rounded-2xl min-w-max">FaceBook Ads Manager</p>
                                </div>
                            </div>
                        </>)
                    })
                }
            </div>
           <DiplayUserData handleClose={handleClose} open={open} data={data} />
        </>
    )
}

export default Homee