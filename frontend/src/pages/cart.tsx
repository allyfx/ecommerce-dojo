import { Header } from "../components/Header"
import { Product } from "../components/Product"

import { useCart } from "../contexts/CartContext"

export default function Cart() {
  const { cart } = useCart()

  return (
    <div>
      <Header />

      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Seu carrinho</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {cart.products?.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
