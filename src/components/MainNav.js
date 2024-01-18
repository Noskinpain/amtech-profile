import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import icon from '../images/icon.png';
import { NavLink } from 'react-router-dom';
import '../style/mainactive.css';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineAccountBalanceWallet, MdContentPasteSearch } from 'react-icons/md';
import { FaRegCalendarAlt } from 'react-icons/fa';

const MainNav = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Conditional rendering based on the menuOpen state */}
      {menuOpen ? (
        <div className='absolute bg-deep-blue w-4/5 h-screen left-[-499px] transition-all duration-300 ease-in-out'></div>
      ) : (
        <div className='absolute bg-deep-blue w-4/5 m-0 h-screen z-20 left-[0px] overflow-y-auto transition-all duration-300 ease-in-out'>
          {/* Navigation header */}
          <div className='flex bg-deep-blue items-center border-b-2 pt-2 border-blue w-full h-20 relative bottom-4 pr-2 justify-between'>
            <img src={icon} alt='My Image' className='w-24 h-24 relative right-3 cursor-pointer' />
            <AiOutlineClose className='text-3xl cursor-pointer text-white' onClick={handleOpen} />
          </div>
          
          {/* Navigation links */}
          <div className='text-white mx-2 pt-5 flex flex-col gap-5'>
            {/* Dashboard Link */}
            <div className='flex gap-2 items-center  pl-3'>
              <AiOutlineHome className='text-3xl' />
              <NavLink to='/main' className=' ' activeClassName='active-link'>
                Dashboard
              </NavLink>
            </div>
            
            {/* Fund Wallet Link */}
            <div className='flex gap-2 items-center  pl-3'>
              <MdOutlineAccountBalanceWallet className='text-3xl' />
              <NavLink to='/fund-wallet' className='' activeClassName='active-link'>
                Fund Wallet
              </NavLink>
            </div>
  
            {/* Horizontal line */}
            <hr className='mt-4 border-gray-400 border-t-1 w-full mx-auto' />
  
            {/* FAQs Link */}
            <div className='flex gap-2 items-center  pl-3'>
              <MdContentPasteSearch className='text-3xl' />
              <NavLink to='/faqs' className='' activeClassName='active-link'>
                FAQs
              </NavLink>
            </div>
  
            {/* Horizontal line */}
            <hr className='mt-4 border-gray-400 border-t-1 w-full mx-auto' />
  
            {/* Wallet Funding History Link */}
            <div className='flex gap-2 items-center  pl-3'>
              <FaRegCalendarAlt className='text-3xl' />
              <NavLink to='/wallet-funding-history' className='' activeClassName='active-link'>
                Wallet Funding History
              </NavLink>
            </div>
          </div>
        </div>
      )}
  
      {/* Fixed navigation bar */}
      <div className='w-full fixed flex h-16 items-center border z-10 bg-white border-b-2 border-b-gray-400 justify-between px-6'>
        {menuOpen ? (
          <div className=''>
            <AiOutlineMenu className='text-3xl cursor-pointer' onClick={handleOpen} />
          </div>
        ) : (
          <div className=''>
            <div className=''>
              <AiOutlineClose className='text-3xl cursor-pointer' onClick={handleOpen} />
            </div>
          </div>
        )}
        <IoMdContact className='text-3xl' />
      </div>
    </>
  );
};

export default MainNav;
