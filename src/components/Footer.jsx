
export default function Footer() {
  return (
    <footer
      className="relative py-10 px-4 text-center overflow-hidden"
      style={{ background: '#3a1a2e' }}
    >
      {/* Pixel top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'repeating-linear-gradient(90deg, #ff85ad 0, #ff85ad 8px, #6ec6ff 8px, #6ec6ff 16px)' }} />

      <img
src="/src/img/logo_javii.png"
        alt="Javii"
        className="h-20 object-contain mx-auto mb-4 opacity-90"
        style={{ imageRendering: 'pixelated' }}
      />

      <p className="font-pixel text-xs mb-2" style={{ color: '#ff85ad', letterSpacing: '0.1em' }}>
        JAVII CAKES & SWEETS
      </p>
      <p className="font-cute text-sm mb-6" style={{ color: '#c0778a' }}>
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
            className="font-cute font-bold text-sm px-4 py-2 rounded-full transition-all hover:scale-105"
            style={{ border: '2px solid #ff85ad', color: '#ff85ad' }}
            onMouseEnter={e => { e.target.style.background = '#ff85ad'; e.target.style.color = '#3a1a2e' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#ff85ad' }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="h-px w-20" style={{ background: '#6b3050' }} />
        <span className="text-lg sparkle">🍓</span>
        <div className="h-px w-20" style={{ background: '#6b3050' }} />
      </div>

      <p className="font-cute text-xs" style={{ color: '#6b3050' }}>
        © {new Date().getFullYear()} Javii Cakes & Sweets · Hecho con 💗 en Chile
      </p>
    </footer>
  )
}