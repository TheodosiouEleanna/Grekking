"use client";
import { useState } from "react";
import NavButton from "./NavButton";
import { menuItems } from "../../consts.ts";
import { Roboto } from "next/font/google";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`w-full flex flex-col justify-center items-center bg-[#FCFCFC] ${roboto.className} `}
    >
      <div className='w-2/3 h-32 flex  items-center justify-start'>
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
        <NavButton href='/'>
          <h1 className='text-2xl font-bold my-4 text-slate-950'>GREKKING</h1>
        </NavButton>
        {/* Toggle Button for mobile */}
      </div>

      {/* Navbar with Dropdown Menus */}
      <nav className='w-full bg-[#343538]'>
        <div className='flex justify-center'>
          <div className='w-2/3 flex justify-start'>
            <ul className='flex items-center h-12 text-white'>
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className='h-full flex items-center group mx-2 hover:bg-[#545c6e]'
                >
                  <li className='relative group px-4'>
                    <NavButton href={item.href}>{item.label}</NavButton>

                    {/* Dropdown menu, if it exists */}
                    {item.dropdown && (
                      <ul className='absolute w-auto left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[#3b414e] text-white mt-3 shadow-lg z-50'>
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <NavButton
                              href={subItem.href}
                              className='block text-base w-[200px] text-left px-4 py-2 bg-[#3b414e] hover:bg-[#545c6e] transition-colors duration-100'
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
          </div>
        </div>
      </nav>
    </div>
  );
}
