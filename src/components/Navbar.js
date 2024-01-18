import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import icon from '../images/icon.png';
import { NavLink } from 'react-router-dom';
import '../style/activeclass.css';

const Navbar = () => {
  // State to track whether the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // State to manage the open/close state of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Hook to enable navigation in the component
  const navigate = useNavigate();

  // Function to handle click on the site icon, navigating to the home page
  const handleIconClick = () => {
    navigate('/');
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(true);
  };

  // Function to toggle the menu's open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to add a shadow effect on the navbar when scrolled
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    // Event listener to handle scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar container with dynamic styling based on scroll */}
      <div
        className={`${
          isScrolled
            ? 'bg-light-blue h-20 w-full flex justify-between z-10 shadow-xl items-center px-6 fixed'
            : 'bg-light-blue h-20 w-full flex justify-between items-center px-6 fixed'
        }`}
      >
        {/* Site logo */}
        <div className='font-bold text-xl text-blue '>
          <img src={icon} alt='My Image' className='w-24 relative right-6 h-24 cursor-pointer' onClick={handleIconClick} />
        </div>

        {/* Hamburger icon for mobile menu */}
        {isMenuOpen ? (
          <div
            className='text-sky-blue md:hidden text-3xl font-bold p-1 border-2 border-li-blue rounded-lg cursor-pointer'
            onClick={toggleMenu}
          >
            <AiOutlineMenu className='md:hidden' />
          </div>
        ) : (
          <div
            className='text-sky-blue text-3xl md:hidden font-bold p-1 border-2 border-li-blue rounded-lg cursor-pointer'
            onClick={toggleMenu}
          >
            <AiOutlineClose className='md:hidden' />
          </div>
        )}
      </div>

      {/* Mobile menu with dynamic styling based on the menu's open/close state */}
      <div
        className={`${
          isMenuOpen ? 'top-[-490px] mt-20 w-full absolute transition-all duration-300 ease-in-out' :
           'z-50 mt-20 top-[0px] w-full opacity-95 fixed transition-all duration-300 ease-in-out'
        }`}
      >
        {/* Navigation links */}
        <div className='bg-light-blue  cursor-pointer text-deep-blue font-medium text-lg text-center flex md:flex-row flex-col gap-2'>
          {/* Home Link */}
          <NavLink onClick={handleLinkClick} to='/' activeClassName='active' className='hover:bg-deep-blue hover:text-white p-2' exact>
            Home
          </NavLink>

          {/* Company Link */}
          <NavLink onClick={handleLinkClick} to='/company' activeClassName='active' className='hover:bg-deep-blue hover:text-white p-2'>
            Company
          </NavLink>

          {/* Pricing Link */}
          <NavLink onClick={handleLinkClick} to='/pricing' activeClassName='active' className='hover:bg-deep-blue hover:text-white p-2'>
            Pricing
          </NavLink>

          {/* Contact Link */}
          <NavLink onClick={handleLinkClick} to='/contact' activeClassName='active' className='hover:bg-deep-blue hover:text-white p-2'>
            Contact
          </NavLink>

          {/* Horizontal line */}
          <hr className=' text-deep-blue  h-3 ' />
        </div>

        {/* Sign In and Create New Account buttons */}
        <div className='flex gap-2 opacity-100 bg-light-blue pb-4 px-6'>
          <button className='w-1/4 h-12 border hover:bg-deep-blue hover:text-white border-blue rounded-lg text-deep-blue'>Sign In</button>
          <button className='w-3/4 h-12 bg-deep-blue hover:text-black text-white rounded-lg'>CREATE NEW ACCOUNT</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
