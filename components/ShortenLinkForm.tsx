'use client';

import Cookies from 'js-cookie';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ShortenLink from './ShortenLink';

interface Links {
  orginalLink: string;
  shortenLink: string;
}

function ShortenLinkForm() {
  const [link, setLink] = useState('');
  const [links, setLinks] = useState<Links[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function linkChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');
    setLink(e.target.value);
  }

  useEffect(() => {
    if (Cookies.get('links')) {
      setLinks(JSON.parse(Cookies.get('links')!));
    }
  }, []);

  async function shortenLinkHandler() {
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+\.[^ "]+$/;
    if (!link) {
      setError('Please add a link');
      return;
    }
    if (!linkRegex.test(link)) {
      setError('Link is not valid');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://t.ly/api/v1/link/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          long_url: link,
          api_token: process.env.NEXT_PUBLIC_TLY_API_KEY,
        }),
      });
      const data = await response.json();
      if (!data.short_url) {
        setError('Something went wrong');
        setLoading(false);
        return;
      }

      setLinks((prevState) => [
        ...prevState,
        { orginalLink: link, shortenLink: data.short_url },
      ]);

      Cookies.set(
        'links',
        JSON.stringify([
          ...links,
          { orginalLink: link, shortenLink: data.short_url },
        ])
      );
    } catch (error) {
      setLoading(false)
      setError('Something went wrong');
      return;
    }

    setLink('');
    setLoading(false);
  }

  return (
    <>
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
          className={`bg-cyan font-bold px-10 w-full md:w-52 h-[25%] md:h-[40%] text-white rounded-md ${
            loading && 'animate-pulse'
          }`}
        >
          {loading ? 'Loading...' : 'Shorten It!'}
        </button>
        {error && (
          <p className='text-red absolute bottom-2 italic text-sm'>{error}</p>
        )}
      </div>
      <div className='mt-20 space-y-4'>
        {links &&
          links.map(({ orginalLink, shortenLink }) => (
            <ShortenLink
              key={shortenLink}
              orginalLink={orginalLink}
              shortenLink={shortenLink}
            />
          ))}
      </div>
    </>
  );
}

export default ShortenLinkForm;
