import { useState } from 'react'

// ── Datos de opciones y precios base ──────────────────────────────────────────

const TAMANIOS = [
  { id: 'mini',     label: 'Mini',      porciones: '6–8',   emoji: '🎂', precio: 12000 },
  { id: 'pequena',  label: 'Pequeña',   porciones: '10–12', emoji: '🎂', precio: 18000 },
  { id: 'mediana',  label: 'Mediana',   porciones: '16–20', emoji: '🎂', precio: 26000 },
  { id: 'grande',   label: 'Grande',    porciones: '25–30', emoji: '🎂', precio: 36000 },
  { id: 'especial', label: 'Especial',  porciones: '35+',   emoji: '🎂', precio: 48000 },
]

const SABORES = [
  { id: 'vainilla',   label: 'Vainilla',          emoji: '🤍', extra: 0 },
  { id: 'chocolate',  label: 'Chocolate',         emoji: '🍫', extra: 0 },
  { id: 'limon',      label: 'Limón',             emoji: '🍋', extra: 0 },
  { id: 'zanahoria',  label: 'Zanahoria',         emoji: '🥕', extra: 500 },
  { id: 'red_velvet', label: 'Red Velvet',        emoji: '❤️', extra: 1500 },
  { id: 'oreo',       label: 'Oreo',              emoji: '🖤', extra: 2000 },
  { id: 'maracuya',   label: 'Maracuyá',          emoji: '🌟', extra: 1500 },
]

const RELLENOS = [
  { id: 'manjar',       label: 'Manjar',            emoji: '🍯', extra: 0 },
  { id: 'crema',        label: 'Crema chantilly',   emoji: '🤍', extra: 0 },
  { id: 'frambuesa',    label: 'Frambuesa',         emoji: '🍓', extra: 1500 },
  { id: 'chocolate_r',  label: 'Ganache chocolate', emoji: '🍫', extra: 2000 },
  { id: 'maracuya_r',   label: 'Maracuyá',          emoji: '🌟', extra: 2000 },
  { id: 'nutella',      label: 'Nutella',           emoji: '🌰', extra: 2500 },
]

const DECORACIONES = [
  { id: 'simple',     label: 'Simple',             emoji: '✨', desc: 'Cubierta lisa + mensaje', extra: 0 },
  { id: 'flores',     label: 'Flores',             emoji: '🌸', desc: 'Flores de crema',         extra: 3000 },
  { id: 'fondant',    label: 'Fondant',            emoji: '🎨', desc: 'Cobertura de fondant',    extra: 5000 },
  { id: 'artistico',  label: 'Artístico',          emoji: '🖌️', desc: 'Diseño personalizado',    extra: 8000 },
  { id: 'premium',    label: 'Premium',            emoji: '👑', desc: 'Figura + detalles 3D',    extra: 12000 },
]

// ── Componente selector de opción ─────────────────────────────────────────────

function OptionCard({ option, selected, onClick, showExtra = false }) {
  return (
    <button
      onClick={() => onClick(option.id)}
      className="relative flex flex-col items-center gap-1 p-3 rounded-2xl transition-all hover:scale-105"
      style={{
        background: selected ? '#ff4488' : '#fff',
        border: `3px solid ${selected ? '#ff4488' : '#ffb3cc'}`,
        boxShadow: selected ? '4px 4px 0 #c41060' : '2px 2px 0 #ffb3cc',
        minWidth: '80px',
      }}
    >
      <span className="text-2xl">{option.emoji}</span>
      <span className="font-cute font-bold text-xs text-center leading-tight"
        style={{ color: selected ? '#fff' : '#3a1a2e' }}>
        {option.label}
      </span>
      {option.porciones && (
        <span className="font-cute text-xs" style={{ color: selected ? 'rgba(255,255,255,0.8)' : '#a0556a' }}>
          {option.porciones} porc.
        </span>
      )}
      {showExtra && option.extra > 0 && (
        <span className="font-cute text-xs font-bold" style={{ color: selected ? 'rgba(255,255,255,0.9)' : '#ff4488' }}>
          +${option.extra.toLocaleString('es-CL')}
        </span>
      )}
      {option.desc && (
        <span className="font-cute text-xs text-center leading-tight" style={{ color: selected ? 'rgba(255,255,255,0.8)' : '#a0556a' }}>
          {option.desc}
        </span>
      )}
    </button>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────

export default function CalculadoraTortas({ onClose }) {
  const [step, setStep] = useState(1)
  const [seleccion, setSeleccion] = useState({
    tamanio: null,
    sabor: null,
    relleno: null,
    decoracion: null,
  })

  const set = (key, val) => setSeleccion(prev => ({ ...prev, [key]: val }))

  const precioTotal = () => {
    const t = TAMANIOS.find(x => x.id === seleccion.tamanio)
    const s = SABORES.find(x => x.id === seleccion.sabor)
    const r = RELLENOS.find(x => x.id === seleccion.relleno)
    const d = DECORACIONES.find(x => x.id === seleccion.decoracion)
    if (!t) return 0
    return (t.precio) + (s?.extra || 0) + (r?.extra || 0) + (d?.extra || 0)
  }

  const puedeAvanzar = () => {
    if (step === 1) return !!seleccion.tamanio
    if (step === 2) return !!seleccion.sabor
    if (step === 3) return !!seleccion.relleno
    if (step === 4) return !!seleccion.decoracion
    return true
  }

  const handleWhatsApp = () => {
    const t = TAMANIOS.find(x => x.id === seleccion.tamanio)
    const s = SABORES.find(x => x.id === seleccion.sabor)
    const r = RELLENOS.find(x => x.id === seleccion.relleno)
    const d = DECORACIONES.find(x => x.id === seleccion.decoracion)
    const msg = [
      `¡Hola Javii! 🎂 Quiero cotizar una torta 💕`,
      ``,
      `*Mi torta personalizada:*`,
      `📐 Tamaño: ${t?.label} (${t?.porciones} porciones)`,
      `🍰 Sabor: ${s?.label}`,
      `🍯 Relleno: ${r?.label}`,
      `✨ Decoración: ${d?.label} — ${d?.desc}`,
      ``,
      `*Precio estimado: $${precioTotal().toLocaleString('es-CL')}*`,
      ``,
      `¿Podemos confirmar detalles? 🌸`,
    ].join('\n')
    window.open(`https://wa.me/56912345678?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const STEPS = [
    { num: 1, label: 'Tamaño' },
    { num: 2, label: 'Sabor' },
    { num: 3, label: 'Relleno' },
    { num: 4, label: 'Decoración' },
    { num: 5, label: 'Resumen' },
  ]

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50"
        style={{ background: 'rgba(58,26,46,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={e => e.stopPropagation()}
      >
        <div
          className="relative w-full flex flex-col"
          style={{
            maxWidth: '560px',
            maxHeight: '90vh',
            background: '#fff5f9',
            border: '4px solid #ffb3cc',
            borderRadius: '24px',
            boxShadow: '8px 8px 0 #ff85ad',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4" style={{ borderBottom: '3px solid #ffe0ef' }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-pixel text-xs mb-1" style={{ color: '#ff85ad', letterSpacing: '0.15em' }}>
                  ✦ JAVII CAKES ✦
                </p>
                <h2 className="font-title text-3xl" style={{ color: '#3a1a2e' }}>
                  🎂 Arma tu torta
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full font-bold flex items-center justify-center transition-all hover:scale-110"
                style={{ background: '#fff', border: '2px solid #ffb3cc', color: '#ff4488' }}
              >
                ✕
              </button>
            </div>

            {/* Progress steps */}
            <div className="flex items-center justify-between">
              {STEPS.map((s, i) => (
                <div key={s.num} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-cute font-bold text-xs transition-all"
                      style={{
                        background: step >= s.num ? '#ff4488' : '#ffe0ef',
                        color: step >= s.num ? '#fff' : '#ff85ad',
                        border: `2px solid ${step >= s.num ? '#ff4488' : '#ffb3cc'}`,
                        boxShadow: step === s.num ? '3px 3px 0 #c41060' : 'none',
                      }}
                    >
                      {step > s.num ? '✓' : s.num}
                    </div>
                    <span className="font-cute text-xs mt-1 hidden sm:block"
                      style={{ color: step >= s.num ? '#ff4488' : '#c0778a' }}>
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-1 mx-1 rounded-full transition-all"
                      style={{ background: step > s.num ? '#ff4488' : '#ffe0ef' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-5">

            {step === 1 && (
              <div>
                <p className="font-cute font-extrabold text-base mb-4" style={{ color: '#3a1a2e' }}>
                  📐 ¿De qué tamaño la quieres?
                </p>
                <div className="flex flex-wrap gap-3">
                  {TAMANIOS.map(t => (
                    <OptionCard key={t.id} option={t} selected={seleccion.tamanio === t.id}
                      onClick={(id) => set('tamanio', id)} />
                  ))}
                </div>
                {seleccion.tamanio && (
                  <div className="mt-4 p-3 rounded-2xl font-cute text-sm"
                    style={{ background: '#fff', border: '2px solid #ffb3cc', color: '#6b4050' }}>
                    💰 Precio base: <strong style={{ color: '#ff4488' }}>
                      ${TAMANIOS.find(t => t.id === seleccion.tamanio)?.precio.toLocaleString('es-CL')}
                    </strong>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="font-cute font-extrabold text-base mb-4" style={{ color: '#3a1a2e' }}>
                  🍰 ¿Qué sabor de bizcochuelo?
                </p>
                <div className="flex flex-wrap gap-3">
                  {SABORES.map(s => (
                    <OptionCard key={s.id} option={s} selected={seleccion.sabor === s.id}
                      onClick={(id) => set('sabor', id)} showExtra />
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <p className="font-cute font-extrabold text-base mb-4" style={{ color: '#3a1a2e' }}>
                  🍯 ¿Con qué relleno?
                </p>
                <div className="flex flex-wrap gap-3">
                  {RELLENOS.map(r => (
                    <OptionCard key={r.id} option={r} selected={seleccion.relleno === r.id}
                      onClick={(id) => set('relleno', id)} showExtra />
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <p className="font-cute font-extrabold text-base mb-4" style={{ color: '#3a1a2e' }}>
                  ✨ ¿Qué tipo de decoración?
                </p>
                <div className="flex flex-wrap gap-3">
                  {DECORACIONES.map(d => (
                    <OptionCard key={d.id} option={d} selected={seleccion.decoracion === d.id}
                      onClick={(id) => set('decoracion', id)} showExtra />
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="flex flex-col gap-4">
                <p className="font-cute font-extrabold text-base" style={{ color: '#3a1a2e' }}>
                  🎉 ¡Tu torta personalizada!
                </p>

                {/* Resumen */}
                {[
                  { label: '📐 Tamaño',     val: TAMANIOS.find(x => x.id === seleccion.tamanio) },
                  { label: '🍰 Sabor',      val: SABORES.find(x => x.id === seleccion.sabor) },
                  { label: '🍯 Relleno',    val: RELLENOS.find(x => x.id === seleccion.relleno) },
                  { label: '✨ Decoración', val: DECORACIONES.find(x => x.id === seleccion.decoracion) },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between px-4 py-3 rounded-2xl"
                    style={{ background: '#fff', border: '2px solid #ffb3cc' }}>
                    <span className="font-cute font-bold text-sm" style={{ color: '#6b4050' }}>{item.label}</span>
                    <span className="font-cute font-extrabold text-sm" style={{ color: '#ff4488' }}>
                      {item.val?.emoji} {item.val?.label}
                    </span>
                  </div>
                ))}

                {/* Precio total */}
                <div className="px-5 py-4 rounded-2xl text-center"
                  style={{ background: 'linear-gradient(135deg, #ff85ad, #ff4488)', border: '3px solid #ff4488', boxShadow: '4px 4px 0 #c41060' }}>
                  <p className="font-cute font-bold text-sm text-white mb-1">Precio estimado total</p>
                  <p className="font-title text-4xl text-white">
                    ${precioTotal().toLocaleString('es-CL')}
                  </p>
                  <p className="font-cute text-xs mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    *El precio final se confirma con Javii según disponibilidad
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer botones */}
          <div className="px-6 pb-6 pt-3 flex gap-3" style={{ borderTop: '3px solid #ffe0ef' }}>
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="px-5 py-3 rounded-2xl font-cute font-bold text-sm transition-all hover:scale-105"
                style={{ background: '#fff', color: '#ff4488', border: '2px solid #ffb3cc' }}>
                ← Volver
              </button>
            )}

            {step < 5 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!puedeAvanzar()}
                className="flex-1 py-3 rounded-2xl font-cute font-extrabold text-base text-white transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #ff85ad, #ff4488)', boxShadow: '3px 3px 0 #c41060' }}>
                Siguiente →
              </button>
            ) : (
              <button
                onClick={handleWhatsApp}
                className="flex-1 py-3 rounded-2xl font-cute font-extrabold text-base text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '3px 3px 0 #075E54', border: '3px solid #25D366' }}>
                📱 ¡Pedir por WhatsApp!
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}