import React from 'react'
import icon from "../images/icon.png"
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate = useNavigate()
  const handleRoute = () => {
      navigate("/signup")
  }

  const loginMain = () => {
    navigate("/main")
  }
  return (
    <div>
<div className='bg-light-blue pt-10 '>
        <div className='flex justify-center'>
        <img src={icon} alt="My Image" className='w-32 h-32  cursor-pointer' />
        </div>
      
        <p className='text-blue font-semibold text-center text-xl relative bottom-8'>Sign in to your account</p>
        <p className='relative bottom-8 text-center'>Or <span onClick={handleRoute}
         className='text-sm cursor-pointer text-blue'
        >get started now</span></p>
    </div>

    <div className='px-6 pt-6'>
        <div className=''>
        <label>Email address</label><br/>
        <input type='text'  className='w-full h-11 rounded-lg mt-2 mb-5 border border-li-blue'/>
        </div>

        

        <div className=''>
        <label>Password</label><br/>
        <input type='text'  className='w-full h-11 rounded-lg mt-2 mb-5 border border-li-blue'/>
        </div>

        <div className='flex justify-between text-sm'>
          <p>Remember me</p>
          <p className='text-blue'>Forgot your Password?</p>
        </div>

        <button onClick={loginMain} className='w-full h-11 rounded-lg mt-5 text-white bg-blue'>SIGN IN</button>
        <div className="flex items-center pt-3">
      <div className="w-1/2 h-[1px] bg-gray-300"></div>
      <div className="mx-4 text-gray-500">Or</div>
      <div className="w-1/2 h-[1px] bg-gray-300"></div>
    </div>

    <div className='w-full h-14 flex justify-center pt-3'>
        

        <p className='flex items-center justify-center bg-gray-700 w-full text-white
        rounded-sm'>Log in with google</p> 
    
    </div>
    <div className='mt-32 w-full h-[1px] bg-gray-300'/>

<p className='text-center py-4'>&copy; 2024 Amtech. All Rights reserved.</p>
        </div>

    </div>
  )
}

export default Signin