import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Components/AllState'
import axios from 'axios'
import { assets } from "../assets/admin_assets/assets"

const Myorders = () => {

    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([])

    const fetchOrders = async () => {
        const response = await axios.post(`${url}/api/food/userorders`, {}, { headers: { token } })
        setData(response.data.data)
        console.log(response.data.data)

    }

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    }, [token])

    return (
        <div>
          <div className="min-h-screen bg-gray-50 px-3 py-4 lg:mt-[10vh]">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
      My Orders
    </h2>

    <div className="space-y-4">
      {data.map((order, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm p-3 sm:p-4"
        >

          <div className="flex items-center gap-3">

            {/* ICON */}
            <img
              src={assets.parcel_icon}
              alt=""
              className="w-10 h-10 flex-shrink-0"
            />

            {/* ITEMS (Highest Priority) */}
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-700 truncate">
                {order.items.map((item, i) =>
                  i === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>

              <p className="text-xs text-gray-500">
                {order.items.length} items
              </p>
            </div>

            {/* PRICE (Fixed Width) */}
            <div className="w-[70px] sm:w-[90px] text-right">
              <p className="text-sm sm:text-base font-semibold text-gray-800">
                ₹{order.amount}
              </p>
            </div>

            {/* STATUS (Fixed Width) */}
            <div className="w-[90px] sm:w-[140px] flex items-center gap-1">
              <span
                className={`text-sm ${
                  order.status === "Delivered"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                ●
              </span>
              <span className="text-xs sm:text-sm truncate">
                {order.status}
              </span>
            </div>

            {/* BUTTON (Fixed Width) */}
            <div className="w-[80px] sm:w-[100px] text-right">
              <button onClick={fetchOrders} className="w-full text-xs sm:text-sm px-2 py-1.5 bg-orange-500 text-white rounded-md active:scale-95">
                Track
              </button>
            </div>

          </div>

        </div>
      ))}
    </div>

  </div>
</div>
        </div>
    )
}

export default Myorders
