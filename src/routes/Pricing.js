import React, { useState, useEffect } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { BsSuitDiamondFill } from 'react-icons/bs';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState('FOC planning');
  const [content, setContent] = useState("");
  const [commonContent, setCommonContent] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSelectChange = async (e) => {
    setLoading(true);


    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);


    // Simulate loading for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Helper function to create content for a specific service
    const createServiceContent = (title, description, details, price) => (
      <div>
        <div className='flex items-center gap-2'>
          <span style={{ fontSize: '1.5rem' }}>•</span>
          <h1 className='font-bold'>{title}</h1>
        </div>
        <div className='flex items-center gap-2 pt-2'>
          <span style={{ fontSize: '1.5rem' }}>•</span>
          <h1 className=''>{description}</h1>
        </div>

        {details.map((detail, index) => (
          <div key={index} className='flex items-center gap-2 pt-2'>
            <span style={{ fontSize: '1.5rem' }}>•</span>
            <p className=''>{detail}</p>
          </div>
        ))}
        <div className='flex items-center gap-2 pt-2'>
          <span style={{ fontSize: '1.5rem' }}>•</span>
          <p className=''>Price: {price}</p>
        </div>
        <button className='relative top-10 w-full mb-16 h-12 rounded-xl bg-gray-700 hover:bg-gray-800 text-white'>
          Place Now
        </button>
      </div>

    );

    // Switch case for individual content
    switch (selectedValue) {
      case 'FOC planning':
        setContent(
          createServiceContent(
            'Basic FOC Package',
            'FOC Planning and Survey',
            ['Design Documentation'],
            '$1,500'
          )
        );
        break;
      case 'FOC implementation':
        setContent(
          createServiceContent(
            'FOC Implementation - Small Scale',
            'Implementation of FOC infrastructure for small projects',
            ['Basic Testing and Quality Assurance'],
            '$2,000'
          )
        );
        break;
      // Add cases for other options
      case 'FTTH planning':
        setContent(
          createServiceContent(
            'FTTH Basic Package',
            'FTTH Planning, Survey, and Design',
            ['Basic Implementation'],
            '$2,500'
          )
        );
        break;
      case 'Microwave installations':
        setContent(
          createServiceContent(
            'Microwave Installation - Point-to-Point',
            'Installation of Microwave Links (Point-to-Point)',
            ['Basic Configuration'],
            '$2,000'
          )
        );
        break;
      case 'Rf installations':
        setContent(
          createServiceContent(
            'RF Installation - Small Scale',
            'Small Scale Radio Frequency Installations',
            ['Basic Configuration'],
            '$1,500'
          )
        );
        break;
      case 'wireless access point (AP)':
        setContent(
          createServiceContent(
            'Wireless AP Installation - Basic',
            'Installation and Configuration of Wireless Access Points',
            ['Basic Setup'],
            '$1,000'
          )
        );
        break;
      case 'Rural Telephony':
        setContent(
          createServiceContent(
            'Rural Telephony Setup',
            'Implementation of Telephony Services in Rural Areas',
            ['Basic Infrastructure'],
            '$3,000'
          )
        );
        break;
      case 'Site Audits':
        setContent(
          createServiceContent(
            'Basic Site Audit',
            'General Site Audit',
            ['Documentation of Existing Infrastructure'],
            '$1,200'
          )
        );
        break;
      case 'ICT Training':
        setContent(
          createServiceContent(
            'Basic ICT Training',
            'Training for Basic ICT Skills',
            ['Duration: 1 Week'],
            '$500 per participant'
          )
        );
        break;
      case 'Web Design and hosting':
        setContent(
          createServiceContent(
            'Basic Website Package',
            'Responsive Website Design (Up to 5 Pages)',
            ['Domain Registration'],
            '$1,500'
          )
        );
        break;

      default:
        setContent(null);
    }

    // Switch case for common content
    switch (selectedValue) {
      // Add cases for other options
      case 'FOC planning':
        setCommonContent(
          createServiceContent(
            'Premium FOC Package',
            'Comprehensive FOC Planning, Survey, and Design',
            [
              'Detailed Documentation and Reports',
              'Dedicated Project Manager',
            ],
            '$3,500'
          )
        );
        break;
      case 'FOC implementation':
        setCommonContent(
          createServiceContent(
            'FOC Implementation - Large Scale',
            'Implementation of FOC infrastructure for large projects',
            [
              'Advanced Testing and Quality Assurance',
              'Dedicated Technical Support',
            ],
            '$5,000 and up (depending on project scope)'
          )
        );
        break;
      case 'FTTH planning':
        setCommonContent(
          createServiceContent(
            'FTTH Premium Package',
            'Comprehensive FTTH Planning, Survey, and Design',
            [
              'Advanced Implementation',
              'Quality Assurance and Support',
            ],
            '$5,000'
          )
        );
        break;
      case 'Microwave installations':
        setCommonContent(
          createServiceContent(
            'Microwave Installation - Point-to-Multipoint',
            'Installation of Microwave Links (Point-to-Multipoint)',
            ['Advanced Configuration'],
            '$3,500'
          )
        );
        break;
      case 'Rf installations':
        setCommonContent(
          createServiceContent(
            'RF Installation - Large Scale',
            'Large Scale Radio Frequency Installations',
            ['Advanced Configuration'],
            '$4,000'
          )
        );
        break;
      case 'wireless access point (AP)':
        setCommonContent(
          createServiceContent(
            'Wireless AP Installation - Advanced',
            'Installation and Configuration of Wireless Access Points',
            ['Advanced Setup and Optimization'],
            '$2,500'
          )
        );
        break;
      case 'Rural Telephony':
        setCommonContent(null);
        break;
      case 'Site Audits':
        setCommonContent(
          createServiceContent(
            'Comprehensive Site Audit',
            'Detailed Site Audit',
            ['Infrastructure Analysis and Recommendations'],
            '$2,500'
          )
        );
        break;
      case 'ICT Training':
        setCommonContent(
          createServiceContent(
            'Advanced ICT Training',
            'Training for Advanced ICT Skills',
            ['Duration: 2 Weeks'],
            '$1,000 per participant'
          )
        );
        break;
      case 'Web Design and hosting':
        setCommonContent(
          createServiceContent(
            'E-commerce Website Package',
            'E-commerce Website DesignFOC Planning and Survey',
            [
              'Domain Registration',
              'Hosting for 1 Year',
              'Payment Gateway Integration',
            ],
            '$3,500'
          )
        );
        break;
      default:
        setCommonContent(null);

    }
    setLoading(false);
  };
  useEffect(() => {
    // Trigger handleSelectChange when the component mounts
    handleSelectChange({ target: { value: selectedOption } });
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <>
    <Navbar/>
        <div className='pt-20 text-gray-700 px-6'>
      <h1 className='text-4xl py-10  font-semibold text-center text-blue'>Our Pricing Plans</h1>
      <hr className='text-black text-xl' />
      <div className='flex justify-between items-center pt-2'>
        <p className='font-semibold'>Filter</p>
        <div className=' mt-1'>

          <select
            className='block w-full pl-10  text-base  rounded-md focus:outline-none focus:border-blue-500 bg-white cursor-pointer'
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option value='FOC planning'>FOC planning</option>
            <option value='FOC implementation'>FOC implementation</option>
            <option value='FTTH planning'>FTTH planning</option>
            <option value='Microwave installations'>Microwave installations</option>
            <option value='Rf installations'>Rf installations</option>
            <option value='wireless access point (AP)'>Wireless access point (AP)</option>
            <option value='Rural Telephony'>Rural Telephony</option>
            <option value='Site Audits'>Site Audits</option>
            <option value='ICT Training'>ICT Training</option>
            <option value='Web Design and hosting'>Web Design and hosting</option>
          </select>



        </div>
      </div>
      {loading && (
        <div className='flex items-center justify-center h-full py-56'>
          <ClipLoader color='#36D7B7' css={override} size={50} />
        </div>
      )}
      {!loading && content && (
        <div className='my-20 w-full h-fit border  px-6 rounded-lg border-gray-300 '>
          <p className='font-semibold text-sm w-fit px-2 flex items-center rounded-3xl text-white relative bottom-6 h-12 bg-yellow-400'>
            {selectedOption}
          </p>
          <div className='text-gray-700 '>{content}</div>
        </div>
      )}
      {!loading && commonContent && (
        <div className='my-20 w-full h-fit border  px-6 rounded-lg border-gray-300 '>
          <p className='font-semibold text-sm w-fit px-2 flex items-center rounded-3xl text-white relative bottom-6 h-12 bg-yellow-400'>
            {selectedOption}
          </p>
          <div className='content-container'>{commonContent}</div>
        </div>
      )}

    </div>
    <Footer/>
    </>
  );
};

export default Pricing;
