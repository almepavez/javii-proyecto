import { useState } from 'react'
import { Link } from 'react-router-dom'
import { productos as products } from '../data/products'




function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col"
      style={{
        background: product.color,
        border: `3px solid ${product.border}`,
        boxShadow: hovered
          ? `6px 6px 0 ${product.shadow}`
          : `4px 4px 0 ${product.border}`,
        transform: hovered ? 'translate(-2px, -2px) scale(1.02)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tag */}
      <span
        className="absolute -top-3 -right-3 font-pixel text-xs px-2 py-1 rounded-full text-white"
        style={{ background: product.shadow, fontSize: '0.5rem', whiteSpace: 'nowrap' }}
      >
        {product.tag}
      </span>

      {/* Emoji */}
      <div
        className="text-5xl mb-3 text-center"
        style={{ animation: hovered ? 'float 0.8s ease-in-out infinite' : 'none' }}
      >
        {product.emoji}
      </div>

      {/* Name */}
      <h3 className="font-title text-xl text-center mb-2" style={{ color: '#3a1a2e' }}>
        {product.name}
      </h3>

      {/* Desc */}
      <p className="font-cute text-sm text-center leading-relaxed flex-1" style={{ color: '#6b4050' }}>
        {product.desc}
      </p>

      {/* CTA buttons */}
      <div className="mt-4 flex gap-2">
        <Link
          to={`/producto/${product.slug}`}
          className="flex-1 text-center font-cute font-bold text-sm py-2 px-3 rounded-xl transition-all hover:scale-105"
          style={{ background: '#fff', color: product.shadow, border: `2px solid ${product.border}` }}
        >
          Ver más 🔍
        </Link>
        <a
          href="#pedidos"
          className="flex-1 text-center font-cute font-extrabold text-sm py-2 px-3 rounded-xl text-white transition-all hover:scale-105"
          style={{ background: product.shadow, boxShadow: `2px 2px 0 ${product.border}` }}
        >
          ¡Pedir! 💕
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="productos" className="py-20 px-4" style={{ background: '#fff5f9' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-pixel text-xs mb-3" style={{ color: '#ff85ad', letterSpacing: '0.2em' }}>
            ✦ NUESTROS DULCES ✦
          </p>
          <h2 className="font-title text-4xl md:text-5xl mb-4" style={{ color: '#3a1a2e' }}>
            🍰 Todo hecho{' '}
            <span style={{ color: '#ff4488' }}>con amor</span>
          </h2>
          <p className="font-cute text-lg max-w-xl mx-auto" style={{ color: '#a0556a' }}>
            Cada dulce es preparado fresco y con los mejores ingredientes. ¡No hay dos iguales!
          </p>
          {/* Divider pixel */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-16 rounded-full" style={{ background: '#ffb3cc' }} />
            <span className="text-xl">🍓</span>
            <div className="h-1 w-16 rounded-full" style={{ background: '#6ec6ff' }} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Note */}
        <div
          className="mt-12 text-center p-6 rounded-3xl font-cute text-base"
          style={{
            background: '#fff',
            border: '3px dashed #ffb3cc',
            color: '#a0556a',
          }}
        >
          🌟 <strong>¿Buscas algo especial?</strong> Hacemos pedidos personalizados para cumpleaños, eventos y regalos.{' '}
          <a href="#pedidos" style={{ color: '#ff4488', fontWeight: 800 }}>¡Escríbenos!</a>
        </div>
      </div>
    </section>
  )
}