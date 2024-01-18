import React from 'react'
import icon from "../images/icon.png"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const handleRoute = () => {
        navigate("/signin")
    }
  return (
    <>
    <div className='bg-light-blue pt-10 '>
        <div className='flex justify-center'>
        <img src={icon} alt="My Image" className='w-32 h-32  cursor-pointer' />
        </div>
      
        <p className='text-blue font-semibold text-center text-xl relative bottom-8'>Get Started</p>
        <p className='relative bottom-8 text-center'>Create an account</p>
    </div>
    <div className='px-6 pt-6'>
       <div className=''>
        <label>First Name</label><br/>
        <input type='text'  className='w-full h-11 rounded-lg mt-2 mb-5 border border-li-blue'/>
        </div>

        <div className=''>
        <label>Last Name</label><br/>
        <input type='text'  className='w-full h-11 rounded-lg mt-2 mb-5  border border-li-blue'/>
        </div>

        <div className=''>
        <label>Email address</label><br/>
        <input type='text'  className='w-full h-11 rounded-lg mt-2 mb-5 border border-li-blue'/>
        </div>

        <div className=''>
        <label>Phone Number</label><br/>
        <input type='text'  className='w-full h-11 rounded-lg mt-2 mb-5 border border-li-blue'/>
        </div>

        <div className=''>
        <label>Password</label><br/>
        <input type='text'  className='w-full h-11 rounded-lg mt-2 mb-5 border border-li-blue'/>
        </div>

        <button  className='w-full h-11 rounded-lg mt-5 text-white bg-blue'>CREATE ACCOUNT</button>

        <p className='text-gray-500 pt-4'>Already have an account? <span onClick={handleRoute} className='
        text-blue pl-2 cursor-pointer'>Sign in</span></p>


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

    
    </>
  )
}

export default Signup