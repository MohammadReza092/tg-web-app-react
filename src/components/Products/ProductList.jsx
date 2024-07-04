import React from 'react';
import ProductCard from './ProductItem';
import { CartProvider } from '../../context/cartContext';

const ProductList = () => {
    const staticListProducts = [
        {
          id: 1,
          title: 'Stable personality',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repudiandae.',
          image: 'https://dl.poshtybanman.ir/upload/%D9%82%D8%B3%D9%85%D8%AA2_664b3f15d71b6.jpg',
          price: '$250,000',
        },
        {
            id: 3,
            title: 'Stable personality',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repudiandae.',
            image: 'https://dl.poshtybanman.ir/upload/%D9%82%D8%B3%D9%85%D8%AA2_664b3f15d71b6.jpg',
            price: '$150,000',
          },
      ];

    return(
        <CartProvider>  
            {staticListProducts.map((value) => (
            <ProductCard 
                key={value.id}
                product={value}
            />
            ))}
        </CartProvider>
    )
}

export default ProductList;