import { useEffect } from "react"
import { useRouter } from "next/router"

import { useAuth } from "../contexts/AuthContext"

import { Header } from "../components/Header"
import { Product, IProduct } from "../components/Product"

import { api } from "../services/api"

interface IProps {
  products: IProduct[]
}

export default function Home({ products }: IProps) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/signin')
    }
  }, [user, router])
  
  return (
    <div>
      <Header />

      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nossos produtos</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products?.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await api.get('/product')

  return {
    props: {
      products: data.products
    },
  }
}
