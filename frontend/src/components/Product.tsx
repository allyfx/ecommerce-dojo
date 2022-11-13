/* eslint-disable @next/next/no-img-element */
import { useCart } from "../contexts/CartContext"

export interface IProduct {
  id: string
  title: string
  imageUrl: string
  price: number
  stock: number
}

interface IProps {
  product: IProduct
  cardProduct?: boolean
}

export function Product({ product, cardProduct = false }: IProps) {
  const { updateCartProducts, cart } = useCart()

  function onClickProduct() {
    updateCartProducts([
      ...cart.products,
      product
    ])
  }

  return (
    <div className="group relative" onClick={onClickProduct}>
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img src={product.imageUrl} alt={product.title} className="h-full w-full object-center lg:h-full lg:w-full" />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.title}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">R${product.price}</p>
      </div>

      {!cardProduct ? (
        <div className="mt-4 flex justify-between">
          <p className="text-sm font-medium text-gray-900">{product.stock > 0 ? 'Em estoque' : 'Esgotado'}</p>
          {product.stock > 0 ? <p className="text-sm font-medium text-gray-900">Qtd: {product.stock}</p> : null}
        </div>
      ) : null}
    </div>
  )
}