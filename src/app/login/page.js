//pagina login
'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '@/context/LanguageContext';

export default function Login() {
  const { language } = useContext(LanguageContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', email, password }),
      })
      if (res.ok) {
        const data = await res.json()
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/')
      } else {
        const data = await res.json()
        setError(data.message)
      }
    } catch (error) {
      setError(language === 'en' ? 'An error occurred. Please try again.' : 'Ocurrió un error. Inténtalo de nuevo.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">
        {language === 'en' ? 'Login' : 'Iniciar sesión'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            {language === 'en' ? 'Email' : 'Correo Electrónico'}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            {language === 'en' ? 'Password' : 'Contraseña'}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded text-black"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded">
          {language === 'en' ? 'Login' : 'Iniciar sesión'}
        </button>
      </form>
    </div>
  )
}
