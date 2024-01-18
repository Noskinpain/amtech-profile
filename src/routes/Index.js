import React from 'react'
import {  useNavigate } from 'react-router-dom'
import img1 from "../images/44025.jpg"
import img2 from "../images/6736639.jpg"
import img3 from "../images/5995357.jpg"
import img4 from "../images/3293477.jpg"
import img5 from "../images/okglobal.png"
import img6 from "../images/partner.png"
import img7 from "../images/sacalma.png"
import img8 from "../images/comm.png"
import img9 from "../images/force.png"
import data from '../data/serviceData'
import userReviews from '../data/userReview'
import ReviewSlider from '../components/ReviewSlider'
import { BsSuitDiamondFill } from "react-icons/bs";
import GetStarted from '../components/GetStarted'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Index = () => {
  const Navigate = useNavigate()
    const handleClick = () => {
        Navigate("/signup")
    }
    return (
        <>
        <Navbar/>
            <div className='px-6 '>
                <div className='pt-24 text-5xl  font-semibold text-night-black'>Welcome to<br />
                    <span className='text-blue'>Amtech</span></div>
                <p className='pt-5  text-gray-800'>
                    Amtech Communication Services specialize in providing structural cabling solutions,
                    fiber optic services and turnkey project delivery within the connectivity sector and
                    the telecommunication industry.
                </p>
                <button 
                onClick={handleClick}
                className='mt-5 w-32 h-12 bg-sky-blue text-white font-bold text-sm rounded-xl'
                >GET STARTED</button>
            </div>
            <img src={img1} alt="My Image" className='w-full h-full pt-2' />
            <div className='bg-light-blue pt-14  px-6 pb-16'>
                <p className='text-4xl font-semibold text-blue text-center'>Why Choose Us?</p>
                <p className='pt-5 text-gray-800 text-center'>
                    Amtech Communication Services has earned the trust of
                    clients by dedication and hard work for in-time delivery of
                    projects while working under safe conditions.</p>

                {/*box section1....*/}
                <div className='bg-white text-gray-800 cursor-pointer hover:bg-li-blue hover:text-white px-4 pt-4 h-64 w-full mt-10 rounded-lg shadow-lg'>
                    <img src={img2} alt="My Image" className='w-24 h-24' />
                    <p className='py-3 text-4xl '>Stability</p>
                    <p className='  '>We are a privately owned profitable company
                        incorporated in 2016 demonstrating consistent yearly growth</p>
                </div>

                {/*box section2....*/}
                <div className='bg-white text-gray-800 cursor-pointer hover:bg-li-blue hover:text-white px-4 pt-4 h-64 w-full mt-10 rounded-lg shadow-lg'>
                    <img src={img3} alt="My Image" className='w-24 h-24' />
                    <p className='py-3 text-4xl'>Experience</p>
                    <p className=''>Our seasoned technician and engineers are so
                        vast in knowledge on field realities to give a reliable service.</p>
                </div>

                {/*box section3....*/}
                <div className='bg-white text-gray-800 cursor-pointer hover:bg-li-blue hover:text-white px-4 pt-4 h-64
                     w-full mt-10 rounded-lg shadow-lg '>
                    <img src={img4} alt="My Image" className='w-24 h-24' />
                    <p className='py-3 text-4xl'>Save Time</p>
                    <p className=''>
                        Projects are delivered in time or mostly before deadline.</p>
                </div>

            </div>
            {/*Service section....*/}
            <div className=' pt-12 pb-20 px-6 '>
                <p className='text-4xl font-semibold text-night-black text-center'>Our Services</p>

                {/*Services list....*/}
                <div className="">
                    {data.map((item, index) => (
                        <div key={index} className="bg-white cursor-pointer hover:shadow-xl gap-10 px-4 justify-center flex items-center h-64 w-full mt-10 rounded-lg shadow-lg">
                            <div className='text-8xl text-blue '>{item.icon}</div>
                            <div>
                                <p className="text-xl pb-2">{item.title}</p>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {/*....getting started section*/}
            <div className='bg-blue h-fit px-6 pt-10'>

                <img src={img8} alt="satelite" className='w-full h-48 object-contain ' />
                <p className='text-3xl pt-2 font-semibold text-white text-start'>
                    Unlock seamless connectivity with Amtech Communication Services.
                </p>
                <p className='pt-6 text-li-blue text-xl'>Getting Started is Easy:</p>
                <div className='flex gap-1 items-center text-white pt-5 pb-1'>
                    <BsSuitDiamondFill className="text-li-blue" />
                    <p>Sign Up or Log In if you're already a member.</p>
                </div>
                <div className='flex gap-1 items-center text-white pb-1'>
                    <BsSuitDiamondFill className="text-li-blue" />
                    <p>Add funds to your e-wallet securely.</p>
                </div>

                <div className='flex gap-1 items-center text-white pb-1'>
                    <BsSuitDiamondFill className="text-li-blue" />
                    <p>Enjoy Hassle-Free Transactions.</p>
                </div>

                <button className='w-full h-12 mt-5 mb-12 bg-li-blue  rounded-xl'>BEGIN NOW</button>

            </div>
            {/*Review section....*/}
            <div className=' py-12 px-6 bg-light-blue'>
                <p className='text-4xl font-semibold text-blue text-center'>They Love Us</p>

                <ReviewSlider userReviews={userReviews} />
                {/*Clients section....*/}
                <p className='text-4xl pt-32 font-semibold text-blue text-center'>Our Clients</p>
                <div className="grid grid-cols-2 justify-center px-6 gap-10 w-full items-center pt-5">
                    <img src={img5} alt="My Image" className='w-48 h-24 object-contain' />
                    <img src={img6} alt="My Image" className='w-36 h-24 object-contain' />
                    <img src={img7} alt="My Image" className='w-36 h-24 object-contain' />
                    <img src={img9} alt="My Image" className='w-36 h-24 object-contain' />
                </div>

            </div>
            {/*connect with us section....*/}
            <GetStarted />
         <Footer/>
        </>
    )
}

export default Index