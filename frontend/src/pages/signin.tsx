/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../contexts/AuthContext"

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  const router = useRouter()

  async function handleSubmit() {
    await signIn({
      email,
      password
    })

    router.push('/')
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-center text-2xl">E.Comércio</h1>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Fazer login
          </h2>
        </div>
        <form className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="E-mail"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Senha"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}