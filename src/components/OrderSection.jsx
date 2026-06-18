import { useState } from 'react'

export default function OrderSection() {
  const [form, setForm] = useState({ nombre: '', producto: '', cantidad: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleWhatsApp = () => {
    const msg = `¡Hola Kitty Dulcecitos! 🍰\n\nMe llamo *${form.nombre}*\nQuiero pedir: *${form.producto}*\nCantidad: *${form.cantidad}*\n${form.mensaje ? `\nNota: ${form.mensaje}` : ''}\n\n¡Gracias! 💕`
    const url = `https://wa.me/56912345678?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSent(true)
  }

  const productos = [
    'Alfajores', 'Queques', 'Brownies', 'Muffins',
    'Torta personalizada', 'Cuchuflís', 'Otro (lo digo en el mensaje)',
  ]

  const inputStyle = {
    border: '2px solid #C46877',
    background: '#FFF5EC',
    color: '#3D1A0A',
    fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
  }

  return (
    <section
      id="pedidos"
      className="relative overflow-hidden"
      style={{ background: '#FFF5EC' }}
    >
      {/* Pixel dots */}
      <div className="absolute inset-0 bg-pixel-dots opacity-15 pointer-events-none" />

      {/* Floating decos — reducidos y más sutiles */}
      <span className="absolute top-10 left-6 text-3xl float" style={{ animationDelay: '0s', opacity: 0.3 }}>💌</span>
      <span className="absolute bottom-16 right-10 text-3xl float" style={{ animationDelay: '1s', opacity: 0.3 }}>🍓</span>

      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-10">
            <p
              className="font-pixel text-xs mb-3"
              style={{ color: '#A83248', letterSpacing: '0.2em' }}
            >
              ✦ HÁGAME EL PEDIDO ✦
            </p>
            <h2 className="font-title text-4xl md:text-5xl mb-4" style={{ color: '#3D1A0A' }}>
               ¡Pide tus{' '}
              <span style={{ color: '#8B1A2E' }}>dulcecitos!</span>
            </h2>
            <p
              className="text-base"
              style={{
                color: '#6B3A2A',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              }}
            >
              Llena el formulario y te contactamos por WhatsApp 🍰
            </p>
          </div>

          {/* Card */}
          <div
            className="rounded-3xl p-8 relative"
            style={{
              background: '#FFF5EC',
              border: '3px solid #C46877',
              boxShadow: '6px 6px 0 #3D1A0A',
            }}
          >
            <span className="absolute -top-4 -left-4 text-2xl heartbeat">💗</span>
            <span className="absolute -top-4 -right-4 text-2xl heartbeat" style={{ animationDelay: '0.3s' }}>💗</span>

            {sent ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4 heartbeat">🎉</div>
                <h3 className="font-title text-3xl mb-2" style={{ color: '#8B1A2E' }}>¡Yay, gracias!</h3>
                <p
                  className="text-base"
                  style={{
                    color: '#6B3A2A',
                    fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                  }}
                >
                  Si se abrió WhatsApp, envía el mensaje y te respondo prontito 🍰💕
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-bold px-6 py-2 rounded-full text-white"
                  style={{
                    background: '#A83248',
                    border: '2px solid #8B1A2E',
                    fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                  }}
                >
                  Hacer otro pedido
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">

                {/* Nombre */}
                <div>
                  <label
                    className="font-bold text-sm mb-1 block"
                    style={{ color: '#8B1A2E', fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif' }}
                  >
                    👤 Tu nombre
                  </label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="¿Cómo te llamas? ✨"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#8B1A2E'}
                    onBlur={e => e.target.style.borderColor = '#C46877'}
                  />
                </div>

                {/* Producto */}
                <div>
                  <label
                    className="font-bold text-sm mb-1 block"
                    style={{ color: '#8B1A2E', fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif' }}
                  >
                    🍰 ¿Qué quieres pedir?
                  </label>
                  <select
                    name="producto"
                    value={form.producto}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      ...inputStyle,
                      color: form.producto ? '#3D1A0A' : '#A07060',
                    }}
                    onFocus={e => e.target.style.borderColor = '#8B1A2E'}
                    onBlur={e => e.target.style.borderColor = '#C46877'}
                  >
                    <option value="">Elige un producto 🎀</option>
                    {productos.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                {/* Cantidad */}
                <div>
                  <label
                    className="font-bold text-sm mb-1 block"
                    style={{ color: '#8B1A2E', fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif' }}
                  >
                    🔢 Cantidad
                  </label>
                  <input
                    name="cantidad"
                    value={form.cantidad}
                    onChange={handleChange}
                    placeholder="Ej: 12 alfajores, 1 torta grande..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#8B1A2E'}
                    onBlur={e => e.target.style.borderColor = '#C46877'}
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    className="font-bold text-sm mb-1 block"
                    style={{ color: '#8B1A2E', fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif' }}
                  >
                    💬 Mensaje o detalles (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿Fecha de entrega, sabor especial, decoración? ¡Cuéntame! 🌸"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#8B1A2E'}
                    onBlur={e => e.target.style.borderColor = '#C46877'}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleWhatsApp}
                  disabled={!form.nombre || !form.producto || !form.cantidad}
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white transition-all hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '4px 4px 0 #075E54',
                    border: '3px solid #25D366',
                    fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  📱 ¡Enviar por WhatsApp!
                </button>

                <p
                  className="text-xs text-center"
                  style={{
                    color: '#A07060',
                    fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                  }}
                >
                  Se abrirá WhatsApp con tu pedido listo para enviar 💕
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ola inferior */}
      <div className="pointer-events-none" style={{ marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5E6D8" />
        </svg>
      </div>

    </section>
  )
}