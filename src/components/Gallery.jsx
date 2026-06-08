import { useState } from 'react'

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
    label: '🍪 Alfajores',
    cat: 'alfajores',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80',
    label: '🍫 Brownies',
    cat: 'brownies',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80',
    label: '🎂 Torta',
    cat: 'tortas',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&q=80',
    label: '🧁 Muffins',
    cat: 'muffins',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80',
    label: '🍰 Queque',
    cat: 'queques',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    label: '🎂 Torta Especial',
    cat: 'tortas',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    label: '🎂 Torta Cumpleaños',
    cat: 'tortas',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
    label: '🍫 Choco Cake',
    cat: 'tortas',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=600&q=80',
    label: '🧁 Cupcakes',
    cat: 'muffins',
  },
]

const categories = [
  { key: 'all', label: '✨ Todos' },
  { key: 'tortas', label: '🎂 Tortas' },
  { key: 'alfajores', label: '🍪 Alfajores' },
  { key: 'brownies', label: '🍫 Brownies' },
  { key: 'muffins', label: '🧁 Muffins' },
  { key: 'queques', label: '🍰 Queques' },
]

function LightboxModal({ photo, onClose }) {
  if (!photo) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(61,26,10,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full rounded-3xl overflow-hidden"
        style={{ border: '4px solid #C46877', boxShadow: '8px 8px 0 #3D1A0A' }}
        onClick={e => e.stopPropagation()}
      >
        <img src={photo.url} alt={photo.label} className="w-full object-cover max-h-[70vh]" />
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ background: '#FFF5EC' }}
        >
          <span className="font-title text-xl" style={{ color: '#8B1A2E' }}>{photo.label}</span>
          <a
            href="#pedidos"
            onClick={onClose}
            className="font-bold text-sm px-4 py-2 rounded-full text-white"
            style={{
              background: '#8B1A2E',
              boxShadow: '2px 2px 0 #3D1A0A',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
            }}
          >
            ¡Quiero uno! 💕
          </a>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full font-bold text-white flex items-center justify-center"
          style={{ background: '#8B1A2E', border: '2px solid #FFF5EC' }}
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activecat, setActivecat] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activecat === 'all' ? photos : photos.filter(p => p.cat === activecat)

  return (
    <section id="galeria" className="relative" style={{ background: '#FFF5EC' }}>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p
              className="font-pixel text-xs mb-3"
              style={{ color: '#A83248', letterSpacing: '0.2em' }}
            >
              ✦ GALERÍA ✦
            </p>
            <h2 className="font-title text-4xl md:text-5xl mb-4" style={{ color: '#3D1A0A' }}>
              📸 Nuestras{' '}
              <span style={{ color: '#8B1A2E' }}>creaciones</span>
            </h2>
            <p
              className="text-base max-w-md mx-auto"
              style={{
                color: '#6B3A2A',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              }}
            >
              Cada dulce es único y hecho con mucho amor 🍓
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="h-1 w-16 rounded-full" style={{ background: '#C46877' }} />
              <span className="text-xl">🎀</span>
              <div className="h-1 w-16 rounded-full" style={{ background: '#C46877' }} />
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActivecat(cat.key)}
                className="font-bold text-sm px-4 py-2 rounded-full transition-all hover:scale-105"
                style={{
                  background: activecat === cat.key ? '#8B1A2E' : '#FFF5EC',
                  color: activecat === cat.key ? '#FFF5EC' : '#8B1A2E',
                  border: `2px solid ${activecat === cat.key ? '#8B1A2E' : '#C46877'}`,
                  boxShadow: activecat === cat.key ? '3px 3px 0 #3D1A0A' : '2px 2px 0 #C46877',
                  fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((photo, i) => (
              <div
                key={photo.id}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  border: '3px solid #C46877',
                  boxShadow: '4px 4px 0 #C46877',
                  animation: `bounce-in 0.5s ease both`,
                  animationDelay: `${i * 0.07}s`,
                }}
                onClick={() => setLightbox(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(61,26,10,0.82), transparent)' }}
                >
                  <span
                    className="font-title text-white text-lg"
                  >{photo.label}</span>
                  <span
                    className="text-xs mt-1"
                    style={{
                      color: '#EDD5C5',
                      fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                    }}
                  >Click para ver 💕</span>
                </div>

                <div
                  className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-all"
                  style={{ background: '#8B1A2E', border: '2px solid #FFF5EC' }}
                >
                  💗
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p
              className="text-base mb-4"
              style={{
                color: '#6B3A2A',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              }}
            >
              ¿Te antojaste? 😋
            </p>
            <a
              href="#pedidos"
              className="inline-block font-bold text-lg px-8 py-4 rounded-2xl text-white transition-all hover:scale-105 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #A83248, #8B1A2E)',
                boxShadow: '4px 4px 0 #3D1A0A',
                border: '3px solid #8B1A2E',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                fontWeight: 700,
              }}
            >
              🎀 ¡Hacer un pedido!
            </a>
          </div>
        </div>
      </div>

      {/* Ola inferior — hacia la siguiente sección */}
      <div className="pointer-events-none" style={{ marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5E6D8" />
        </svg>
      </div>

      <LightboxModal photo={lightbox} onClose={() => setLightbox(null)} />
    </section>
  )
}