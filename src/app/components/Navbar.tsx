import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    setIsMenuOpen(true);
    sidMenuRef.current?.style.setProperty("transform", "translateX(-16rem)");
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    sidMenuRef.current?.style.setProperty("transform", "translateX(16rem)");
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
      </div>

      <nav className={`w-full fixed px-4 sm:px-5 lg:px-8 xl:px-[8%] py-3 sm:py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}> 
        <a href="#top" className='flex-shrink-0'>
          <Image 
            src={assets.logo} 
            alt="logo" 
            className='w-20 sm:w-24 md:w-28 cursor-pointer'
          />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 rounded-2xl px-6 lg:px-10 xl:px-12 py-2.5 lg:py-3 text-sm lg:text-base transition-all duration-300 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li><a className='font-ovo' href="#top">Home</a></li>
          <li><a className='font-ovo' href="#about">About me</a></li>
          <li><a className='font-ovo' href="#service">Service</a></li>
          <li><a className='font-ovo' href="#work">My Work</a></li>
          <li><a className='font-ovo' href="#contact">Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
          {/* Dark Mode Toggle */}
          <button className=''>
            <Image src={assets.moon_icon} alt='Toggle dark mode' className='w-5 sm:w-6'/>
          </button>

          {/* Contact Button - Hidden on small screens */}
          <a 
            href="#contact" 
            className='font-ovo hidden lg:flex items-center gap-2 xl:gap-3 px-6 xl:px-10 py-2 xl:py-2.5 border border-gray-500 rounded-2xl hover:bg-lighthover duration-500 text-sm xl:text-base whitespace-nowrap'
          >
            Contact 
            <Image src={assets.arrow_icon} alt='' className='w-2.5 xl:w-3'/>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className='block md:hidden ml-2' 
            onClick={openMenu}
            aria-label="Open menu"
          >
            <Image src={assets.menu_black} alt='Menu' className='w-5 sm:w-6'/>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className='fixed inset-0 bg-black bg-opacity-50 md:hidden z-40 transition-opacity duration-300'
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu */}
        <ul 
          ref={sidMenuRef} 
          className='flex md:hidden flex-col gap-4 sm:gap-6 py-16 sm:py-20 px-8 sm:px-10 fixed -right-64 top-0 bottom-0 w-60 sm:w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 shadow-2xl overflow-y-auto'
        >
          {/* Close Button */}
          <div className='absolute top-5 sm:top-6 right-5 sm:right-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close" className='w-4 sm:w-5 cursor-pointer'/>
          </div>

          {/* Menu Items */}
          <li>
            <a 
              className='font-ovo text-base sm:text-lg' 
              onClick={closeMenu} 
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              className='font-ovo text-base sm:text-lg' 
              onClick={closeMenu} 
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a 
              className='font-ovo text-base sm:text-lg' 
              onClick={closeMenu} 
              href="#service"
            >
              Service
            </a>
          </li>
          <li>
            <a 
              className='font-ovo text-base sm:text-lg' 
              onClick={closeMenu} 
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a 
              className='font-ovo text-base sm:text-lg' 
              onClick={closeMenu} 
              href="#contact"
            >
              Contact Me
            </a>
          </li>

          {/* Mobile Contact Button */}
          <li className='mt-4'>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className='font-ovo flex items-center justify-center gap-2 px-6 py-2.5 border border-gray-500 dark:border-gray-400 rounded-2xl hover:bg-rose-100 dark:hover:bg-gray-800 duration-300 text-sm'
            >
              Contact Me
              <Image src={assets.arrow_icon} alt='' className='w-2.5'/>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar