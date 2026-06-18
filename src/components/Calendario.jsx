import { useState } from 'react'

const DIAS_OCUPADOS = [3, 7, 8, 14, 15, 21, 22, 28]

function getDiasEnMes(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getPrimerDia(year, month) {
  const d = new Date(year, month, 1).getDay()
  return d === 0 ? 6 : d - 1
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
    const diaSemana = fecha.getDay()
    if (diaSemana === 0) return 'domingo'
    if (DIAS_OCUPADOS.includes(dia)) return 'ocupado'
    if (dia < hoy.getDate() && mes === hoy.getMonth() && year === hoy.getFullYear()) return 'pasado'
    return 'disponible'
  }

  const esHoy = (dia) =>
    dia === hoy.getDate() && mes === hoy.getMonth() && year === hoy.getFullYear()

  const colorPorEstado = {
    disponible: { bg: '#F0FBF0', border: '#4caf50', text: '#2e7d32', dot: '#4caf50' },
    ocupado:    { bg: '#FFF0F0', border: '#C46877', text: '#8B1A2E', dot: '#A83248' },
    domingo:    { bg: '#F5F0EC', border: '#D9C5B8', text: '#B09080', dot: '#C8B0A0' },
    pasado:     { bg: '#F8F5F0', border: '#E5DDD5', text: '#C0B0A8', dot: '#D5C8C0' },
  }

  const selectedInfo = selected ? getEstado(selected) : null

  return (
    <section id="calendario" className="relative" style={{ background: '#F5E6D8' }}>

      <div className="py-20 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <p
              className="font-pixel text-xs mb-3"
              style={{ color: '#A83248', letterSpacing: '0.2em' }}
            >
              ✦ DISPONIBILIDAD ✦
            </p>
            <h2 className="font-title text-4xl md:text-5xl mb-3" style={{ color: '#3D1A0A' }}>
               ¿Cuándo puedo{' '}
              <span style={{ color: '#8B1A2E' }}>entregarte?</span>
            </h2>
            <p
              className="text-base"
              style={{
                color: '#6B3A2A',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
              }}
            >
              Selecciona un día para ver disponibilidad. Los encargos necesitan al menos 48 hrs de anticipación.
            </p>
          </div>

          {/* Calendario card */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: '4px solid #C46877',
              boxShadow: '8px 8px 0 #3D1A0A',
              background: '#FFF5EC',
            }}
          >
            {/* Nav mes */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                background: 'linear-gradient(135deg, #A83248, #8B1A2E)',
                borderBottom: '4px solid #C46877',
              }}
            >
              <button
                onClick={prevMes}
                className="font-bold text-white px-3 py-2 rounded-xl transition-all hover:scale-110"
                style={{
                  background: 'rgba(255,245,236,0.2)',
                  border: '2px solid rgba(255,245,236,0.4)',
                  fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                }}
              >
                ←
              </button>
              <h3 className="font-title text-2xl text-white">
                {MESES[mes]} {year}
              </h3>
              <button
                onClick={nextMes}
                className="font-bold text-white px-3 py-2 rounded-xl transition-all hover:scale-110"
                style={{
                  background: 'rgba(255,245,236,0.2)',
                  border: '2px solid rgba(255,245,236,0.4)',
                  fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                }}
              >
                →
              </button>
            </div>

            <div className="p-4">
              {/* Días semana */}
              <div className="grid grid-cols-7 mb-2">
                {DIAS_SEMANA.map(d => (
                  <div
                    key={d}
                    className="text-center font-pixel py-2"
                    style={{ color: '#A83248', fontSize: '0.5rem', letterSpacing: '0.1em' }}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Días */}
              <div className="grid grid-cols-7 gap-1">
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
                        <span
                          className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                          style={{ background: '#8B1A2E', border: '2px solid #FFF5EC' }}
                        />
                      )}
                      <span
                        className="font-bold text-sm"
                        style={{
                          color: isSelected ? '#fff' : c.text,
                          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                        }}
                      >
                        {dia}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-0.5"
                        style={{ background: isSelected ? 'rgba(255,245,236,0.7)' : c.dot }}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Info día seleccionado */}
            {selected && (
              <div
                className="mx-4 mb-4 p-4 rounded-2xl"
                style={{
                  background: selectedInfo === 'disponible' ? '#F0FBF0' : '#FFF0F0',
                  border: `3px solid ${selectedInfo === 'disponible' ? '#4caf50' : '#C46877'}`,
                }}
              >
                {selectedInfo === 'disponible' ? (
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p
                        className="font-bold text-sm"
                        style={{
                          color: '#2e7d32',
                          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                        }}
                      >
                        ¡Disponible el {selected} de {MESES[mes]}!
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{
                          color: '#4caf50',
                          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                        }}
                      >
                        Recuerda encargar con al menos 48 hrs de anticipación
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">😔</span>
                    <div>
                      <p
                        className="font-bold text-sm"
                        style={{
                          color: '#8B1A2E',
                          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                        }}
                      >
                        Ocupada el {selected} de {MESES[mes]}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{
                          color: '#A83248',
                          fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                        }}
                      >
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
              { color: '#A83248', label: 'Ocupada' },
              { color: '#C8B0A0', label: 'No trabaja' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                <span
                  className="text-sm"
                  style={{
                    color: '#6B3A2A',
                    fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span
                className="relative w-4 h-4 rounded-full"
                style={{ background: '#F5E6D8', border: '2px solid #C46877' }}
              >
                <span
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                  style={{ background: '#8B1A2E' }}
                />
              </span>
              <span
                className="text-sm"
                style={{
                  color: '#6B3A2A',
                  fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                }}
              >
                Hoy
              </span>
            </div>
          </div>

          {/* CTA WhatsApp — verde se mantiene, es color de marca de WA */}
          <div className="text-center mt-8">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-base text-white px-8 py-4 rounded-2xl transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '4px 4px 0 #075E54',
                border: '3px solid #25D366',
                fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
                fontWeight: 700,
              }}
            >
              📱 Coordinar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Ola inferior */}
      <div className="pointer-events-none" style={{ marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFF5EC" />
        </svg>
      </div>

    </section>
  )
}