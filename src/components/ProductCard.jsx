import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/products/${id}`, { state: { product } })}
      className='rouded-lg shadow-md overFlow-hidden cursor-pointer transition-all hover:scale-105'
    >
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between'>
        <h3 className='trucate'>{title}</h3>
        <p>{`€ ${price}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}
