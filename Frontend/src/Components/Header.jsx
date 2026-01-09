import React from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'
const Header = () => {
    return (
        <div>
            <div className=" w-screen py-4 px-23 " >
                <div className="ml-4 w-[96.9%] relative">
                    <img src={FRassets.header_img} alt="" className=' object-cover ' />

                    <div className="absolute top-10 left-10 text-white w-6/12">
                        <h1 className='text-6xl font-bold  leading-tight drop-shadow-lg'>Order your <br /> favourite food here</h1>

                        <p className='py-5'>Choose from a diverse imenu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise: Ourmission is to satisfy your cravings and clovate your dining experience, one delicious meal of a time.</p>

                      <a href='#Menu-detail'><button className='px-6 py-2 rounded-lg outline-none text-black bg-white hover:scale-96 cursor-pointer'>View Menu</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
