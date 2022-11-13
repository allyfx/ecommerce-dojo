import { createContext, useContext, useState, ReactNode } from 'react';
import { api } from '../services/api'

interface User {
  id: string
  name: string
  email: string
  token: string
}

interface SignInData {
  email: string
  password: string
}

interface ContextData {
  user: User | undefined
  signIn: ({ email, password }: SignInData) => Promise<void>
}

const AuthContext = createContext({} as ContextData)

interface ContextProviderProps {
  children: ReactNode
}

export function AuthContextProvider({ children }: ContextProviderProps) {
  const [user, setUser] = useState<User>()

  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post('/authenticate', {
        email,
        password
      })

      setUser({
        ...response.data.user,
        token: response.data.token
      })
    } catch (error) {
      console.log(error)
      alert('Ocorreu um erro.')
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
