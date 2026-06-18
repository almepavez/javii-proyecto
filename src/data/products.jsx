import { Icon } from '@iconify/react'

// Iconos por producto.
// - Iconify (Fluent Emoji Flat) para los que existen como emoji.
// - SVG propio para alfajor, brazo de reina y cuchufli (no hay emoji de esos).
export const ProductIcon = {
  // Alfajor: no existe como emoji -> galleta doble con manjar al centro
  alfajores: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
      <ellipse cx="32" cy="46" rx="22" ry="6" fill="#000" opacity="0.06" />
      {/* tapa inferior */}
      <rect x="12" y="34" width="40" height="10" rx="5" fill="#E8C9A8" stroke="#B07A4E" strokeWidth="2" />
      {/* relleno de manjar */}
      <rect x="14" y="29" width="36" height="8" rx="4" fill="#C98A4B" />
      <path d="M14 33 Q20 37 26 33 Q32 29 38 33 Q44 37 50 33" stroke="#A86A2E" strokeWidth="1.6" fill="none" opacity="0.6" />
      {/* tapa superior */}
      <rect x="12" y="20" width="40" height="12" rx="6" fill="#F3DCBC" stroke="#B07A4E" strokeWidth="2" />
      {/* azucar flor */}
      <circle cx="22" cy="26" r="1.3" fill="#FFFDF8" />
      <circle cx="32" cy="24" r="1.3" fill="#FFFDF8" />
      <circle cx="42" cy="26" r="1.3" fill="#FFFDF8" />
      <circle cx="27" cy="29" r="1.1" fill="#FFFDF8" />
      <circle cx="37" cy="29" r="1.1" fill="#FFFDF8" />
      {/* carita */}
      <ellipse cx="28" cy="25" rx="1.6" ry="2" fill="#5A3A22" />
      <ellipse cx="36" cy="25" rx="1.6" ry="2" fill="#5A3A22" />
      <path d="M28 28 Q32 30.5 36 28" stroke="#5A3A22" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="27" r="1.4" fill="#E89AA0" opacity="0.7" />
      <circle cx="40" cy="27" r="1.4" fill="#E89AA0" opacity="0.7" />
    </svg>
  ),

  queques: <Icon icon="fluent-emoji-flat:cupcake" width={56} height={56} />,

  brownies: <Icon icon="fluent-emoji-flat:chocolate-bar" width={56} height={56} />,

  // Brazo de reina: no existe como emoji -> rollo relleno
  brazo_reina: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
      <ellipse cx="32" cy="48" rx="24" ry="5" fill="#000" opacity="0.06" />
      {/* cuerpo del rollo */}
      <rect x="10" y="24" width="44" height="20" rx="10" fill="#F0D9B8" stroke="#B07A4E" strokeWidth="2" />
      {/* cara cortada (espiral) */}
      <ellipse cx="14" cy="34" rx="6" ry="10" fill="#F7E7CE" stroke="#B07A4E" strokeWidth="2" />
      <path d="M14 28 C18 30 18 38 14 40 C11 38.5 11 30 14 28 Z" fill="#C98A4B" opacity="0.85" />
      <path d="M14 31 C16 32 16 36 14 37" stroke="#FFF6E9" strokeWidth="1.4" fill="none" />
      {/* azucar flor encima */}
      <circle cx="30" cy="26" r="1.2" fill="#FFFDF8" />
      <circle cx="38" cy="27" r="1.2" fill="#FFFDF8" />
      <circle cx="46" cy="26" r="1.2" fill="#FFFDF8" />
      {/* carita */}
      <ellipse cx="34" cy="34" rx="1.6" ry="2" fill="#5A3A22" />
      <ellipse cx="42" cy="34" rx="1.6" ry="2" fill="#5A3A22" />
      <path d="M34 37 Q38 39.5 42 37" stroke="#5A3A22" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="46" cy="36" r="1.4" fill="#E89AA0" opacity="0.7" />
    </svg>
  ),

  tortas: <Icon icon="fluent-emoji-flat:birthday-cake" width={56} height={56} />,

  // Cuchufli: no existe como emoji -> barquillo relleno
  cuchuflies: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
      <ellipse cx="32" cy="50" rx="20" ry="4" fill="#000" opacity="0.06" />
      {/* barquillo en diagonal */}
      <g transform="rotate(-25 32 32)">
        <rect x="14" y="26" width="36" height="12" rx="6" fill="#E8C48A" stroke="#B07A4E" strokeWidth="2" />
        {/* lineas del enrollado */}
        <line x1="22" y1="26" x2="18" y2="38" stroke="#B07A4E" strokeWidth="1.4" opacity="0.6" />
        <line x1="30" y1="26" x2="26" y2="38" stroke="#B07A4E" strokeWidth="1.4" opacity="0.6" />
        <line x1="38" y1="26" x2="34" y2="38" stroke="#B07A4E" strokeWidth="1.4" opacity="0.6" />
        {/* manjar asomando */}
        <ellipse cx="48" cy="32" rx="3.5" ry="5" fill="#C98A4B" />
      </g>
      {/* carita */}
      <ellipse cx="28" cy="30" rx="1.6" ry="2" fill="#5A3A22" />
      <ellipse cx="36" cy="32" rx="1.6" ry="2" fill="#5A3A22" />
      <path d="M27 34 Q31 36.5 35 35" stroke="#5A3A22" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="32" r="1.3" fill="#E89AA0" opacity="0.7" />
    </svg>
  ),
}

export const productos = [
  {
    id: 'alfajores',
    slug: 'alfajores',
    name: 'Alfajores',
    icon: 'alfajores',
    tagline: 'Clasicos irresistibles de manjar o chocolate',
    desc: 'Clasicos de maicena con manjar o chocolate, suaves y esponjosos.',
    tag: 'Mas pedido',
    imagen: '/img/alfajores.jpg',
    color: '#FFF5EC',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Maicena', 'Manjar', 'Chocolate', 'Azucar flor'],
    precio_unidad: 1500,
    precio_docena: 15000,
    descuento_mayor: 'Consultar por cantidades',
    tiempo_encargo: '2 dias',
  },
  {
    id: 'queques',
    slug: 'queques',
    name: 'Queques',
    icon: 'queques',
    tagline: 'Humedos, esponjosos y en mil sabores',
    desc: 'Humedos, esponjosos y en mil sabores: vainilla, limon, chocolate, zanahoria y mas.',
    tag: 'Clasico',
    imagen: '/img/queques.jpg',
    color: '#FDF0E8',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Harina', 'Huevos', 'Mantequilla', 'Azucar', 'Esencia de vainilla'],
    precio_referencia: 'Desde $8.000',
    precio_nota: 'Precio varia segun tamano y relleno',
    tiempo_encargo: '3 dias',
  },
  {
    id: 'brownies',
    slug: 'brownies',
    name: 'Brownies',
    icon: 'brownies',
    tagline: 'Intensos, chocolatosos y con el punto perfecto',
    desc: 'Intensos, chocolatosos y con el punto perfecto entre humedo y crocante.',
    tag: 'Favorito',
    imagen: '/img/brownies.jpg',
    color: '#F5EBE0',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Chocolate', 'Mantequilla', 'Huevos', 'Harina', 'Azucar'],
    precio_unidad: 2000,
    precio_docena: 20000,
    tiempo_encargo: '2 dias',
  },
  {
    id: 'brazo_reina',
    slug: 'brazo-reina',
    name: 'Brazo de Reina',
    icon: 'brazo_reina',
    tagline: 'Suave, cremoso y con manjar artesanal',
    desc: 'Bizcochuelo enrollado relleno de crema y manjar. Suave, humedo y hecho con carino.',
    tag: 'Nuevo',
    imagen: '/img/brazo_reina.jpg',
    color: '#FFF0F2',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Bizcochuelo', 'Crema', 'Manjar', 'Azucar flor'],
    precio_referencia: 'Desde $10.000',
    precio_nota: 'Precio segun tamano',
    tiempo_encargo: '2 dias',
  },
  {
    id: 'tortas',
    slug: 'tortas',
    name: 'Tortas Personalizadas',
    icon: 'tortas',
    tagline: 'Disenos unicos para cada ocasion',
    desc: 'Tortas para cada ocasion. Disenos unicos y sabores a tu eleccion.',
    tag: 'Especial',
    imagen: '/img/tortas.jpg',
    color: '#F8EEF5',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Bizcochuelo', 'Crema', 'Frutas', 'Decoracion personalizada'],
    precio_referencia: 'Desde $25.000',
    precio_nota: 'Precio segun diseno y tamano',
    tiempo_encargo: '5 dias',
  },
  {
    id: 'cuchuflies',
    slug: 'cuchuflies',
    name: 'Cuchuflis',
    icon: 'cuchuflies',
    tagline: 'Crujientes por fuera, cremosos por dentro',
    desc: 'Crujientes por fuera, cremosos por dentro. Con manjar, chocolate o dulce de leche.',
    tag: 'Artesanal',
    imagen: '/img/cuchuflies.jpg',
    color: '#EFF5F0',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Masa', 'Manjar', 'Chocolate', 'Dulce de leche'],
    precio_paquete: 5000,
    unidades_paquete: 6,
    tiempo_encargo: '2 dias',
  },
]

export function getProducto(id) {
  return productos.find((p) => p.id === id)
}