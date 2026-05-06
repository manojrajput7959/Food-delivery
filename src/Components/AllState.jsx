import React, { createContext, useEffect, useState } from 'react'
// import { food_list } from '../assets/frontend_assets/FRassets'
import axios from 'axios'


export const StoreContext = createContext(null)

const AllState = (props) => {

    const [cartItem, setCartItem] = useState({})
    const [token, setToken] = useState("")

    const [food_list, setfoodList] = useState([])

    const url = "http://localhost:4000"

    const addtoCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }))

        }

        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if (token) {
            await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } })
        }
    }


    const cartRemoveItem = async(itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        if (token) {
            await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } })
        }
    }

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem])

    const deleteItem = (itemId) => {
        setCartItem(prev => ({ ...prev, [itemId]: 0 }))

    }

    // text-shadow-zinc-800 text-shadow-md

    const getSubTotal = () => {
        let totalAmount = 0
        for (const item in cartItem) {  // item = key(id) ,  cartItem = whole object
            if (cartItem[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItem[item]  // cartItem[item] = value (quantity)          
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addtoCart,
        cartRemoveItem,
        deleteItem,
        getSubTotal,
        url,
        token,
        setToken,
    }

    const getAllFood = async () => {

        const response = await axios.get("http://localhost:4000/api/food/List");
        setfoodList(response.data.data)
    }

    const loadCartData = async  (token) => {
        const response = await axios.post(`${url}/api/cart/get`,{}, { headers: { token } })
          setCartItem(response.data.cartData || {})
    }

    useEffect(() => {
        async function loadData() {
            await getAllFood();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage. getItem("token"))
            }
        }

        loadData()
    }, [])

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default AllState
