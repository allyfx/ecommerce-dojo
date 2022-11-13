import { createContext, useContext, ReactNode, useState } from 'react';

import { IProduct } from '../components/Product';

interface Cart {
  products: IProduct[]
}

interface ContextData {
  cart: Cart
  updateCartProducts: (newProducts: IProduct[]) => void
}

const CartContext = createContext({} as ContextData)

interface ContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ContextProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([])

  function updateCartProducts(newProducts: IProduct[]) {
    setProducts(newProducts)
  }

  return (
    <CartContext.Provider value={{
      cart: {
        products,
      },
      updateCartProducts,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
