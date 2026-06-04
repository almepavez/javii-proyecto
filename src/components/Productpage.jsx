import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getProducto, productos } from '../data/products'
import { useCart } from './CartContext'
import CalculadoraTortas from './CalculadoraTortas'

function PrecioBadge({ producto }) {
  if (producto.precio_referencia) {
    return (
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl"
          style={{ background: producto.color, border: `3px solid ${producto.border}`, boxShadow: `4px 4px 0 ${producto.shadow}` }}>
          <span className="font-title text-2xl" style={{ color: producto.shadow }}>{producto.precio_referencia}</span>
        </div>
        <p className="font-cute text-sm" style={{ color: '#a0556a' }}>{producto.precio_nota}</p>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-3">
      {(producto.precio_unidad || producto.precio_paquete) && (
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl"
          style={{ background: producto.color, border: `3px solid ${producto.border}`, boxShadow: `3px 3px 0 ${producto.shadow}` }}>
          <span className="font-cute font-bold text-sm" style={{ color: '#6b4050' }}>
            {producto.precio_paquete ? `Paquete x${producto.unidades_paquete}` : 'Precio por unidad'}
          </span>
          <span className="font-title text-2xl" style={{ color: producto.shadow }}>
            ${(producto.precio_unidad || producto.precio_paquete).toLocaleString('es-CL')}
          </span>
        </div>
      )}
      {producto.precio_docena && (
        <div className="flex items-center justify-between px-5 py-3 rounded-2xl relative"
          style={{ background: '#fff5f9', border: '3px solid #ff85ad', boxShadow: '3px 3px 0 #ff4488' }}>
          <span className="absolute -top-3 -right-2 font-pixel text-white px-2 py-1 rounded-full"
            style={{ background: '#ff4488', fontSize: '0.45rem' }}>
            MEJOR PRECIO
          </span>
          <div>
            <span className="font-cute font-bold text-sm" style={{ color: '#6b4050' }}>Docena (12 unid.)</span>
            <p className="font-cute text-xs" style={{ color: '#ff4488' }}>
              ¡Ahorras ${(producto.precio_unidad * 12 - producto.precio_docena).toLocaleString('es-CL')}!
            </p>
          </div>
          <span className="font-title text-2xl" style={{ color: '#ff4488' }}>
            ${producto.precio_docena.toLocaleString('es-CL')}
          </span>
        </div>
      )}
      {producto.descuento_mayor && (
        <div className="px-4 py-2 rounded-xl text-center font-cute text-sm font-bold"
          style={{ background: '#e8f4ff', border: '2px dashed #6ec6ff', color: '#3a7bd5' }}>
          🎉 Por mayor: {producto.descuento_mayor}
        </div>
      )}
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const producto = getProducto(id)
  const { addItem } = useCart()
  const [showCalculadora, setShowCalculadora] = useState(false)

  if (!producto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: '#fff5f9' }}>
        <div className="text-6xl mb-4">🍰</div>
        <h2 className="font-title text-3xl mb-2" style={{ color: '#ff4488' }}>Producto no encontrado</h2>
        <button onClick={() => navigate('/')} className="font-cute font-bold mt-4 px-6 py-3 rounded-full text-white" style={{ background: '#ff85ad' }}>
          ← Volver al inicio
        </button>
      </div>
    )
  }

  const esTorta = producto.id === 'tortas'
  const relacionados = productos.filter(p => p.id !== id).slice(0, 4)
  const whatsappMsg = `¡Hola Javii! 🍰 Quiero pedir *${producto.name}* 💕`
  const whatsappUrl = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMsg)}`

  return (
    <div className="min-h-screen pb-20" style={{ background: '#fff5f9' }}>

      {/* Calculadora modal — solo aparece si showCalculadora es true */}
      {showCalculadora && <CalculadoraTortas onClose={() => setShowCalculadora(false)} />}

      <div className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-cute font-bold text-sm px-4 py-2 rounded-full transition-all hover:scale-105"
          style={{ color: '#ff4488', border: '2px solid #ffb3cc', background: '#fff' }}>
          ← Volver
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Imagen */}
          <div>
            <span className="inline-block mb-3 font-pixel text-white px-3 py-2 rounded-xl"
              style={{ background: producto.shadow, fontSize: '0.5rem' }}>
              {producto.badge}
            </span>
            <div className="rounded-3xl overflow-hidden"
              style={{ border: `4px solid ${producto.border}`, boxShadow: `8px 8px 0 ${producto.shadow}` }}>
              <img src={producto.imagen} alt={producto.name} className="w-full h-72 md:h-96 object-cover" />
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              <span className="px-4 py-2 rounded-full font-cute text-sm font-bold"
                style={{ background: '#fff', border: '2px solid #ffb3cc', color: '#ff4488' }}>
                ⏰ Encargo: {producto.tiempo_encargo}
              </span>
              <span className="px-4 py-2 rounded-full font-cute text-sm font-bold"
                style={{ background: '#fff', border: '2px solid #6ec6ff', color: '#3a7bd5' }}>
                🏡 Retiro y despacho
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-pixel text-xs mb-2" style={{ color: '#ff85ad', letterSpacing: '0.15em' }}>
                ✦ JAVII CAKES & SWEETS ✦
              </p>
              <h1 className="font-title text-5xl mb-1" style={{ color: '#3a1a2e' }}>
                {producto.emoji} {producto.name}
              </h1>
              <p className="font-cute font-bold text-lg" style={{ color: producto.shadow }}>
                {producto.tagline}
              </p>
            </div>

            <p className="font-cute text-base leading-relaxed" style={{ color: '#6b4050' }}>
              {producto.desc}
            </p>

            <div>
              <p className="font-cute font-extrabold text-sm mb-3" style={{ color: '#3a1a2e' }}>💰 Precios</p>
              <PrecioBadge producto={producto} />
            </div>

            <div>
              <p className="font-cute font-extrabold text-sm mb-3" style={{ color: '#3a1a2e' }}>🌿 Ingredientes</p>
              <div className="flex flex-wrap gap-2">
                {producto.ingredientes.map(ing => (
                  <span key={ing} className="font-cute text-sm px-3 py-1 rounded-full"
                    style={{ background: producto.color, color: '#6b4050', border: `2px solid ${producto.border}` }}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-3 pt-2">

              {/* Calculadora — solo aparece en la página de tortas */}
              {esTorta && (
                <button
                  onClick={() => setShowCalculadora(true)}
                  className="w-full py-4 rounded-2xl font-cute font-extrabold text-lg transition-all hover:scale-105 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)', color: '#9c27b0', border: '3px solid #ce93d8', boxShadow: '4px 4px 0 #ce93d8' }}>
                  🎂 ¡Armar mi torta personalizada!
                </button>
              )}

              {/* Carrito */}
              <button
                onClick={() => addItem(producto)}
                className="w-full py-4 rounded-2xl font-cute font-extrabold text-lg transition-all hover:scale-105 hover:-translate-y-1"
                style={{ background: '#fff', color: '#ff4488', border: '3px solid #ffb3cc', boxShadow: '4px 4px 0 #ffb3cc' }}>
                🛒 Agregar al carrito
              </button>

              {/* WhatsApp */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl font-cute font-extrabold text-lg text-white text-center transition-all hover:scale-105 hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '4px 4px 0 #075E54', border: '3px solid #25D366' }}>
                📱 ¡Pedir por WhatsApp!
              </a>

              <Link to="/"
                className="w-full py-3 rounded-2xl font-cute font-extrabold text-base text-center transition-all hover:scale-105"
                style={{ background: '#fff', color: '#ff4488', border: '3px solid #ffb3cc', boxShadow: '3px 3px 0 #ffb3cc' }}>
                💌 Ir al formulario de pedido
              </Link>
            </div>
          </div>
        </div>

        {/* También te puede gustar */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-10 rounded-full" style={{ background: '#ffb3cc' }} />
            <h3 className="font-title text-2xl" style={{ color: '#3a1a2e' }}>También te puede gustar 🍓</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relacionados.map(p => (
              <Link key={p.id} to={`/producto/${p.id}`}
                className="rounded-2xl overflow-hidden transition-all hover:scale-105 hover:-translate-y-1 block"
                style={{ border: `3px solid ${p.border}`, boxShadow: `4px 4px 0 ${p.border}` }}>
                <img src={p.imagen} alt={p.name} className="w-full h-32 object-cover" />
                <div className="p-3" style={{ background: p.color }}>
                  <p className="font-title text-base" style={{ color: '#3a1a2e' }}>{p.emoji} {p.name}</p>
                  <p className="font-cute font-bold text-xs mt-1" style={{ color: p.shadow }}>
                    {p.precio_unidad ? `Desde $${p.precio_unidad.toLocaleString('es-CL')}` :
                     p.precio_paquete ? `Pack x${p.unidades_paquete} $${p.precio_paquete.toLocaleString('es-CL')}` :
                     p.precio_referencia}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}