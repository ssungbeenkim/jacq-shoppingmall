import React from 'react';

export default function Banner() {
  return (
    <div>
      <section className='h-96 bg-yellow-600 relative'>
        <div className='w-full h-full bg-cover bg-banner opacity-80'></div>
        <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'></div>
      </section>
    </div>
  );
}
