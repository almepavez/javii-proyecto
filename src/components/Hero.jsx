import { useEffect, useState } from 'react'
import logo from '../img/logo_javii.png'

// Partículas SVG kawaii — sin emojis del sistema
const particles = [
  // Corazoncitos
  { type: 'heart', x: 8,  y: 15, size: 14, opacity: 0.35, delay: 0,    dur: 3.2 },
  { type: 'heart', x: 82, y: 22, size: 10, opacity: 0.25, delay: 0.8,  dur: 2.8 },
  { type: 'heart', x: 55, y: 68, size: 16, opacity: 0.30, delay: 1.4,  dur: 3.5 },
  { type: 'heart', x: 20, y: 72, size: 9,  opacity: 0.20, delay: 2.1,  dur: 2.6 },
  { type: 'heart', x: 90, y: 60, size: 12, opacity: 0.28, delay: 0.4,  dur: 3.0 },
  // Estrellitas de 4 puntas (sparkle)
  { type: 'sparkle', x: 15, y: 45, size: 18, opacity: 0.30, delay: 0.6,  dur: 2.5 },
  { type: 'sparkle', x: 75, y: 12, size: 14, opacity: 0.25, delay: 1.8,  dur: 3.2 },
  { type: 'sparkle', x: 40, y: 78, size: 20, opacity: 0.20, delay: 0.2,  dur: 2.8 },
  { type: 'sparkle', x: 92, y: 38, size: 12, opacity: 0.28, delay: 1.2,  dur: 3.6 },
  { type: 'sparkle', x: 5,  y: 55, size: 16, opacity: 0.22, delay: 2.4,  dur: 2.4 },
  // Puntitos
  { type: 'dot', x: 30, y: 20, size: 7,  opacity: 0.30, delay: 0.9,  dur: 3.0 },
  { type: 'dot', x: 65, y: 48, size: 5,  opacity: 0.25, delay: 1.6,  dur: 2.7 },
  { type: 'dot', x: 48, y: 14, size: 8,  opacity: 0.20, delay: 0.3,  dur: 3.4 },
  { type: 'dot', x: 78, y: 75, size: 6,  opacity: 0.28, delay: 1.9,  dur: 2.5 },
]

function ParticleShape({ type, size, color }) {
  if (type === 'heart') {
    const s = size
    return (
      <svg width={s} height={s} viewBox="0 0 20 18" fill="none">
        <path
          d="M10 16 C10 16 1 10 1 5 C1 2.5 3 1 5.5 1 C7.5 1 9 2.5 10 4 C11 2.5 12.5 1 14.5 1 C17 1 19 2.5 19 5 C19 10 10 16 10 16Z"
          fill={color}
        />
      </svg>
    )
  }
  if (type === 'sparkle') {
    const s = size
    return (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z"
          fill={color}
        />
      </svg>
    )
  }
  // dot
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="4" fill={color} />
    </svg>
  )
}

// Colores de partículas — dentro de la paleta, sin negro
const particleColors = {
  heart:   ['#C46877', '#8B1A2E', '#E8A080'],
  sparkle: ['#C46877', '#FFF5EC', '#EDD5C5'],
  dot:     ['#C46877', '#8B1A2E', '#E8B4A0'],
}

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12"
      style={{
        background: 'linear-gradient(160deg, #FFF5EC 0%, #F5E6D8 45%, #EDD5C5 100%)',
      }}
    >
      {/* Background pixel dots */}
      <div className="absolute inset-0 bg-pixel-dots opacity-20 pointer-events-none" />

      {/* Partículas SVG flotantes */}
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

      {/* Círculos decorativos */}
      <div
        className="absolute top-20 right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C4687744, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E8A08033, transparent 70%)' }}
      />

      {/* Contenido principal */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-4 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Logo */}
        <div className="mb-4 float-slow">
          <img
            src={logo}
            alt="Kitty Dulcecitos"
            className="w-72 md:w-96 lg:w-[460px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <p
          className="font-semibold text-xl md:text-2xl mb-2 mt-2"
          style={{
            color: '#8B1A2E',
            fontFamily: '"Plus Jakarta Sans", "SF Pro Display", -apple-system, sans-serif',
            letterSpacing: '-0.01em',
          }}
        >
          ✨ Dulces hechos con amor y magia ✨
        </p>

        <p
          className="text-base md:text-lg mb-8 max-w-lg leading-relaxed"
          style={{
            color: '#6B3A2A',
            fontFamily: '"Plus Jakarta Sans", "SF Pro Text", -apple-system, sans-serif',
            fontWeight: 400,
          }}
        >
          Alfajores, queques, brownies, tortas personalizadas y más 🍓
          <br />
          <span style={{ fontWeight: 600 }}>Pedidos a domicilio</span> para toda la región 🏡
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="#pedidos"
            className="font-semibold text-lg px-8 py-4 rounded-2xl text-white transition-all hover:scale-105 hover:-translate-y-1"
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
          <a
            href="#productos"
            className="font-semibold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 hover:-translate-y-1"
            style={{
              background: '#FFF5EC',
              color: '#8B1A2E',
              boxShadow: '4px 4px 0 #C46877',
              border: '3px solid #C46877',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              fontWeight: 700,
            }}
          >
            🍰 Ver productos
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: '🏡', text: 'Despacho a domicilio' },
            { icon: '💖', text: 'Hecho con amor' },
            { icon: '🌟', text: 'Ingredientes frescos' },
            { icon: '📱', text: 'Pedidos por WhatsApp' },
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
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5E6D8" />
        </svg>
      </div>
    </section>
  )
}