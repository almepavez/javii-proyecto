import { useState } from 'react'
import { Link } from 'react-router-dom'
import { productos as products, ProductIcon } from '../data/products'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col"
      style={{
        background: product.color,
        border: `2.5px solid ${product.border}`,
        boxShadow: hovered
          ? `6px 6px 0 ${product.shadow}`
          : `4px 4px 0 ${product.border}`,
        transform: hovered ? 'translate(-2px, -2px) scale(1.02)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tag sutil */}
      <span
        className="absolute -top-3 -right-3 font-pixel px-2 py-1 rounded-full"
        style={{
          background: '#FFF5EC',
          color: '#8B1A2E',
          border: '2px solid #C46877',
          fontSize: '0.45rem',
          whiteSpace: 'nowrap',
          letterSpacing: '0.05em',
        }}
      >
        {product.tag}
      </span>

      {/* Icono SVG kawaii */}
      <div
        className="flex items-center justify-center mb-3"
        style={{
          height: '64px',
          transition: 'transform 0.3s ease',
          transform: hovered ? 'translateY(-4px) scale(1.08)' : 'none',
        }}
      >
        {ProductIcon[product.icon]}
      </div>

      {/* Nombre */}
      <h3
        className="font-title text-xl text-center mb-2"
        style={{ color: '#3D1A0A' }}
      >
        {product.name}
      </h3>

      {/* Descripción */}
      <p
        className="text-sm text-center leading-relaxed flex-1"
        style={{
          color: '#6B3A2A',
          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
        }}
      >
        {product.desc}
      </p>

      {/* Botones */}
      <div className="mt-4 flex gap-2">
        <Link
          to={`/producto/${product.slug}`}
          className="flex-1 text-center font-bold text-sm py-2 px-3 rounded-xl transition-all hover:scale-105"
          style={{
            background: '#FFF5EC',
            color: '#8B1A2E',
            border: '2px solid #C46877',
            fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
          }}
        >
          Ver más 🔍
        </Link>
        <a
          href="#pedidos"
          className="flex-1 text-center font-bold text-sm py-2 px-3 rounded-xl text-white transition-all hover:scale-105"
          style={{
            background: '#8B1A2E',
            boxShadow: '2px 2px 0 #3D1A0A',
            fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
          }}
        >
          ¡Pedir! 💕
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section id="productos" className="relative" style={{ background: '#F5E6D8' }}>

      <div className="pt-6 pb-16 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="font-pixel text-xs mb-3"
              style={{ color: '#A83248', letterSpacing: '0.2em' }}
            >
              ✦ NUESTROS DULCES ✦
            </p>
            <h2
              className="font-title text-4xl md:text-5xl mb-4"
              style={{ color: '#3D1A0A' }}
            >
              🍰 Todo hecho{' '}
              <span style={{ color: '#8B1A2E' }}>con amor</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{
                color: '#6B3A2A',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              }}
            >
              Cada dulce es preparado fresco y con los mejores ingredientes. ¡No hay dos iguales!
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-1 w-16 rounded-full" style={{ background: '#C46877' }} />
              <span className="text-xl">🍓</span>
              <div className="h-1 w-16 rounded-full" style={{ background: '#C46877' }} />
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
            className="mt-12 text-center p-6 rounded-3xl text-base"
            style={{
              background: '#FFF5EC',
              border: '3px dashed #C46877',
              color: '#6B3A2A',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
            }}
          >
            🌟 <strong>¿Buscas algo especial?</strong> Hacemos pedidos personalizados para cumpleaños, eventos y regalos.{' '}
            <a href="#pedidos" style={{ color: '#8B1A2E', fontWeight: 800 }}>¡Escríbenos!</a>
          </div>
        </div>
      </div>

      {/* Ola inferior */}
      <div className="pointer-events-none" style={{ marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF5EC" />
        </svg>
      </div>

    </section>
  )
}