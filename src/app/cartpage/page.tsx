"use client"

import Cart from '../../components/Cart'
import React, { useEffect, useState } from 'react'

const CartPage = () => {
  const [cartComponent, setCartComponent] = useState<React.ReactNode | null>(null);


  useEffect(() => {
    const fetchCartComponent = async () => {
      const cartElement = await Cart();
      setCartComponent(cartElement);
    };

    fetchCartComponent();
  }, []);

  return (
    <div className="w-full py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-cols-2 lg:flex-cols-4 ">
      {cartComponent}
    </div>
  )
}

export default CartPage