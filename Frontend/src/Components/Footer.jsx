import React from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'
import { assets } from '../assets/admin_assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <div className="bg-black h-80 px-28 mt-45 flex justify-between text-center text-white cursor-pointer">
                <div className="w-5/12 py-5 text-start">
                    <img src={assets.logo} alt="" />
                    <p className=''>Craving delicious meals delivery right to your doorstep? we make it easy to explore a wide variety of cuisines form your favorite local resturants. Fast, Fresh and always satisfying - order now and enjoy a hassle-free dining experience anytime, anywhere.</p>
                    <div className='flex pt-5 space-x-4'>
                        <img src={FRassets.twitter_icon} alt="" />
                        <img src={FRassets.facebook_icon} alt="" />
                        <img src={FRassets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="w-1/12 py-5 text-start">
                    <h1 className='text-4xl font-bold'>Company</h1>
                    <div className='py-4 space-y-1'>
                        <Link to={'/'}>Home</Link>
                        <h3 className='pt-1'>about us</h3>
                        <h3>Delivery</h3>
                        <h3>Privacy Policy</h3>
                    </div>
                </div>
                <div className="w-3/12 py-5  space-y-1">
                    <h1 className='text-3xl '>GET IN TOUCH</h1>
                    <div className='pt-5 space-y-1'>
                        <p>+1-212-4560-7890</p>
                        <p>tomato@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='py-2 bg-black'>
            <hr  className="w-10/12 ml-30 bg-gray-600 text-gray-600 h-0.1"/>
            </div>
        <div className='pl-30 bg-black text-gray-500 pb-2'><p>Copyright 2024 @Tomato.com-All Right Reserved</p></div>
        </div>
    )
}

export default Footer