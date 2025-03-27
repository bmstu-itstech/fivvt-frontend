export const HospitalCardSkeleton = () => {
  return (
    <div
      role='status'
      className='space-y-2.5 mb-12 animate-pulse flex gap-4 w-full h-56 ps-4 odd:flex-row-reverse odd:animate-appear-start-block-800 even:animate-appear-end-block-800'>
      <div className='flex items-center justify-center aspect-square h-full bg-gray-200 rounded-sm'>
        <svg
          className='w-14 h-14 text-gray-300'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 18'>
          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
        </svg>
      </div>

      <div className='flex flex-col h-full  items-center w-full justify-between'>
        <div className='h-8  bg-gray-200 rounded-full w-full'></div>
        <div className='h-8  bg-gray-200 rounded-full w-full'></div>
        <div className='h-8  bg-gray-200 rounded-full w-full'></div>
        <div className='h-8  bg-gray-200 rounded-full w-full'></div>
      </div>
    </div>
  );
};
