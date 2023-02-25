import Image from 'next/image';
import React from 'react';
import ShortenLinkForm from '../components/ShortenLinkForm';

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
      <section className='bg-slate-100 relative mt-32 p-6'>
        <ShortenLinkForm />

        <div className='text-center pt-28'>
          <h2 className='text-very-dark-violet font-bold tracking-wide text-3xl'>
            Advanced Statistics
          </h2>
          <p className='text-grayish-violet pt-4'>
            Track how your links are performing across the web with{' '}
            <span className='md:block'>our advanced statistic dashbord</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
