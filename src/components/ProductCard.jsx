import React from 'react';

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <li className='rouded-lg shadow-md overFlow-hidden cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between'>
        <h3 className='trucate'>{title}</h3>
        <p>{`€ ${price}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}
