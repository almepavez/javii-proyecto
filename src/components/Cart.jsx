import { useState } from 'react'
import { useCart } from './CartContext'

export default function Cart() {
  const { items, removeItem, updateCantidad, clearCart, total, totalItems, isOpen, setIsOpen } = useCart()
  const [step, setStep] = useState(1) // 1: carrito, 2: formulario
  const [form, setForm] = useState({ nombre: '', telefono: '', direccion: '', nota: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleWhatsApp = () => {
    if (!form.nombre || !form.telefono) return
    const lineas = items.map(i => {
      const precio = i.precio_unidad || i.precio_paquete || 0
      return `• ${i.emoji} ${i.name} x${i.cantidad} = $${(precio * i.cantidad).toLocaleString('es-CL')}`
    })
    const msg = [
      `¡Hola Javii! 🍰 Quiero hacer un pedido 💕`,
      ``,
      `*Mi pedido:*`,
      ...lineas,
      ``,
      `*Total: $${total.toLocaleString('es-CL')}*`,
      ``,
      `*Mis datos:*`,
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      form.direccion ? `Dirección: ${form.direccion}` : null,
      form.nota ? `Nota: ${form.nota}` : null,
    ].filter(Boolean).join('\n')

    window.open(`https://wa.me/56912345678?text=${encodeURIComponent(msg)}`, '_blank')
    setEnviado(true)
    clearCart()
    setTimeout(() => { setIsOpen(false); setStep(1); setEnviado(false); setForm({ nombre: '', telefono: '', direccion: '', nota: '' }) }, 2000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40"
        style={{ background: 'rgba(58,26,46,0.35)', backdropFilter: 'blur(2px)' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-50 flex flex-col"
        style={{
          width: '100%',
          maxWidth: '420px',
          background: '#fff5f9',
          borderLeft: '4px solid #ffb3cc',
          boxShadow: '-8px 0 32px rgba(255,68,136,0.12)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '3px solid #ffe0ef' }}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛒</span>
            <span className="font-title text-2xl" style={{ color: '#3a1a2e' }}>Tu pedido</span>
            {totalItems > 0 && (
              <span className="font-pixel text-white text-xs px-2 py-1 rounded-full" style={{ background: '#ff4488', fontSize: '0.5rem' }}>
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => { setIsOpen(false); setStep(1) }}
            className="font-cute font-bold text-xl px-3 py-1 rounded-full transition-all hover:scale-110"
            style={{ color: '#ff4488', border: '2px solid #ffb3cc', background: '#fff' }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">

          {enviado ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <div className="text-6xl">🎉</div>
              <p className="font-title text-2xl text-center" style={{ color: '#ff4488' }}>¡Pedido enviado!</p>
              <p className="font-cute text-center" style={{ color: '#a0556a' }}>Te redirigimos a WhatsApp para confirmar con Javii 💕</p>
            </div>
          ) : step === 1 ? (
            <>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="text-5xl">🍰</div>
                  <p className="font-cute text-center text-lg" style={{ color: '#a0556a' }}>Tu carrito está vacío</p>
                  <button onClick={() => setIsOpen(false)}
                    className="font-cute font-bold px-6 py-3 rounded-2xl text-white transition-all hover:scale-105"
                    style={{ background: '#ff85ad' }}>
                    Ver productos 🍓
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map(item => {
                    const precio = item.precio_unidad || item.precio_paquete || 0
                    return (
                      <div key={item.id} className="flex items-center gap-3 p-4 rounded-2xl"
                        style={{ background: item.color, border: `3px solid ${item.border}` }}>
                        <span className="text-3xl">{item.emoji}</span>
                        <div className="flex-1">
                          <p className="font-cute font-bold text-sm" style={{ color: '#3a1a2e' }}>{item.name}</p>
                          <p className="font-cute text-xs" style={{ color: item.shadow }}>
                            ${precio.toLocaleString('es-CL')} c/u
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateCantidad(item.id, item.cantidad - 1)}
                            className="w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center transition-all hover:scale-110"
                            style={{ background: '#fff', border: `2px solid ${item.border}`, color: item.shadow }}>
                            −
                          </button>
                          <span className="font-cute font-bold text-sm w-5 text-center" style={{ color: '#3a1a2e' }}>
                            {item.cantidad}
                          </span>
                          <button onClick={() => updateCantidad(item.id, item.cantidad + 1)}
                            className="w-7 h-7 rounded-full font-bold text-sm flex items-center justify-center transition-all hover:scale-110"
                            style={{ background: item.shadow, color: '#fff' }}>
                            +
                          </button>
                        </div>
                        <div className="text-right ml-2">
                          <p className="font-title text-base" style={{ color: item.shadow }}>
                            ${(precio * item.cantidad).toLocaleString('es-CL')}
                          </p>
                          <button onClick={() => removeItem(item.id)}
                            className="font-cute text-xs mt-1 transition-all hover:scale-110"
                            style={{ color: '#ff4488' }}>
                            eliminar
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </>
          ) : (
            /* Paso 2: formulario */
            <div className="flex flex-col gap-4">
              <p className="font-cute font-bold text-sm" style={{ color: '#a0556a' }}>
                Completa tus datos y te enviamos a WhatsApp para confirmar con Javii 💕
              </p>
              {[
                { name: 'nombre', label: '👤 Nombre *', placeholder: 'Tu nombre', required: true },
                { name: 'telefono', label: '📱 Teléfono *', placeholder: '+56 9 1234 5678', required: true },
                { name: 'direccion', label: '🏡 Dirección (si hay despacho)', placeholder: 'Calle, número, comuna', required: false },
              ].map(field => (
                <div key={field.name}>
                  <label className="font-cute font-bold text-xs block mb-1" style={{ color: '#3a1a2e' }}>
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl font-cute text-sm outline-none"
                    style={{ border: '3px solid #ffb3cc', background: '#fff', color: '#3a1a2e' }}
                  />
                </div>
              ))}
              <div>
                <label className="font-cute font-bold text-xs block mb-1" style={{ color: '#3a1a2e' }}>
                  📝 Nota adicional
                </label>
                <textarea
                  name="nota"
                  value={form.nota}
                  onChange={handleChange}
                  placeholder="Alergias, dedicatoria, fecha que necesitas..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl font-cute text-sm outline-none resize-none"
                  style={{ border: '3px solid #ffb3cc', background: '#fff', color: '#3a1a2e' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!enviado && items.length > 0 && (
          <div className="px-6 py-4" style={{ borderTop: '3px solid #ffe0ef' }}>
            <div className="flex justify-between items-center mb-4">
              <span className="font-cute font-bold text-sm" style={{ color: '#6b4050' }}>Total estimado</span>
              <span className="font-title text-2xl" style={{ color: '#ff4488' }}>
                ${total.toLocaleString('es-CL')}
              </span>
            </div>

            {step === 1 ? (
              <button
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-2xl font-cute font-extrabold text-lg text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #ff85ad, #ff4488)', boxShadow: '4px 4px 0 #c41060', border: '3px solid #ff4488' }}>
                Continuar con mis datos →
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleWhatsApp}
                  disabled={!form.nombre || !form.telefono}
                  className="w-full py-4 rounded-2xl font-cute font-extrabold text-lg text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '4px 4px 0 #075E54', border: '3px solid #25D366' }}>
                  📱 Enviar pedido por WhatsApp
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="w-full py-2 rounded-xl font-cute font-bold text-sm transition-all hover:scale-105"
                  style={{ color: '#ff4488', border: '2px solid #ffb3cc', background: '#fff' }}>
                  ← Volver al carrito
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}