import React, { useContext } from 'react'
import { StoreContext } from '../Components/AllState'
import { useNavigate } from 'react-router-dom'

const PlaceHolder = () => {

  const { food_list, cartItem, deleteItem, getSubTotal, cartRemoveItem, addtoCart } = useContext(StoreContext)

  const navigate = useNavigate()
  return (
    <div>
      <div className='flex justify-between px-30 pt-23'>
        <div className='w-5/12'>
          <div><b className='text-3xl font-medium'>Deilvery information</b></div>
          {/* input-boxes */}
          <div>
            <div className=' flex justify-between pt-4'>  {/*name input */}
              <input type="text" placeholder='First name' className='w-full border-2 border-gray-200 pl-3 h-10 ' />
              <input type="text" placeholder='Last name' className='w-full border-2 pl-3 border-gray-200 -h-10 ml-3' />
            </div>
            {/* Email input */}
            <div className="pt-3">
              <input type="text" placeholder='Email' className='w-full border-2 border-gray-200 pl-3 h-10 ' />
            </div>
            {/* street input */}
            <div className='py-3'>
              <input type="text" placeholder='Street' className='w-full border-2 border-gray-200 pl-3 h-10 ' />
            </div>
            {/* city and state */}
            <div className='flex justify-between'>
              <input type="text" placeholder='City'className='w-full border-2 border-gray-200 pl-3 h-10 ' />
              <input type="text" placeholder='State'className='w-full border-2 border-gray-200 pl-3 h-10 ml-3' />
            </div>
            {/* zipcode and country */}
            <div className=' flex justify-between py-3'>
              <input type="number" placeholder='Zipcode' className='w-full border-2 border-gray-200 pl-3 h-10  '/>
              <input type="text" placeholder='Country' className='w-full border-2 border-gray-200 pl-3 h-10 ml-3'/>
            </div>

            {/* phone-Number */}
            <div className=' '>
              <input type="number" placeholder='Phone' className='w-full border-2 border-gray-200 pl-3 h-10 '/>
            </div>
          </div>
        </div>

        <div className="w-6/12 ">
          <h1 className='text-4xl text-zinc-700'>Cart Totals</h1>
          <div className='w-9/12 '>
            <div className='flex justify-between py-2'>
              <h2>Subtotal</h2> <p>${getSubTotal()}</p>
            </div>
            <hr className='text-zinc-300' />

            <div className='flex justify-between py-2'>
              <h2>Delivery Fee</h2> <p>{getSubTotal()===0?0:+5}</p>
            </div>
            <hr className='text-zinc-800' />

            <div className='flex justify-between pt-1'>
              <b>Total</b><b>${getSubTotal()===0?0:getSubTotal() + 5}</b>
            </div>
          </div>
          
     <div className=' pt-2 '>
      <button onClick={()=>{navigate('/Payment')}} className='bg-orange-500 py-1 px-2 rounded-sm text-s font-medium hover:scale-97 cursor-pointer'>Proceed to Payment</button>
     </div>
        </div>
      </div>
      
      
     
    </div>
  )
}

export default PlaceHolder