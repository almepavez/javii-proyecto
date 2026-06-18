import logo from '../img/logo_javii.png'

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-4 text-center overflow-hidden"
      style={{ background: '#3D1A0A' }}
    >
      {/* Pixel top border — colores de la paleta */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'repeating-linear-gradient(90deg, #C46877 0, #C46877 8px, #8B1A2E 8px, #8B1A2E 16px)' }}
      />

      <img
        src={logo}
        alt="Kitty Dulcecitos"
        className="h-20 object-contain mx-auto mb-4 opacity-90"
      />

      <p
        className="font-pixel text-xs mb-2"
        style={{ color: '#C46877', letterSpacing: '0.1em' }}
      >
        KITTY DULCECITOS
      </p>
      <p
        className="text-sm mb-6"
        style={{
          color: '#E8B4A0',
          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
        }}
      >
        ✨ Dulces artesanales hechos con amor ✨
      </p>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {[
          { label: '📸 Instagram', href: 'https://instagram.com' },
          { label: '📱 WhatsApp', href: 'https://wa.me/56912345678' },
          { label: '💌 Facebook', href: 'https://facebook.com' },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-sm px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{
              border: '2px solid #C46877',
              color: '#C46877',
              fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#C46877'
              e.currentTarget.style.color = '#FFF5EC'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#C46877'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-px w-20" style={{ background: '#6B2A1A' }} />
        <span className="text-lg">🍓</span>
        <div className="h-px w-20" style={{ background: '#6B2A1A' }} />
      </div>

      <p
        className="text-xs"
        style={{
          color: '#8B4A3A',
          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
        }}
      >
        © {new Date().getFullYear()} Kitty Dulcecitos · Hecho con 💗 en Chile
      </p>
    </footer>
  )
}