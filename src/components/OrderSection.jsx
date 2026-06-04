import { useState } from 'react'

export default function OrderSection() {
  const [form, setForm] = useState({ nombre: '', producto: '', cantidad: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleWhatsApp = () => {
    const msg = `¡Hola Javii! 🍰\n\nMe llamo *${form.nombre}*\nQuiero pedir: *${form.producto}*\nCantidad: *${form.cantidad}*\n${form.mensaje ? `\nNota: ${form.mensaje}` : ''}\n\n¡Gracias! 💕`
    const url = `https://wa.me/56912345678?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSent(true)
  }

  const productos = [
    'Alfajores', 'Queques', 'Brownies', 'Muffins',
    'Torta personalizada', 'Cuchuflís', 'Otro (lo digo en el mensaje)',
  ]

  return (
    <section
      id="pedidos"
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #ffe4ef 0%, #e8f4ff 100%)' }}
    >
      {/* Pixel dots */}
      <div className="absolute inset-0 bg-pixel-dots opacity-30 pointer-events-none" />

      {/* Floating decos */}
      <span className="absolute top-10 left-6 text-4xl float" style={{ animationDelay: '0s' }}>💌</span>
      <span className="absolute top-20 right-8 text-3xl float" style={{ animationDelay: '0.5s' }}>🎀</span>
      <span className="absolute bottom-16 left-12 text-3xl float" style={{ animationDelay: '1s' }}>🍓</span>
      <span className="absolute bottom-10 right-10 text-4xl float" style={{ animationDelay: '1.5s' }}>🧁</span>

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-pixel text-xs mb-3" style={{ color: '#ff85ad', letterSpacing: '0.2em' }}>
            ✦ HÁGAME EL PEDIDO ✦
          </p>
          <h2 className="font-title text-4xl md:text-5xl mb-4" style={{ color: '#3a1a2e' }}>
            💌 ¡Pide tus{' '}
            <span style={{ color: '#ff4488' }}>dulcecitos!</span>
          </h2>
          <p className="font-cute text-base" style={{ color: '#a0556a' }}>
            Llena el formulario y te contactamos por WhatsApp 🍰
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl p-8 relative"
          style={{
            background: '#fff',
            border: '3px solid #ffb3cc',
            boxShadow: '6px 6px 0 #ff85ad',
          }}
        >
          {/* Corner hearts */}
          <span className="absolute -top-4 -left-4 text-2xl heartbeat">💗</span>
          <span className="absolute -top-4 -right-4 text-2xl heartbeat" style={{ animationDelay: '0.3s' }}>💗</span>

          {sent ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4 heartbeat">🎉</div>
              <h3 className="font-title text-3xl mb-2" style={{ color: '#ff4488' }}>¡Yay, gracias!</h3>
              <p className="font-cute text-base" style={{ color: '#a0556a' }}>
                Si se abrió WhatsApp, envía el mensaje y te respondo prontito 🍰💕
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 font-cute font-bold px-6 py-2 rounded-full text-white"
                style={{ background: '#ff85ad', border: '2px solid #ff4488' }}
              >
                Hacer otro pedido
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">

              {/* Nombre */}
              <div>
                <label className="font-cute font-bold text-sm mb-1 block" style={{ color: '#ff4488' }}>
                  👤 Tu nombre
                </label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="¿Cómo te llamas? ✨"
                  className="w-full px-4 py-3 rounded-xl font-cute text-sm outline-none transition-all"
                  style={{
                    border: '2px solid #ffb3cc',
                    background: '#fff5f9',
                    color: '#3a1a2e',
                  }}
                  onFocus={e => e.target.style.borderColor = '#ff4488'}
                  onBlur={e => e.target.style.borderColor = '#ffb3cc'}
                />
              </div>

              {/* Producto */}
              <div>
                <label className="font-cute font-bold text-sm mb-1 block" style={{ color: '#ff4488' }}>
                  🍰 ¿Qué quieres pedir?
                </label>
                <select
                  name="producto"
                  value={form.producto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl font-cute text-sm outline-none transition-all"
                  style={{
                    border: '2px solid #ffb3cc',
                    background: '#fff5f9',
                    color: form.producto ? '#3a1a2e' : '#c0778a',
                  }}
                  onFocus={e => e.target.style.borderColor = '#ff4488'}
                  onBlur={e => e.target.style.borderColor = '#ffb3cc'}
                >
                  <option value="">Elige un producto 🎀</option>
                  {productos.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              {/* Cantidad */}
              <div>
                <label className="font-cute font-bold text-sm mb-1 block" style={{ color: '#ff4488' }}>
                  🔢 Cantidad
                </label>
                <input
                  name="cantidad"
                  value={form.cantidad}
                  onChange={handleChange}
                  placeholder="Ej: 12 alfajores, 1 torta grande..."
                  className="w-full px-4 py-3 rounded-xl font-cute text-sm outline-none transition-all"
                  style={{
                    border: '2px solid #ffb3cc',
                    background: '#fff5f9',
                    color: '#3a1a2e',
                  }}
                  onFocus={e => e.target.style.borderColor = '#ff4488'}
                  onBlur={e => e.target.style.borderColor = '#ffb3cc'}
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="font-cute font-bold text-sm mb-1 block" style={{ color: '#ff4488' }}>
                  💬 Mensaje o detalles (opcional)
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="¿Fecha de entrega, sabor especial, decoración? ¡Cuéntame! 🌸"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl font-cute text-sm outline-none transition-all resize-none"
                  style={{
                    border: '2px solid #ffb3cc',
                    background: '#fff5f9',
                    color: '#3a1a2e',
                  }}
                  onFocus={e => e.target.style.borderColor = '#ff4488'}
                  onBlur={e => e.target.style.borderColor = '#ffb3cc'}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleWhatsApp}
                disabled={!form.nombre || !form.producto || !form.cantidad}
                className="w-full py-4 rounded-2xl font-cute font-extrabold text-lg text-white transition-all hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '4px 4px 0 #075E54',
                  border: '3px solid #25D366',
                }}
              >
                📱 ¡Enviar por WhatsApp!
              </button>

              <p className="font-cute text-xs text-center" style={{ color: '#c0778a' }}>
                Se abrirá WhatsApp con tu pedido listo para enviar 💕
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}