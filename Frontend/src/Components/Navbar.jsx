import React, { useContext } from 'react'
import { assets } from '../assets/admin_assets/assets'
import { food_list, FRassets } from '../assets/frontend_assets/FRassets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from './AllState'

const Navbar = ({ setShowLogin }) => {

    const { cartItem, getSubTotal, token, setToken } = useContext(StoreContext)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
        <div>
            <div className='flex w-screen py-2 px-25 items-center justify-between'>
                <Link to={'/'} className='w-1/10 '><img src={assets.logo} alt="" /></Link>

                <div className='w-4/12 flex justify-between text-lg ml-40'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600 border-b-2      border-orange-500 " : "text-black  "}>Home</NavLink>
                    <a href='#Menu-item' className={({ isActive }) => isActive ? "text-orange-600 border-b-2      border-orange-500" : "text-black "}>Menu</a>
                    <a href='#Menu-detail' className={({ isActive }) => isActive ? "text-orange-600 border-b-2      border-orange-500" : "text-black "}>Foods</a>
                    <a href='#Footer-box' className={({ isActive }) => isActive ? "text-orange-600 border-b-2      border-orange-500" : "text-black "}>Contact us</a>
                </div>

                <div className='flex justify-between text-xl w-3/14 items-center '>
                    <div>
                        <img src={FRassets.search_icon} alt="" className='w-9/12 cursor-pointer' />
                    </div>
                    <div className='relative'>
                        <NavLink to={'/cart'} ><img src={FRassets.basket_icon} alt="" className='w-10/12 cursor-pointer' /></NavLink>
                        <div className={getSubTotal() === 0 ? "" : 'absolute w-2 h-2 bg-amber-500 rounded-full left-5 bottom-5 '}></div>
                    </div>


                    {!token ? <button onClick={() => setShowLogin(true)} className='text-black bg-orange-400 px-10 py-1.5 rounded-xl cursor-pointer outline-none hover:scale-97'>Sign in</button>
                        :
                        <div className="relative group flex flex-col px-10 py-1.5 ">
                            {/* Profile Icon */}
                            <div className="relative">
                                <img src={FRassets.profile_icon} alt="" className="w-[90%] cursor-pointer" />
                            </div>

                            {/* Dropdown Menu */}
                            <div className="absolute hidden group-hover:flex flex-col w-[99%] items-center bg-orange-300 right-10 mt-10 z-10 border border-orange-600">
                                <div className="flex pt-3 pb-2 cursor-pointer hover:scale-95 transition">
                                    <img src={FRassets.basket_icon} alt="" className="w-[25%]" />
                                    <p className="text-base ml-2">Order</p>
                                </div>

                                <hr className="text-orange-600 w-11/12" />

                                <div onClick={logout} className="flex pt-3 pb-2 cursor-pointer hover:scale-95 transition">
                                    <img src={FRassets.logout_icon} alt="" className="w-[25%]" />
                                    <p className="text-base ml-2">Logout</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
