'use client';

import Image from 'next/image';
import React, { useState } from 'react';

function ShortenLinkForm() {
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  function linkChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');
    setLink(e.target.value);
  }

  function shortenLinkHandler() {
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+\.[^ "]+$/;
    if (!link) {
      setError('Please add a link');
    }
    if (!linkRegex.test(link)) {
      setError('Link is not valid');
    }
  }

  return (
    <section className='h-[50vh] bg-slate-100 relative mt-32'>
      <div className='absolute flex flex-col items-center pl-8 pr-12 space-x-4 md:flex-row -top-20 md:-top-14 left-[50%] -translate-x-[50%] w-[90%] md:w-[calc(100%-3rem)] lg:w-[calc(100%-16rem)] 2xl:w-[calc(100%-32rem)] h-40  md:h-28 bg-cover bg-dark-violet rounded-md overflow-hidden'>
        <Image
          src='/bg-shorten-desktop.svg'
          alt='pattern'
          fill
          className='-z-10 hidden md:block'
        />
        <Image
          src='/bg-shorten-mobile.svg'
          alt='pattern'
          fill
          className='-z-10 md:hidden'
        />
        <input
          type='text'
          placeholder='Shorten a link here...'
          onChange={linkChangeHandler}
          value={link}
          className={`h-[25%] md:h-[40%] border mt-8 my-4 md:m-0 w-full rounded-md px-6 outline-none ${
            error && 'border border-red text-red placeholder:text-red'
          }`}
        />
        <button
          onClick={shortenLinkHandler}
          className='bg-cyan font-bold px-10 w-full md:w-52 h-[25%] md:h-[40%] text-white rounded-md'
        >
          Shorten It!
        </button>
        {error && <p className='text-red absolute bottom-2 italic text-sm'>{error}</p>}
      </div>
    </section>
  );
}

export default ShortenLinkForm;
