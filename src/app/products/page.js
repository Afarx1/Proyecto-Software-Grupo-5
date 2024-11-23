'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import ProductCard from '@/components/ProductCard'

export default function Products() {
    const [products, setProducts] = useState([])
    const { t } = useTranslation('common')

    useEffect(() => {
        // In a real scenario, you would fetch products from an API
        setProducts([
            { id: 1, name: 'Product 1', price: 19.99, imageUrl: '/placeholder.svg?height=200&width=200' },
            { id: 2, name: 'Product 2', price: 29.99, imageUrl: '/placeholder.svg?height=200&width=200' },
            { id: 3, name: 'Product 3', price: 39.99, imageUrl: '/placeholder.svg?height=200&width=200' },
        ])
    }, [])

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">{t('products.title')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}