import { useState } from 'react'

// Días ocupados inventados — reemplazar luego con datos reales de la API
const DIAS_OCUPADOS = [3, 7, 8, 14, 15, 21, 22, 28]
const DIAS_BLOQUEADOS = [1] // Lunes siempre libre de encargos (día de producción)

function getDiasEnMes(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getPrimerDia(year, month) {
  const d = new Date(year, month, 1).getDay()
  return d === 0 ? 6 : d - 1 // lunes = 0
}

const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const DIAS_SEMANA = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom']

export default function Calendario() {
  const hoy = new Date()
  const [mes, setMes] = useState(hoy.getMonth())
  const [year, setYear] = useState(hoy.getFullYear())
  const [selected, setSelected] = useState(null)

  const totalDias = getDiasEnMes(year, mes)
  const primerDia = getPrimerDia(year, mes)

  const prevMes = () => {
    if (mes === 0) { setMes(11); setYear(y => y - 1) }
    else setMes(m => m - 1)
  }
  const nextMes = () => {
    if (mes === 11) { setMes(0); setYear(y => y + 1) }
    else setMes(m => m + 1)
  }

  const getEstado = (dia) => {
    const fecha = new Date(year, mes, dia)
    const diaSemana = fecha.getDay() // 0=dom, 6=sab
    if (diaSemana === 0) return 'domingo' // domingos no despacha
    if (DIAS_OCUPADOS.includes(dia)) return 'ocupado'
    if (dia < hoy.getDate() && mes === hoy.getMonth() && year === hoy.getFullYear()) return 'pasado'
    return 'disponible'
  }

  const esHoy = (dia) =>
    dia === hoy.getDate() && mes === hoy.getMonth() && year === hoy.getFullYear()

  const colorPorEstado = {
    disponible: { bg: '#e8fff0', border: '#4caf50', text: '#2e7d32', dot: '#4caf50' },
    ocupado:    { bg: '#fff0f3', border: '#ff85ad', text: '#c41060', dot: '#ff4488' },
    domingo:    { bg: '#f5f5f5', border: '#ddd',    text: '#bbb',    dot: '#ccc' },
    pasado:     { bg: '#fafafa', border: '#eee',    text: '#ccc',    dot: '#ddd' },
  }

  const selectedInfo = selected ? getEstado(selected) : null

  return (
    <section id="calendario" className="py-20 px-4" style={{ background: '#fff5f9' }}>
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-pixel text-xs mb-3" style={{ color: '#ff85ad', letterSpacing: '0.2em' }}>
            ✦ DISPONIBILIDAD ✦
          </p>
          <h2 className="font-title text-4xl md:text-5xl mb-3" style={{ color: '#3a1a2e' }}>
            📅 ¿Cuándo puedo <span style={{ color: '#ff4488' }}>entregarte?</span>
          </h2>
          <p className="font-cute text-base" style={{ color: '#a0556a' }}>
            Selecciona un día para ver disponibilidad. Los encargos necesitan al menos 48 hrs de anticipación.
          </p>
        </div>

        {/* Calendario */}
        <div className="rounded-3xl overflow-hidden"
          style={{ border: '4px solid #ffb3cc', boxShadow: '8px 8px 0 #ffb3cc', background: '#fff' }}>

          {/* Nav mes */}
          <div className="flex items-center justify-between px-6 py-4"
            style={{ background: 'linear-gradient(135deg, #ff85ad, #ff4488)', borderBottom: '4px solid #ffb3cc' }}>
            <button onClick={prevMes}
              className="font-cute font-bold text-white px-3 py-2 rounded-xl transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}>
              ←
            </button>
            <h3 className="font-title text-2xl text-white">
              {MESES[mes]} {year}
            </h3>
            <button onClick={nextMes}
              className="font-cute font-bold text-white px-3 py-2 rounded-xl transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)' }}>
              →
            </button>
          </div>

          <div className="p-4">
            {/* Días semana */}
            <div className="grid grid-cols-7 mb-2">
              {DIAS_SEMANA.map(d => (
                <div key={d} className="text-center font-pixel py-2"
                  style={{ color: '#ff85ad', fontSize: '0.5rem', letterSpacing: '0.1em' }}>
                  {d}
                </div>
              ))}
            </div>

            {/* Días */}
            <div className="grid grid-cols-7 gap-1">
              {/* Espacios vacíos antes del día 1 */}
              {Array.from({ length: primerDia }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

              {Array.from({ length: totalDias }).map((_, i) => {
                const dia = i + 1
                const estado = getEstado(dia)
                const c = colorPorEstado[estado]
                const isSelected = selected === dia
                const isToday = esHoy(dia)

                return (
                  <button
                    key={dia}
                    onClick={() => estado !== 'pasado' && estado !== 'domingo' && setSelected(dia === selected ? null : dia)}
                    disabled={estado === 'pasado' || estado === 'domingo'}
                    className="relative aspect-square rounded-xl flex flex-col items-center justify-center transition-all hover:scale-105 disabled:cursor-default"
                    style={{
                      background: isSelected ? c.dot : c.bg,
                      border: `2px solid ${isSelected ? c.dot : c.border}`,
                      boxShadow: isSelected ? `3px 3px 0 ${c.border}` : 'none',
                    }}
                  >
                    {isToday && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                        style={{ background: '#ff4488', border: '2px solid #fff' }} />
                    )}
                    <span className="font-cute font-bold text-sm"
                      style={{ color: isSelected ? '#fff' : c.text }}>
                      {dia}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full mt-0.5"
                      style={{ background: isSelected ? 'rgba(255,255,255,0.7)' : c.dot }} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Info día seleccionado */}
          {selected && (
            <div className="mx-4 mb-4 p-4 rounded-2xl"
              style={{
                background: selectedInfo === 'disponible' ? '#e8fff0' : '#fff0f3',
                border: `3px solid ${selectedInfo === 'disponible' ? '#4caf50' : '#ff85ad'}`,
              }}>
              {selectedInfo === 'disponible' ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-cute font-bold text-sm" style={{ color: '#2e7d32' }}>
                      ¡Disponible el {selected} de {MESES[mes]}!
                    </p>
                    <p className="font-cute text-xs mt-1" style={{ color: '#4caf50' }}>
                      Recuerda encargar con al menos 48 hrs de anticipación
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">😔</span>
                  <div>
                    <p className="font-cute font-bold text-sm" style={{ color: '#c41060' }}>
                      Ocupada el {selected} de {MESES[mes]}
                    </p>
                    <p className="font-cute text-xs mt-1" style={{ color: '#ff4488' }}>
                      Elige otro día o escríbeme para coordinar 💕
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Leyenda */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            { color: '#4caf50', label: 'Disponible' },
            { color: '#ff4488', label: 'Ocupada' },
            { color: '#ccc', label: 'No trabaja' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: item.color }} />
              <span className="font-cute text-sm" style={{ color: '#6b4050' }}>{item.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="relative w-4 h-4 rounded-full" style={{ background: '#ffe0ef', border: '2px solid #ffb3cc' }}>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full" style={{ background: '#ff4488' }} />
            </span>
            <span className="font-cute text-sm" style={{ color: '#6b4050' }}>Hoy</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"
            className="inline-block font-cute font-extrabold text-base text-white px-8 py-4 rounded-2xl transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '4px 4px 0 #075E54', border: '3px solid #25D366' }}>
            📱 Coordinar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}