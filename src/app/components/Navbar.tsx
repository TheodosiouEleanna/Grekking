"use client";

import { useState } from "react";
import NavButton from "./NavButton";
import { menuItems } from "../../consts";
import { Roboto } from "next/font/google";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { Jersey_15 } from "next/font/google";

const jersey15 = Jersey_15({
  weight: ["400"], // Specify the weights you need
  subsets: ["latin"], // Specify subsets for optimization
  variable: "--font-jersey15", // Optional CSS variable
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFolders, setOpenFolders] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleFolder = (index: number) => {
    setOpenFolders((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    console.log("Menu Closed");
  };

  return (
    <div
      className={`w-full flex flex-col justify-center items-center bg-[#FCFCFC] ${roboto.className}`}
    >
      <div className='w-2/3 h-36 flex items-center justify-start'>
        <button
          onClick={toggleMenu}
          className='md:hidden p-2 text-slate-950 focus:outline-none'
        >
          {isMenuOpen ? (
            <AiOutlineClose className='h-6 w-6' />
          ) : (
            <AiOutlineMenu className='h-6 w-6' />
          )}
        </button>
        <div className='logo'>
          <Image
            src='/images/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='w-full h-full object-contain'
          />
        </div>
        <NavButton href='/' className='ml-4'>
          <div className={jersey15.className}>
            <h1 className='jersey15-grekking '>Grekking</h1>
          </div>
        </NavButton>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-[#343538] opacity-95 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-xl `}
      >
        <div className='flex flex-col items-center justify-start p-6'>
          {/* Header Section */}
          <div className='w-full mb-4 flex justify-between items-center border-b-2 border-b-[#52565e]'>
            <h1 className='text-2xl font-bold text-white p-5'>GREKKING</h1>
            <button
              onClick={toggleMenu}
              className='text-white text-2xl focus:outline-none'
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Search Bar */}
          <div className='relative flex items-center w-full  border-b-2 border-b-[#52565e]'>
            <input
              type='text'
              className='h-10 w-full px-4 pl-4 mb-4 text-sm text-white bg-transparent focus:ring-1 focus:ring-orange-400 focus:outline-none'
            />
            <FaSearch className='absolute right-3 text-gray-500 text-lg' />
          </div>

          {/* Menu Items */}
          <nav className='w-full flex flex-col space-y-2'>
            {menuItems.map((item, index) => (
              <div key={index} className='w-full'>
                {/* Collapsible Dropdown menu for mobile */}
                <div className='space-y-2'>
                  <div
                    className={`flex items-center justify-between text-white py-2 px-4 w-full text-lg hover:bg-[#52565e] text-left cursor-pointer ${
                      openFolders[index] ? "border-b-2 border-b-[#52565e]" : ""
                    }`}
                    onClick={
                      item.dropdown ? () => toggleFolder(index) : handleNavClick
                    }
                  >
                    <NavButton
                      key={index}
                      href={item.dropdown ? "" : item.href}
                      className='block text-white w-3/4 py-2 px-4 text-lg hover:bg-[#52565e] transition duration-200'
                    >
                      <span>{item.label}</span>
                    </NavButton>
                    {item.dropdown && (
                      <span>
                        {openFolders[index] ? (
                          <AiOutlineDown className='text-white' />
                        ) : (
                          <AiOutlineRight className='text-white' />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Animated Dropdown */}
                  <div
                    className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ease-in-out max-h-[500px] ${
                      openFolders[index] ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    {openFolders[index] &&
                      item.dropdown &&
                      item.dropdown.map((subItem, subIndex) => (
                        <div key={subIndex} onClick={handleNavClick}>
                          <NavButton
                            key={subIndex}
                            href={subItem.href}
                            className='block text-white py-2 px-4 text-lg hover:bg-[#52565e] transition duration-200'
                          >
                            {subItem.label}
                          </NavButton>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Navbar with Dropdown Menus */}
      <nav className='w-full bg-[#343538] hidden md:block z-10'>
        <div className='flex justify-center'>
          <div className='xl:w-[80%] flex xl:flex-row xl:justify-between lg:w-[85%] lg:flex-col lg:justify-center lg:items-center  md:flex-col md:justify-center md:items-center md:w-[90%]'>
            <ul className='flex items-center h-12 text-white opacity-90'>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className='h-full flex items-center group xl:mx-3 lg:mx-2 md:mx-1 sm:mx-0 hover:bg-[#56595f]'
                >
                  <li className='relative group xl:px-4 md:px-2 sm:px-0'>
                    <NavButton href={item.href} className='text-sm'>
                      {item.label}
                    </NavButton>

                    {/* Dropdown menu, if it exists */}
                    {item.dropdown && (
                      <ul className='absolute w-auto left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[#3c3e44] text-white mt-3 shadow-lg z-50'>
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavButton
                              href={subItem.href}
                              className='block text-sm w-[200px] text-left px-4 py-2  bg-[#41444b] hover:bg-[#52565e] transition-colors duration-100'
                            >
                              {subItem.label}
                            </NavButton>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </div>
              ))}
            </ul>
            {/* Search Bar */}
            <div className='relative flex items-center'>
              <input
                type='text'
                className='h-10 xl:w-[300px] lg:[w-200px] md:w-[150px] px-4 pl-4 text-sm text-white bg-transparent focus:ring-1 focus:ring-orange-400 focus:outline-none'
              />
              <FaSearch className='absolute right-3 text-gray-500 text-lg' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
