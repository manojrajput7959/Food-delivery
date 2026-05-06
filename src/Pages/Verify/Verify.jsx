import React, { useContext } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom"
import { StoreContext } from '../../Components/AllState'
import { useEffect } from 'react'
import axios from 'axios'

const Verify = () => {

    const [searchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const navigate = useNavigate()
    const { url } = useContext(StoreContext)



    const verifyPayment = async () => {
        const response = await axios.post(`${url}/api/food/verify`, { success, orderId })
        if (response.data.success) {
            navigate("/myorders")
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
       verifyPayment()
    },[])

    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-gray-50">

            {/* Spinner */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>

            {/* Text */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-center">
                Verifying your order...
            </p>

        </div>
    )
}

export default Verify