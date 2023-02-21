'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function MainHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className='flex justify-between relative pb-6'>
        <div className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={100}
            height={100}
            className='mr-10'
          />
          <ul className='hidden md:flex text-sm text-grayish-violet space-x-6'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resorces</li>
          </ul>
        </div>
        <div className='hidden md:flex items-center space-x-6'>
          <a href='#' className='text-sm text-grayish-violet'>
            Login
          </a>
          <button className='main-btn rounded-full'>Sign Up</button>
        </div>
        <Image
          src='/menu.png'
          alt='menu icon'
          width={48}
          height={48}
          className='md:hidden cursor-pointer'
          onClick={() => setMobileMenu((prevState) => !prevState)}
        />
      </header>
      {mobileMenu && (
        <div className='absolute bg-dark-violet w-[calc(100%-3.5rem)] mx-auto md:hidden rounded-lg text-xl px-8 text-white'>
          <ul className='flex flex-col items-center my-8 space-y-4'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resorces</li>
          </ul>
          <hr className='border-grayish-violet ' />
          <div className='flex flex-col items-center space-y-6 my-8'>
            <a href='#'>Login</a>
            <button className='main-btn w-full !text-xl rounded-full'>
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainHeader;
