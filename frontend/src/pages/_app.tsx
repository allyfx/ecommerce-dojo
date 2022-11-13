import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../contexts/AuthContext'
import { CartContextProvider } from '../contexts/CartContext'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </AuthContextProvider>
  )
}
