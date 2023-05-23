import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';

const SHIPPING = 3000;
export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    hasProducts &&
    products.reduce(
      (prev, curr) => prev + parseInt(curr.price) * curr.quentity,
      0
    );
  return (
    <section>
      <p>My Cart</p>
      {!hasProducts && <p>Cart is empty</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div>
            <PriceCard text='상품 총액' prict={totalPrice} />
            <BsFillPlusCircleFill />
            <PriceCard text='배송비' price={SHIPPING} />
            <FaEquals />
            <PriceCard text='총 가격' price={totalPrice + SHIPPING} />
          </div>
        </>
      )}
    </section>
  );
}
