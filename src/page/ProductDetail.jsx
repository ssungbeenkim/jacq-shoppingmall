import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addOrUpdateCart } = useCart();
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    setIsUploading(true); //
    addOrUpdateCart.mutate(
      { product },
      {
        onSuccess: () => {
          setSuccess('카트에 추가되었습니다.');
          setTimeout(() => {
            setSuccess(null);
          }, 3000);
        },
      }
    );
    setIsUploading(false);
  };
  return (
    <>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>
      <section className='flex flex-col md:flex-row p-4'>
        <div className='basis-7/12'>
          <img className='w-full px-4' src={image} alt={title} />
        </div>
        <div className='w-full basis-5/12 flex flex-col p-4'>
          <h2 className='text-3xl font-bold py-2 '>{title}</h2>
          <p className='text-2xl font-bold py-2 border-b border-gray-400'>
            € {price}
          </p>
          <p className='py-4 text-lg'>{description}</p>
          <div className='flex items-center'>
            <label className='text-brand font-bold' htmlFor='select'>
              옵션:
            </label>
            <select
              className=' p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
              onChange={handleSelect}
              value={selected}
              id='select'
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          {success && <p className='my-2'>✅ {success} </p>}
          <Button
            text={isUploading ? '카트에 추가중...' : 'Add to Cart'} //
            onClick={handleClick}
          />
        </div>
      </section>
    </>
  );
}
