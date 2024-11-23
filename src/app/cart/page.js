'use client'

import { useCart } from '@/context/CartContext'
import { useTranslation } from 'next-i18next'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart()
  const { t } = useTranslation('common')

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{t('cart.title')}</h1>
      {cart.length === 0 ? (
        <p className="text-xl">{t('cart.empty')}</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  {t('cart.remove')}
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4">
            <span className="text-2xl font-bold">{t('cart.total')}:</span>
            <span className="text-2xl">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-md text-lg hover:bg-primary-dark transition-colors">
            {t('cart.checkout')}
          </button>
        </div>
      )}
    </div>
  )
}