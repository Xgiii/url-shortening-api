import Image from 'next/image';
import React from 'react';

function HomePage() {
  return (
    <>
      {/* Hero */}

      <section className='flex flex-col md:flex-row items-start 2xl:justify-between p-6 lg:pl-32 lg:pt-12 2xl:px-64'>
        <div className='text-center mt-[365px] md:mt-12 md:max-w-[40vw] md:text-left'>
          <h1 className='text-[2.75rem] font-bold text-very-dark-violet !leading-[1.15] md:text-6xl'>
            More than just shorten links
          </h1>
          <p className='text-grayish-violet m-5 text-[1.2rem] leading-normal md:mx-0 md:mt-1 md:mb-5'>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className='main-btn rounded-full !px-14 !py-4 !text-xl md:!px-10 md:!py-2.5 md:!text-base'>
            Get Started
          </button>
        </div>
        <Image
          src='/illustration-working.svg'
          alt='image of person working'
          width={500}
          height={500}
          className='absolute -right-12 md:-right-5 w-[535px] h-[350px] 2xl:relative'
        />
      </section>

      {/* # */}

      <section className='h-[50vh] bg-slate-100 relative mt-32'>
        <div className='absolute flex flex-col items-center pl-8 pr-12 md:px-8 space-x-4 md:flex-row -top-20 md:-top-14 left-[50%] -translate-x-[50%] w-[90%] md:w-[calc(100%-3rem)] lg:w-[calc(100%-16rem)] 2xl:w-[calc(100%-32rem)] h-40  md:h-28 bg-cover bg-dark-violet rounded-md overflow-hidden'>
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
            className='h-[25%] md:h-[40%] mt-8 my-4 md:m-0 w-full rounded-md px-6 outline-none'
          />
          <button className='bg-cyan font-bold px-10 w-full md:w-52 h-[25%] md:h-[40%] text-white rounded-md'>
            Shorten It!
          </button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
