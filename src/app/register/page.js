'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '@/context/LanguageContext'

const translations = {
  en: {
    mismatch: "Passwords do not match",
    error: "An error occurred. Please try again.",
    register: "Register",
    name: "Name",
    email: "Email",
    password: "Password",
    confirm: "Confirm password",
  },
  es: {
    mismatch: "Las contraseñas no coinciden",
    error: "Ocurrió un error. Inténtalo de nuevo.",
    register: "Registrarse",
    name: "Nombre",
    email: "Correo Electrónico",
    password: "Contraseña",
    confirm: "Confirmar contraseña",
  },
  de: {
    mismatch: "Passwörter stimmen nicht überein",
    error: "Es ist ein Fehler aufgetreten. Bitte versuche es erneut.",
    register: "Registrieren",
    name: "Name",
    email: "E-Mail",
    password: "Passwort",
    confirm: "Passwort bestätigen",
  },
  fr: {
    mismatch: "Les mots de passe ne correspondent pas",
    error: "Une erreur est survenue. Veuillez réessayer.",
    register: "S'inscrire",
    name: "Nom",
    email: "E-mail",
    password: "Mot de passe",
    confirm: "Confirmer le mot de passe",
  },
};

export default function Register() {
  const { language } = useContext(LanguageContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError(translations[language].mismatch)
      return
    }
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'register', name, email, password, confirmPassword }),
      })
      if (res.ok) {
        router.push('/login')
      } else {
        const data = await res.json()
        setError(data.message)
      }
    } catch (error) {
      setError(translations[language].error)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">
        {translations[language].register}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            {translations[language].name}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            {translations[language].email}
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
            {translations[language].password}
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
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">
            {translations[language].confirm}
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded text-black"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-primary text-primary-foreground py-2 rounded">
          {translations[language].register}
        </button>
      </form>
    </div>
  )
}

