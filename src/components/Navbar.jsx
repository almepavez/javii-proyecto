import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../img/logo_texto.png'

/* ---------- Iconitos kawaii con borde pixel-art (crispEdges) ---------- */

function IcoCasa({ size = 16, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges" aria-hidden="true">
      <path d="M8 2 L14 7 L12 7 L12 14 L4 14 L4 7 L2 7 Z" fill={color} />
      <rect x="6" y="9" width="4" height="5" fill="#FFF5EC" />
      <rect x="7" y="5" width="2" height="2" fill="#FFF5EC" />
    </svg>
  )
}

function IcoQueque({ size = 16, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="3" y="8" width="10" height="6" fill={color} />
      <rect x="3" y="7" width="10" height="2" fill="#E8A080" />
      <rect x="7" y="3" width="2" height="3" fill="#FFF5EC" />
      <rect x="6" y="2" width="4" height="2" fill="#C46877" />
    </svg>
  )
}

function IcoCarta({ size = 16, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="2" y="4" width="12" height="9" fill={color} />
      <path d="M2 4 L8 9 L14 4" stroke="#FFF5EC" strokeWidth="1.4" fill="none" />
      <path d="M8 6 C8 6 6 4.5 6 6 C6 7 8 8 8 8 C8 8 10 7 10 6 C10 4.5 8 6 8 6 Z" fill="#C46877" />
    </svg>
  )
}

function IcoFoto({ size = 16, color = '#8B1A2E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="2" y="4" width="12" height="9" fill={color} />
      <rect x="6" y="2" width="4" height="2" fill={color} />
      <circle cx="8" cy="8.5" r="2.4" fill="#FFF5EC" />
      <circle cx="8" cy="8.5" r="1" fill="#C46877" />
      <rect x="11" y="5" width="1.5" height="1.5" fill="#E8A080" />
    </svg>
  )
}

function IcoLazo({ size = 18, color = '#FFF5EC' }) {
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

// Corazoncito pixel para separar los items del ticker
function IcoCorazonPixel({ size = 10, color = '#E8A080' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 7" fill="none" shapeRendering="crispEdges" aria-hidden="true" className="inline-block align-middle mx-2">
      <rect x="1" y="1" width="2" height="2" fill={color} />
      <rect x="5" y="1" width="2" height="2" fill={color} />
      <rect x="0" y="2" width="8" height="2" fill={color} />
      <rect x="1" y="4" width="6" height="1" fill={color} />
      <rect x="2" y="5" width="4" height="1" fill={color} />
      <rect x="3" y="6" width="2" height="1" fill={color} />
    </svg>
  )
}

const navLinks = [
  { label: 'Inicio',    href: 'inicio',    icon: IcoCasa },
  { label: 'Productos', href: 'productos', icon: IcoQueque },
  { label: 'Pedidos',   href: 'pedidos',   icon: IcoCarta },
  { label: 'Galeria',   href: 'galeria',   icon: IcoFoto },
]

const tickerItems = ['Alfajores', 'Queques', 'Brownies', 'Muffins', 'Tortas', 'Cuchuflis']

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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255,245,236,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '3px solid #C46877',
      }}
    >
      {/* Ticker */}
      <div className="overflow-hidden py-1.5" style={{ background: '#8B1A2E' }}>
        <div className="flex whitespace-nowrap marquee">
          {Array(6).fill(tickerItems).flat().map((t, i) => (
            <span key={i} className="text-white font-pixel text-xs flex items-center mr-3">
              {t}
              <IcoCorazonPixel size={11} color="#E8A080" />
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo (mas grande) */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, 'inicio')}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Kitty Dulcesitos" className="h-16 md:h-20 object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map(link => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5"
                style={{
                  color: '#8B1A2E',
                  border: '2px solid #C46877',
                  fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#8B1A2E'
                  e.currentTarget.style.color = '#FFF5EC'
                  e.currentTarget.style.borderColor = '#8B1A2E'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#8B1A2E'
                  e.currentTarget.style.borderColor = '#C46877'
                }}
              >
                <Icon size={15} color="currentColor" />
                {link.label}
              </a>
            )
          })}
          <a
            href="#pedidos"
            onClick={(e) => handleNavClick(e, 'pedidos')}
            className="font-bold text-sm px-5 py-2 rounded-full text-white transition-all hover:scale-105 inline-flex items-center gap-1.5"
            style={{
              background: 'linear-gradient(135deg, #A83248, #8B1A2E)',
              boxShadow: '3px 3px 0 #3D1A0A',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              fontWeight: 700,
            }}
          >
            Pedir ahora
            <IcoLazo size={18} color="#FFF5EC" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden font-pixel text-lg"
          style={{ color: '#8B1A2E' }}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? '\u2715' : '\u2630'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-2"
          style={{ background: 'rgba(255,245,236,0.97)' }}
        >
          {navLinks.map(link => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-bold text-sm px-4 py-2 rounded-xl text-center inline-flex items-center justify-center gap-2"
                style={{
                  color: '#8B1A2E',
                  border: '2px solid #C46877',
                  fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                }}
              >
                <Icon size={15} color="#8B1A2E" />
                {link.label}
              </a>
            )
          })}
          <a
            href="#pedidos"
            onClick={(e) => handleNavClick(e, 'pedidos')}
            className="font-bold text-sm px-5 py-2 rounded-full text-white text-center inline-flex items-center justify-center gap-2"
            style={{
              background: 'linear-gradient(135deg, #A83248, #8B1A2E)',
              boxShadow: '3px 3px 0 #3D1A0A',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              fontWeight: 700,
            }}
          >
            Pedir ahora
            <IcoLazo size={18} color="#FFF5EC" />
          </a>
        </div>
      )}
    </nav>
  )
}