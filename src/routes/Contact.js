import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import GetStarted from '../components/GetStarted';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-20 px-6 text-gray-700'>
      <h1 className=' text-4xl pt-6 font-semibold text-blue'>Contact Us</h1>
      <p className='pt-6 '>No. 3 Venus Street<br/> Along Lokoja/ Kaduna Express Way,<br/> Gwagwalada Abuja.</p>
      <div className='flex items-center gap-2 pt-3'>
      <IoCallOutline/>
      <p>+2347062307335</p>
      </div>
      <div className='flex items-center gap-2 pt-2'>
      <AiOutlineMail/>
      <p>amtechcommunication.net@gmail.com</p>
      </div>
      <div className='px-3 pt-12 font-[510]'>
      <p className=' text-lg'>Send us a message</p>
      <form>
  <div className='pt-5'>
    <label htmlFor="firstName">First Name</label><br />
    <input type="text" id="firstName" className="w-full mt-2 rounded-lg border border-li-blue h-11" required />
  </div>

  <div className='pt-5'>
    <label htmlFor="lastName">Last Name</label><br />
    <input type="text" id="lastName" className="w-full mt-2 rounded-lg border border-li-blue h-12" required />
  </div>

  <div className='pt-5'>
    <label htmlFor="email">Email Address</label><br />
    <input type="email" id="email" className="w-full mt-2 rounded-lg border border-li-blue h-12" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
  </div>

  <div className='pt-5'>
    <label htmlFor="subject">Subject</label><br />
    <input type="text" id="subject" className="w-full mt-2 rounded-lg border border-li-blue h-12" required />
  </div>

  <div className='pt-5 '>
    <label htmlFor="message">Message</label><br />
    <textarea id="message" className="w-full rounded-lg border border-li-blue h-28 mt-2" required></textarea>
  </div>

  <div className='flex justify-end pt-8'>
    <input
      type="submit"
      name="submit"
      value="SUBMIT"
      className="w-24 h-10 bg-gray-700 text-white  rounded-lg"
    />
  </div>
</form>



      </div>
      <GetStarted/>
      
    </div>
    <Footer/>
    </>
  )
}

export default Contact