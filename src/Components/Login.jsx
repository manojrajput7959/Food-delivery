import React, { useContext, useEffect, useState } from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'
import { StoreContext } from './AllState'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = ({ setShowLogin }) => {


  const { url ,token, setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Sign Up")

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })


  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };




  // register api -------------------------------------------------

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const endpoint = currState === "Sign Up" ? `${url}/api/user/sign` : `${url}/api/user/login`;
      const response = await axios.post(endpoint, data); 
      console.log(response.data);
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
          setShowLogin(false)
        }
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };


  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-opacity-60">
      <form onSubmit={submitData} className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[25%] bg-white border rounded-2xl shadow-lg p-6 sm:p-8 space-y-5 transition-all duration-300">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold">{currState}</h2>
          <img
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition"
            onClick={() => setShowLogin(false)}
            src={FRassets.cross_icon}
            alt="close"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-3">
          {currState === "Sign Up" ?
            <input
              className="border rounded-lg w-full h-10 px-3 placeholder-gray-600 outline-none border-gray-300"
              type="text"
              //   value={getSign}
              onChange={handleInputChange}
              name='name'
              placeholder="Your Name"
              required
            />
            : <></>}
          <input
            className="border rounded-lg w-full h-10 px-3 placeholder-gray-600 outline-none border-gray-300"
            // type="email"
            // value={getSign}
            onChange={handleInputChange}
            name='email'
            placeholder="Your Email"
            required
          />
          <input
            className="border rounded-lg w-full h-10 px-3 placeholder-gray-600 outline-none border-gray-300"
            type="password"
            // value={getSign}
            onChange={handleInputChange}
            name='password'
            placeholder="Your Password"
            required
          />
        </div>


        {/* Button */}
        <button type='submit' className="w-full h-10 rounded-lg font-semibold text-lg bg-orange-500 hover:bg-orange-600 transition">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>


        {/* Terms */}
        <div className="flex items-start justify-center text-sm sm:text-base pt-2">
          <input className="mt-1 scale-125 accent-orange-500" type="checkbox" required />
          <p className="pl-2 text-gray-600">
            By continuing, I agree to the Terms of Use & Privacy Policy
          </p>
        </div>



        {/* Switch between Login / Signup */}
        <div className="text-center text-sm sm:text-base">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span
                className="text-orange-500 font-medium cursor-pointer"
                onClick={() => setCurrState("Sign Up")}>
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                className="text-orange-500 font-medium cursor-pointer"
                onClick={() => setCurrState("Login")}
              >
                Login
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
