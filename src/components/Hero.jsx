import { useEffect, useState } from 'react'

const floatingEmojis = ['🍓', '🍰', '🧁', '🍫', '🎂', '🍬', '💕', '⭐', '🎀', '🌸']

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
        background: 'linear-gradient(160deg, #fff5f9 0%, #ffe4ef 40%, #e8f4ff 100%)',
      }}
    >
      {/* Background pixel dots */}
      <div className="absolute inset-0 bg-pixel-dots opacity-40 pointer-events-none" />

      {/* Floating pixel emojis */}
      {floatingEmojis.map((emoji, i) => (
        <span
          key={i}
          className="absolute select-none pointer-events-none text-2xl"
          style={{
            left: `${5 + (i * 9.5) % 90}%`,
            top: `${10 + (i * 13) % 70}%`,
            animation: `float ${2.5 + (i % 3) * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.35,
            fontSize: `${1 + (i % 3) * 0.4}rem`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffb3cc44, transparent 70%)' }} />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6ec6ff33, transparent 70%)' }} />

      {/* Main content */}
      <div className={`relative z-10 flex flex-col items-center text-center px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Logo principal */}
        <div className="mb-4 float-slow">
          <img
src="/src/img/logo_javii.png"
            alt="Javii Cakes & Sweets"
            className="w-72 md:w-96 lg:w-[460px] object-contain drop-shadow-2xl"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Tagline */}
        <p
          className="font-cute font-extrabold text-xl md:text-2xl mb-2 mt-2"
          style={{ color: '#ff4488' }}
        >
          ✨ Dulces hechos con amor y magia ✨
        </p>
        <p className="font-cute text-base md:text-lg mb-8 max-w-lg" style={{ color: '#a0556a' }}>
          Alfajores, queques, brownies, tortas personalizadas y más 🍓
          <br />
          <span className="font-bold">Pedidos a domicilio</span> para toda la región 🏡
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="#pedidos"
            className="font-cute font-extrabold text-lg px-8 py-4 rounded-2xl text-white transition-all hover:scale-105 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #ff85ad, #ff4488)',
              boxShadow: '4px 4px 0 #3a7bd5',
              border: '3px solid #ff4488',
            }}
          >
            🎀 ¡Hacer un pedido!
          </a>
          <a
            href="#productos"
            className="font-cute font-extrabold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 hover:-translate-y-1"
            style={{
              background: '#fff',
              color: '#ff4488',
              boxShadow: '4px 4px 0 #ffb3cc',
              border: '3px solid #ffb3cc',
            }}
          >
            🍰 Ver productos
          </a>
        </div>

        {/* Trust badges pixel style */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: '🏡', text: 'Despacho a domicilio' },
            { icon: '💖', text: 'Hecho con amor' },
            { icon: '🌟', text: 'Ingredientes frescos' },
            { icon: '📱', text: 'Pedidos por WhatsApp' },
          ].map(b => (
            <div
              key={b.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full font-cute text-sm font-bold"
              style={{
                background: '#fff',
                color: '#ff4488',
                border: '2px solid #ffb3cc',
                boxShadow: '2px 2px 0 #ffb3cc',
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
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff5f9" />
        </svg>
      </div>
    </section>
  )
}