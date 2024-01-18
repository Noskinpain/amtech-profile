import React from 'react'

const GetStarted = () => {
  return (
    <div>
         <p className='text-3xl pt-20 font-semibold text-night-black text-center'>Ready to Connect?</p>
            <div className='flex justify-center gap-10 pt-8 pb-20'>
                <button className='w-32 h-12 border hover:bg-blue hover:text-white border-blue rounded-lg text-blue '>Login</button>
                <button className='w-32 h-12 bg-blue hover:text-black text-white rounded-lg'>Get Started</button>
            </div>
    </div>
  )
}

export default GetStarted