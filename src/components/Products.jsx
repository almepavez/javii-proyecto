import { useState } from 'react'
import { Link } from 'react-router-dom'
import { productos as products, ProductIcon } from '../data/products'

/* ---------- Iconitos kawaii ---------- */

function IcoLupa({ size = 15, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="4" stroke={color} strokeWidth="1.6" />
      <rect x="9.5" y="9.5" width="4" height="1.8" rx="0.9" transform="rotate(45 9.5 9.5)" fill={color} />
    </svg>
  )
}

function IcoCorazon({ size = 15, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 18" fill="none" aria-hidden="true">
      <path
        d="M10 16 C10 16 1 10 1 5 C1 2.5 3 1 5.5 1 C7.5 1 9 2.5 10 4 C11 2.5 12.5 1 14.5 1 C17 1 19 2.5 19 5 C19 10 10 16 10 16Z"
        fill={color}
      />
    </svg>
  )
}

function IcoFrutilla({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22 C6 18 4 13 5 9 C6 5.5 9 4.5 12 6 C15 4.5 18 5.5 19 9 C20 13 18 18 12 22 Z" fill="#A83248" />
      <path d="M9 3 C10 5 11 6 12 6 C13 6 14 5 15 3 C13.5 4 10.5 4 9 3 Z" fill="#6FAF6A" />
      <circle cx="9" cy="11" r="0.8" fill="#FFE6C2" />
      <circle cx="13" cy="10" r="0.8" fill="#FFE6C2" />
      <circle cx="11" cy="14" r="0.8" fill="#FFE6C2" />
    </svg>
  )
}

function IcoQueque({ size = 30, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="12" width="16" height="9" rx="2" fill={color} />
      <path d="M4 14 C6 16 8 12 10 14 C12 16 14 12 16 14 C18 16 20 14 20 14 L20 12 L4 12 Z" fill="#E8A080" />
      <rect x="11.4" y="6" width="1.2" height="5" rx="0.6" fill="#FFF5EC" />
      <circle cx="12" cy="5" r="1.4" fill="#C46877" />
    </svg>
  )
}

function IcoEstrella({ size = 22, color = '#C46877' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2 L14.8 8.6 L22 9.3 L16.5 14 L18.2 21 L12 17.3 L5.8 21 L7.5 14 L2 9.3 L9.2 8.6 Z" fill={color} />
    </svg>
  )
}

// Estrellita pixel para el eyebrow del header
function IcoSparkPixel({ size = 10, color = '#A83248' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" fill="none" shapeRendering="crispEdges" aria-hidden="true" className="inline-block align-middle">
      <rect x="3" y="0" width="2" height="8" fill={color} />
      <rect x="0" y="3" width="8" height="2" fill={color} />
    </svg>
  )
}

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

      {/* Icono del producto (viene de data/products) */}
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

      {/* Descripcion */}
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
          className="flex-1 inline-flex items-center justify-center gap-1.5 font-bold text-sm py-2 px-3 rounded-xl transition-all hover:scale-105"
          style={{
            background: '#FFF5EC',
            color: '#8B1A2E',
            border: '2px solid #C46877',
            fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
          }}
        >
          <IcoLupa size={15} color="#8B1A2E" />
          Ver mas
        </Link>
        <a
          href="#pedidos"
          className="flex-1 inline-flex items-center justify-center gap-1.5 font-bold text-sm py-2 px-3 rounded-xl text-white transition-all hover:scale-105"
          style={{
            background: '#8B1A2E',
            boxShadow: '2px 2px 0 #3D1A0A',
            fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
          }}
        >
          <IcoCorazon size={14} color="#FFF5EC" />
          Pedir
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
              className="font-pixel text-xs mb-3 inline-flex items-center gap-2"
              style={{ color: '#A83248', letterSpacing: '0.2em' }}
            >
              <IcoSparkPixel size={9} color="#A83248" />
              NUESTROS DULCES
              <IcoSparkPixel size={9} color="#A83248" />
            </p>
            <h2
              className="font-title text-4xl md:text-5xl mb-4 flex items-center justify-center gap-3 flex-wrap"
              style={{ color: '#3D1A0A' }}
            >
              <IcoQueque size={36} color="#8B1A2E" />
              <span>
                Todo hecho <span style={{ color: '#8B1A2E' }}>con amor</span>
              </span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{
                color: '#6B3A2A',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              }}
            >
              Cada dulce es preparado fresco y con los mejores ingredientes. No hay dos iguales.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-1 w-16 rounded-full" style={{ background: '#C46877' }} />
              <IcoFrutilla size={24} />
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
            className="mt-12 text-center p-6 rounded-3xl text-base flex items-center justify-center gap-2 flex-wrap"
            style={{
              background: '#FFF5EC',
              border: '3px dashed #C46877',
              color: '#6B3A2A',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
            }}
          >
            <IcoEstrella size={20} color="#C46877" />
            <span>
              <strong>Buscas algo especial?</strong> Hacemos pedidos personalizados para
              cumpleanos, eventos y regalos.{' '}
              <a href="#pedidos" style={{ color: '#8B1A2E', fontWeight: 800 }}>
                Escribenos
              </a>
            </span>
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