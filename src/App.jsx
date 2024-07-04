import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './components/Products/ProductItem';
import { CartProvider } from './context/cartContext';
import './App.css';
import ProductList from './components/Products/ProductList';
import { useTelegram } from './hooks/useTelegram';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user } = useTelegram();
  const headerList = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'Products' },
    { id: 3, title: 'Articles' },
    { id: 4, title: 'Courses' }
  ];

  const handleCurrentIndex = (index) => setCurrentIndex(index);

  return (
    <>
     {/* <ul className='flex sticky top-0 bg-mdark-400 p-5 gap-3 flex-row-reverse'>
          {headerList.map((value, index) => (
            <li
              key={value.id}
              onClick={() => handleCurrentIndex(index)}
              className={`font-bold cursor-pointer ${currentIndex === index ? 'text-blue-500' : 'text-white'} hover:text-blue-500`}
            >
              {value.title}
            </li>
          ))}
        </ul> */}
        <p>
          { user?.username}
        </p>
      <ProductList/>
    </>
  );
}

export default App;
