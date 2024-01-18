import React from 'react'
import img1 from "../images/19366.jpg"
import "../style/companygrad.css"
import GetStarted from '../components/GetStarted'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Company = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '29rem',
  };

  return (
<>
<Navbar/>
    <div className='pt-20 '>

      <div style={containerStyle} className="px-6">


        <h1 className='text-4xl pt-20 font-semibold text-li-blue'>What is Amtech Communication?</h1>
        <p className='pt-6 text-white text-justify'>
          Amtech Communication Services specialize in
          providing structural cabling solutions, fiber optic
          services and turnkey project delivery within the
          connectivity sector and the telecommunication
          industry.The company has experience outstanding
          success in providing project-base fiber installation
          services. The majority which are civil in nature,
          including planning of new fiber optic networks
          and route build.
        </p>
      </div>
      <p className='text-3xl pt-20 font-semibold text-blue text-center'>OUR HISTORY</p>
      <p className='pt-6 text-night-black px-6 text-justify'>
        Amtech Communication Services is a company
        incorporated on the 21st of August, 2017 by the
        CEO after many years of experience in the
        telecommunication industry.
        The company pride herself in many successful
        projects we have handled as a result of a solid
        base of highly educated engineers with valuable
      </p>
      <p className='text-3xl pt-20 font-semibold text-blue text-center'>KEYS TO SUCCESS</p>
      <p className='pt-6 text-night-black px-6 text-justify'>
        Amtech Communication Services has
        earned the trust of clients by dedication
        and hard work for in-time delivery of
        projects while working under safe
        conditions
      </p>

      <GetStarted />
    </div>
    <Footer/>
    </>
  )
}

export default Company