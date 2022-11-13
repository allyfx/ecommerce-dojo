/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"

export function Header() {
  const router = useRouter()

  function navigateToCart() {
    router.push('/cart')
  }

  function navigateToHome() {
    router.push('/')
  }

  return (
    <div className="relative bg-white">
      <nav className="bg-gray-800" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl cursor-pointer" onClick={navigateToHome}>E.Comércio</h1>
            </div>
          </div>

          <div className="hidden md:block" onClick={navigateToCart}>
            <div className="ml-4 flex items-center md:ml-6">
              <button type="button" className="rounded-full bg-white p-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Carrinho</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}