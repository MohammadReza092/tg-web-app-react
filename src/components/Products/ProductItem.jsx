import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useCart } from '../../context/cartContext';
import { useTelegram } from '../../hooks/useTelegram';
import ButtonAddCart from '../UI/ButtonAddCart';
import '../../App.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { cart, isInCart, addToCart, removeFromCart } = useCart();
  const isProduct = isInCart(product.id);
  const  { app , onToggleButton  } = useTelegram();

  const handleClick = () => {
    if (isProduct) {
      removeFromCart(product.id);
      if(cart.length === 1){
        onToggleButton(false);
      }
    } else {
      addToCart(product);
      onToggleButton(true);
    }
    
  };

  const onSendData = useCallback(() => {
    app.sendData(JSON.stringify(product));
  },[product])

  useEffect(() => {
    app.onEvent('mainButtonClicked' , onSendData)
    return () => {
      app.offEvent('mainButtonClicked', onSendData);
    }
  },[onSendData])

  return (
    <div key={product.id} className='bg-mdark-400 m-3 rounded-md p-1'>
        <img className='rounded-md' src={product.image} alt="" />
        <div className='p-2'>
            <p className='mt-2 font-bold text-white'>{product.title}</p>
            <p 
            className='font-normal text-gray-300 text-xs mt-1'>
              {product.desc}
            </p>
            <div className='text-blue-500 mt-3'>
              <Link to={'order'}>
                show more
              </Link>
            </div>
            <div className='my-4 w-full h-[1px] bg-gray-600' />
            <div className='flex justify-between'>
                <span className='font-bold text-md text-white'>Total</span>
                <span className='font-bold text-md text-white'>{product.price}</span>
            </div>
            <ButtonAddCart
                isProduct={isProduct}
                onClick={handleClick}
            />
           
        </div>
    </div>
  );
};

export default ProductCard;
