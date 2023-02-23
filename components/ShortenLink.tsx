import React from 'react';

function ShortenLink({
  orginalLink,
  shortenLink,
}: {
  orginalLink: string;
  shortenLink: string;
}) {
  return (
    <div className='flex flex-col md:flex-row bg-white md:items-center justify-between px-0 md:px-8 py-2 lg:mx-[6.5rem] rounded-md'>
      <a
        href={orginalLink}
        target='_blank'
        className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[360px] px-4 py-2'
      >
        {orginalLink}
      </a>
      <hr className='border border-slate-100 w-full md:hidden' />
      <div className='flex flex-col md:flex-row items-center mt-4 space-y-2 md:space-y-0 md:space-x-4 px-4 pb-2'>
        <a
          target='_blank'
          href={shortenLink}
          className='text-cyan self-start md:self-auto'
        >
          {shortenLink}
        </a>
        <button className='bg-cyan font-bold px-10 py-2 text-white w-full rounded-md'>
          Copy
        </button>
      </div>
    </div>
  );
}

export default ShortenLink;
