import { useEffect, useState } from 'react'
import logo from '../img/logo_javii.png'

// Partículas flotantes (corazones, brillos, puntitos)
const particles = [
  { type: 'heart', x: 8,  y: 15, size: 14, opacity: 0.35, delay: 0,    dur: 3.2 },
  { type: 'heart', x: 82, y: 22, size: 10, opacity: 0.25, delay: 0.8,  dur: 2.8 },
  { type: 'heart', x: 55, y: 68, size: 16, opacity: 0.30, delay: 1.4,  dur: 3.5 },
  { type: 'heart', x: 20, y: 72, size: 9,  opacity: 0.20, delay: 2.1,  dur: 2.6 },
  { type: 'heart', x: 90, y: 60, size: 12, opacity: 0.28, delay: 0.4,  dur: 3.0 },
  { type: 'sparkle', x: 15, y: 45, size: 18, opacity: 0.30, delay: 0.6,  dur: 2.5 },
  { type: 'sparkle', x: 75, y: 12, size: 14, opacity: 0.25, delay: 1.8,  dur: 3.2 },
  { type: 'sparkle', x: 40, y: 78, size: 20, opacity: 0.20, delay: 0.2,  dur: 2.8 },
  { type: 'sparkle', x: 92, y: 38, size: 12, opacity: 0.28, delay: 1.2,  dur: 3.6 },
  { type: 'sparkle', x: 5,  y: 55, size: 16, opacity: 0.22, delay: 2.4,  dur: 2.4 },
  { type: 'dot', x: 30, y: 20, size: 7,  opacity: 0.30, delay: 0.9,  dur: 3.0 },
  { type: 'dot', x: 65, y: 48, size: 5,  opacity: 0.25, delay: 1.6,  dur: 2.7 },
  { type: 'dot', x: 48, y: 14, size: 8,  opacity: 0.20, delay: 0.3,  dur: 3.4 },
  { type: 'dot', x: 78, y: 75, size: 6,  opacity: 0.28, delay: 1.9,  dur: 2.5 },
]

function ParticleShape({ type, size, color }) {
  if (type === 'heart') {
    return (
      <svg width={size} height={size} viewBox="0 0 20 18" fill="none">
        <path
          d="M10 16 C10 16 1 10 1 5 C1 2.5 3 1 5.5 1 C7.5 1 9 2.5 10 4 C11 2.5 12.5 1 14.5 1 C17 1 19 2.5 19 5 C19 10 10 16 10 16Z"
          fill={color}
        />
      </svg>
    )
  }
  if (type === 'sparkle') {
    return (
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
          fill={color}
        />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="4" fill={color} />
    </svg>
  )
}

const particleColors = {
  heart:   ['#C46877', '#8B1A2E', '#E8A080'],
  sparkle: ['#C46877', '#FFF5EC', '#EDD5C5'],
  dot:     ['#C46877', '#8B1A2E', '#E8B4A0'],
}

/* ---------- Iconitos kawaii ---------- */

function IcoBrillo({ size = 22, color = '#C46877' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 1.5 L13.8 9 a3 3 0 0 0 2.2 2.2 L23 13 l-7 1.8 a3 3 0 0 0-2.2 2.2 L12 24.5 l-1.8-7.5 a3 3 0 0 0-2.2-2.2 L1 13 l7-1.8 a3 3 0 0 0 2.2-2.2 Z"
        fill={color}
      />
      <circle cx="20" cy="4" r="1.6" fill={color} opacity="0.7" />
      <circle cx="4" cy="20" r="1.2" fill={color} opacity="0.6" />
    </svg>
  )
}

function IcoFrutilla({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22 C6 18 4 13 5 9 C6 5.5 9 4.5 12 6 C15 4.5 18 5.5 19 9 C20 13 18 18 12 22 Z" fill="#A83248" />
      <path d="M9 3 C10 5 11 6 12 6 C13 6 14 5 15 3 C13.5 4 10.5 4 9 3 Z" fill="#6FAF6A" />
      <path d="M12 4.5 L12 6.5" stroke="#5C9457" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="9" cy="11" r="0.8" fill="#FFE6C2" />
      <circle cx="13" cy="10" r="0.8" fill="#FFE6C2" />
      <circle cx="11" cy="14" r="0.8" fill="#FFE6C2" />
      <circle cx="15" cy="13" r="0.8" fill="#FFE6C2" />
    </svg>
  )
}

function IcoCasa({ size = 16, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 L21 11 L19 11 L19 20 L5 20 L5 11 L3 11 Z" fill={color} />
      <rect x="10" y="13" width="4" height="7" rx="0.8" fill="#FFF5EC" />
      <circle cx="12" cy="9" r="1.4" fill="#FFF5EC" />
    </svg>
  )
}

function IcoLazo({ size = 20, color = '#FFF5EC' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12 C9 7 3 7 3 9.5 C3 12 5 13 8 12 Z" fill={color} />
      <path d="M12 12 C15 7 21 7 21 9.5 C21 12 19 13 16 12 Z" fill={color} />
      <path d="M12 12 C9 17 3 17 3 14.5 C3 12 5 11 8 12 Z" fill={color} />
      <path d="M12 12 C15 17 21 17 21 14.5 C21 12 19 11 16 12 Z" fill={color} />
      <circle cx="12" cy="12" r="2.4" fill={color} />
      <circle cx="12" cy="12" r="1" fill="#A83248" />
    </svg>
  )
}

function IcoQueque({ size = 20, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="12" width="16" height="9" rx="2" fill={color} />
      <path d="M4 14 C6 16 8 12 10 14 C12 16 14 12 16 14 C18 16 20 14 20 14 L20 12 L4 12 Z" fill="#E8A080" />
      <rect x="11.4" y="6" width="1.2" height="5" rx="0.6" fill="#FFF5EC" />
      <circle cx="12" cy="5" r="1.4" fill="#C46877" />
    </svg>
  )
}

function IcoCorazon({ size = 16, color = '#A83248' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 18" fill="none" aria-hidden="true">
      <path
        d="M10 16 C10 16 1 10 1 5 C1 2.5 3 1 5.5 1 C7.5 1 9 2.5 10 4 C11 2.5 12.5 1 14.5 1 C17 1 19 2.5 19 5 C19 10 10 16 10 16Z"
        fill={color}
      />
    </svg>
  )
}

function IcoEstrella({ size = 16, color = '#C46877' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2 L14.8 8.6 L22 9.3 L16.5 14 L18.2 21 L12 17.3 L5.8 21 L7.5 14 L2 9.3 L9.2 8.6 Z" fill={color} />
    </svg>
  )
}

function IcoChat({ size = 16, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5 C4 4 5 3 6 3 L18 3 C19 3 20 4 20 5 L20 14 C20 15 19 16 18 16 L9 16 L5 20 L5 16 C4.5 16 4 15 4 14 Z" fill={color} />
      <circle cx="9" cy="9.5" r="1.1" fill="#FFF5EC" />
      <circle cx="12" cy="9.5" r="1.1" fill="#FFF5EC" />
      <circle cx="15" cy="9.5" r="1.1" fill="#FFF5EC" />
    </svg>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-36 md:pt-40 pb-16"
      style={{
        background: 'linear-gradient(160deg, #FFF5EC 0%, #F5E6D8 45%, #EDD5C5 100%)',
      }}
    >
      <div className="absolute inset-0 bg-pixel-dots opacity-20 pointer-events-none" />

      {particles.map((p, i) => {
        const colors = particleColors[p.type]
        const color = colors[i % colors.length]
        return (
          <div
            key={i}
            className="absolute select-none pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
              animation: `float ${p.dur}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          >
            <ParticleShape type={p.type} size={p.size} color={color} />
          </div>
        )
      })}

      <div
        className="absolute top-32 right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C4687744, transparent 70%)' }}
      />
      <div
        className="absolute bottom-24 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8A08033, transparent 70%)' }}
      />

      {/* Grid de 2 columnas: texto a la izquierda, logo a la derecha */}
      <div
        className={`relative z-10 w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Columna texto */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Pill superior */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-5"
            style={{
              background: '#FFF5EC',
              color: '#8B1A2E',
              border: '2px solid #C46877',
              boxShadow: '2px 2px 0 #C46877',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              fontWeight: 600,
            }}
          >
            <IcoBrillo size={16} />
            Pasteleria casera 
          </span>

          {/* Titulo grande */}
          <h1
            className="font-extrabold leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl"
            style={{
              color: '#8B1A2E',
              fontFamily: '"Plus Jakarta Sans", "SF Pro Display", -apple-system, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Dulcesitos hechos con amor
            <br />
             
          </h1>

          {/* Tagline secundaria */}
          <p
            className="font-semibold text-lg md:text-xl mb-4 flex items-center gap-2 justify-center lg:justify-start"
            style={{
              color: '#C46877',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
            }}
          >
            <IcoFrutilla size={20} />
            Cada pedido se hornea pensando en ti
          </p>

          {/* Descripcion */}
          <p
            className="text-base md:text-lg mb-7 max-w-md leading-relaxed"
            style={{
              color: '#6B3A2A',
              fontFamily: '"Plus Jakarta Sans", "SF Pro Text", -apple-system, sans-serif',
              fontWeight: 400,
            }}
          >
            Alfajores, queques, brownies, tortas personalizadas y mas.{' '}
            <span style={{ fontWeight: 600, color: '#8B1A2E' }}>
              Pedidos a domicilio
            </span>{' '}
            para toda la region.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#pedidos"
              className="font-semibold text-lg px-8 py-4 rounded-2xl text-white transition-all hover:scale-105 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #A83248, #8B1A2E)',
                boxShadow: '4px 4px 0 #3D1A0A',
                border: '3px solid #8B1A2E',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                fontWeight: 700,
              }}
            >
              <IcoLazo size={20} color="#FFF5EC" />
              Hacer un pedido
            </a>
            <a
              href="#productos"
              className="font-semibold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              style={{
                background: '#FFF5EC',
                color: '#8B1A2E',
                boxShadow: '4px 4px 0 #C46877',
                border: '3px solid #C46877',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                fontWeight: 700,
              }}
            >
              <IcoQueque size={20} color="#8B1A2E" />
              Ver productos
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {[
              { icon: <IcoCasa size={16} />,     text: 'Despacho a domicilio' },
              { icon: <IcoCorazon size={16} />,  text: 'Hecho con amor' },
              { icon: <IcoEstrella size={16} />, text: 'Ingredientes frescos' },
              { icon: <IcoChat size={16} />,     text: 'Pedidos por WhatsApp' },
            ].map(b => (
              <div
                key={b.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{
                  background: '#FFF5EC',
                  color: '#8B1A2E',
                  border: '2px solid #C46877',
                  boxShadow: '2px 2px 0 #C46877',
                  fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                  fontWeight: 600,
                }}
              >
                <span className="flex items-center">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna logo */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 float-slow">
          {/* Halo suave detras del logo para que no flote en el vacio */}
          <div
            className="absolute w-[78%] aspect-square rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, #C4687733, transparent 68%)' }}
          />
          {/* Brillos decorativos alrededor */}
          <div className="absolute -top-2 left-6 opacity-70 pointer-events-none">
            <IcoBrillo size={26} color="#C46877" />
          </div>
          <div className="absolute top-10 -right-1 opacity-60 pointer-events-none">
            <IcoCorazon size={22} color="#E8A080" />
          </div>
          <div className="absolute bottom-6 -left-2 opacity-60 pointer-events-none">
            <IcoEstrella size={22} color="#C46877" />
          </div>

          <img
            src={logo}
            alt="Kitty Dulcesitos"
            className="relative w-72 md:w-96 lg:w-[440px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5E6D8" />
        </svg>
      </div>
    </section>
  )
}