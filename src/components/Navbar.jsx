import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../img/logo_javii.png'

const navLinks = [
  { label: '🏠 Inicio', href: 'inicio' },
  { label: '🍰 Productos', href: 'productos' },
  { label: '💌 Pedidos', href: 'pedidos' },
  { label: '📸 Galería', href: 'galeria' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(255,245,249,0.92)', backdropFilter: 'blur(12px)', borderBottom: '3px solid #ffb3cc' }}>
      {/* Top ticker */}
      <div className="overflow-hidden py-1" style={{ background: '#ff85ad' }}>
        <div className="flex whitespace-nowrap marquee">
          {Array(6).fill('🍓 Alfajores • 🍰 Queques • 🍫 Brownies • 🧁 Muffins • 🎂 Tortas • 🥐 Cuchuflís • ').map((t, i) => (
            <span key={i} className="text-white font-pixel text-xs mr-4">{t}</span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center gap-2 group"
        >
          <img
            src={logo}
            alt="Javii Cakes"
            className="h-12 object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-cute font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
              style={{ color: '#ff4488', border: '2px solid #ffb3cc' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ff85ad'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.borderColor = '#ff85ad'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#ff4488'
                e.currentTarget.style.borderColor = '#ffb3cc'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pedidos"
            onClick={(e) => handleNavClick(e, 'pedidos')}
            className="font-cute font-extrabold text-sm px-5 py-2 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #ff85ad, #ff4488)', boxShadow: '3px 3px 0 #3a7bd5' }}
          >
            ¡Pedir ahora! 🎀
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-pixel text-lg"
          style={{ color: '#ff4488' }}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2" style={{ background: 'rgba(255,245,249,0.97)' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-cute font-bold text-sm px-4 py-2 rounded-xl text-center"
              style={{ color: '#ff4488', border: '2px solid #ffb3cc' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pedidos"
            onClick={(e) => handleNavClick(e, 'pedidos')}
            className="font-cute font-extrabold text-sm px-5 py-2 rounded-full text-white text-center"
            style={{ background: 'linear-gradient(135deg, #ff85ad, #ff4488)', boxShadow: '3px 3px 0 #3a7bd5' }}
          >
            ¡Pedir ahora! 🎀
          </a>
        </div>
      )}
    </nav>
  )
}