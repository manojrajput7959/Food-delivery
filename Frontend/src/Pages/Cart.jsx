import React, { useContext } from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'
// import { food_list } from '../assets/frontend_assets/FRassets'
import { StoreContext } from '../Components/AllState'
import { Link, useNavigate } from 'react-router-dom'
const Cart = () => {
  
  const {food_list,cartItem,deleteItem,getSubTotal,cartRemoveItem,url} = useContext(StoreContext)

  const navigate = useNavigate()
  return (
    <div>
      
     <div>
      <div className='flex ml-45 mt-10 h-8 justify-between sm:w-[70%] text-gray-500 border-b border-gray-300'>
        <h4>Items</h4>
        <h4>Title</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
        <h4>Remove</h4>
      </div>
        
      <div className='pl-45 '>
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(<>
              <div className='flex justify-between item-center text-center sm:w-[80.5%] pt-2 '>
                  {/* cart image */}
                <div className='sm:w-[13%]'>
                  <img src={url+"/image"+item.image} alt="" className='sm:w-[50%]'/>
                </div>
                
              <div className='sm:w-[13%] text-start pt-4'>
                <h3>{item.name}</h3>
              </div>
                
                <div className='sm:w-[13%] pr-10 pt-4'>
                  <h3>${item.price}</h3>
                </div>

                <div className='sm:w-[13%] pr-2 flex justify-evenly items-center'>
                  <img onClick={() => { cartRemoveItem(item._id) }} src={FRassets.remove_icon_red} className='sm:w-[20%] '/>
                  <h2>{cartItem[item._id]}</h2>
                  <img onClick={() => { addtoCart(item._id) }} src={FRassets.add_icon_green} className='sm:w-[20%] '/>

                </div>

                <div className='sm:w-[13%] pl-6 pt-4'>
                  <h2>${item.price*cartItem[item._id]}</h2>
                </div>
               
                <div className='sm:w-[13%] pl-20 pt-4 cursor-pointer' onClick={()=>{deleteItem(item._id)}}>
            <img src={FRassets.cross_icon} className='sm:w-[30%] '/>
                </div>
              </div>
              <hr className='sm:w-[80.5%] text-gray-300 mt-2'/>
              </>              
            )
          }
        })}
      </div>
        <div className='flex justify-end pr-60 pt-4'>
          <Link to="/"> <button className='flex items-center rounded-xl px-3 py-1.5 border-0.5 border-gray-800 outline:none text-white bg-gray-800 hover:bg-gray-900 hover:scale-97 cursor-pointer'><img src={FRassets.bag_icon} alt="" className='pr-2 sm:w-[30%]'/><h2 className='text-sm'>Add Items</h2></button></Link>
        </div>
     </div>
     

     {/* checkout-Box and promo code */}
     <div className='flex justify-between px-40 pt-10 '>
       <div className="w-6/12 ">
          <h1 className='text-4xl text-zinc-700'>Cart Totals</h1>
          <div className='w-9/12 '>
            <div className='flex justify-between py-2'>
              <h2>Subtotal</h2> <p>${getSubTotal()}</p>
            </div>
            <hr className='text-zinc-300'/>

            <div className='flex justify-between py-2'>
              <h2>Delivery Fee</h2> <p>${getSubTotal()===0?0:2}</p>
            </div>
            <hr className='text-zinc-800'/>

            <div className='flex justify-between pt-1'>
              <b>Total</b><b>${getSubTotal()===0?0:getSubTotal()+5}</b>
            </div>

          </div>
       </div>

       <div className="w-6/12">
            <h1>if you have a promo code. Enter it here</h1>
            <div className='flex'>
              <input type="text" placeholder='promo code'  className='bg-gray-300 pl-2 h-10 w-8/12'/> <button className='bg-black rounded-sm text-white w-3/12 h-10'>Submit</button>
            </div>
       </div>
     </div>

     <div className='pl-40 pt-5'>
      <button onClick={()=>{navigate('/Order')}} className='bg-orange-500 py-1 px-2 rounded-sm text-s font-medium hover:scale-97 cursor-pointer'>Proceed to checkout</button>
     </div>
    </div>
  )
}

export default Cart
