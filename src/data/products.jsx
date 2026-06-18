// Iconos SVG kawaii inline — uno por producto, paleta borgoña/crema
export const ProductIcon = {
  alfajores: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
      {/* Cookie redonda con relleno */}
      <circle cx="32" cy="32" r="26" fill="#F5E6D8" stroke="#C46877" strokeWidth="2.5"/>
      <circle cx="32" cy="32" r="18" fill="#EDD5C5" stroke="#C46877" strokeWidth="2"/>
      {/* Manjar */}
      <circle cx="32" cy="32" r="10" fill="#C46877" opacity="0.6"/>
      {/* Puntos decorativos */}
      <circle cx="20" cy="24" r="2" fill="#8B1A2E" opacity="0.4"/>
      <circle cx="44" cy="24" r="2" fill="#8B1A2E" opacity="0.4"/>
      <circle cx="20" cy="40" r="2" fill="#8B1A2E" opacity="0.4"/>
      <circle cx="44" cy="40" r="2" fill="#8B1A2E" opacity="0.4"/>
      {/* Ojos kawaii */}
      <ellipse cx="28" cy="30" rx="2" ry="2.5" fill="#3D1A0A"/>
      <ellipse cx="36" cy="30" rx="2" ry="2.5" fill="#3D1A0A"/>
      <path d="M28 35 Q32 38 36 35" stroke="#3D1A0A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  queques: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
      {/* Base queque */}
      <rect x="12" y="36" width="40" height="18" rx="5" fill="#EDD5C5" stroke="#C46877" strokeWidth="2"/>
      {/* Cuerpo */}
      <rect x="16" y="24" width="32" height="16" rx="4" fill="#F5E6D8" stroke="#C46877" strokeWidth="2"/>
      {/* Glasé encima */}
      <path d="M16 26 Q32 18 48 26" stroke="#8B1A2E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Líneas textura */}
      <line x1="22" y1="30" x2="22" y2="38" stroke="#C46877" strokeWidth="1" opacity="0.5"/>
      <line x1="32" y1="28" x2="32" y2="38" stroke="#C46877" strokeWidth="1" opacity="0.5"/>
      <line x1="42" y1="30" x2="42" y2="38" stroke="#C46877" strokeWidth="1" opacity="0.5"/>
      {/* Ojos */}
      <ellipse cx="28" cy="42" rx="2" ry="2.5" fill="#3D1A0A"/>
      <ellipse cx="36" cy="42" rx="2" ry="2.5" fill="#3D1A0A"/>
      <path d="M28 47 Q32 50 36 47" stroke="#3D1A0A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  brownies: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
      {/* Brownie cuadrado con perspectiva */}
      <rect x="10" y="28" width="44" height="26" rx="5" fill="#3D1A0A" stroke="#8B1A2E" strokeWidth="2"/>
      <rect x="10" y="20" width="44" height="14" rx="5" fill="#6B2A10" stroke="#8B1A2E" strokeWidth="2"/>
      {/* Brillo chocolate */}
      <path d="M16 22 Q32 17 48 22" stroke="#A04020" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
      {/* Chispas */}
      <circle cx="22" cy="26" r="2" fill="#C46877" opacity="0.8"/>
      <circle cx="34" cy="24" r="2" fill="#C46877" opacity="0.8"/>
      <circle cx="44" cy="27" r="2" fill="#C46877" opacity="0.8"/>
      {/* Ojos */}
      <ellipse cx="27" cy="37" rx="2.5" ry="2.5" fill="#EDD5C5"/>
      <ellipse cx="37" cy="37" rx="2.5" ry="2.5" fill="#EDD5C5"/>
      <circle cx="27" cy="37" r="1.2" fill="#3D1A0A"/>
      <circle cx="37" cy="37" r="1.2" fill="#3D1A0A"/>
      <path d="M27 43 Q32 46 37 43" stroke="#EDD5C5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  brazo_reina: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
      {/* Rollo en perspectiva */}
      <ellipse cx="32" cy="44" rx="22" ry="8" fill="#EDD5C5" stroke="#C46877" strokeWidth="2"/>
      <rect x="10" y="24" width="44" height="20" rx="2" fill="#F5E6D8" stroke="#C46877" strokeWidth="2"/>
      <ellipse cx="32" cy="24" rx="22" ry="8" fill="#FFF5EC" stroke="#C46877" strokeWidth="2"/>
      {/* Espiral de crema */}
      <path d="M18 24 Q22 20 26 24 Q30 28 34 24 Q38 20 42 24 Q46 28 46 24" stroke="#8B1A2E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
      {/* Manjar visible lateral */}
      <path d="M10 28 Q14 32 10 36" stroke="#C46877" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7"/>
      <path d="M54 28 Q50 32 54 36" stroke="#C46877" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7"/>
      {/* Ojos */}
      <ellipse cx="27" cy="36" rx="2" ry="2.5" fill="#3D1A0A"/>
      <ellipse cx="37" cy="36" rx="2" ry="2.5" fill="#3D1A0A"/>
      <path d="M27 41 Q32 44 37 41" stroke="#3D1A0A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  tortas: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
      {/* Base torta */}
      <rect x="8" y="38" width="48" height="16" rx="5" fill="#EDD5C5" stroke="#C46877" strokeWidth="2"/>
      {/* Capa del medio */}
      <rect x="12" y="26" width="40" height="16" rx="4" fill="#F5E6D8" stroke="#C46877" strokeWidth="2"/>
      {/* Capa superior */}
      <rect x="16" y="16" width="32" height="14" rx="4" fill="#FFF5EC" stroke="#C46877" strokeWidth="2"/>
      {/* Cobertura */}
      <path d="M16 18 Q32 12 48 18" stroke="#8B1A2E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Velita */}
      <rect x="30" y="8" width="4" height="10" rx="2" fill="#C46877"/>
      <ellipse cx="32" cy="8" rx="3" ry="4" fill="#FFD700" opacity="0.9"/>
      {/* Ojos */}
      <ellipse cx="27" cy="48" rx="2" ry="2.5" fill="#3D1A0A"/>
      <ellipse cx="37" cy="48" rx="2" ry="2.5" fill="#3D1A0A"/>
      <path d="M27 53 Q32 56 37 53" stroke="#3D1A0A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),

  cuchuflies: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
      {/* Cuchuflí cilíndrico */}
      <ellipse cx="32" cy="20" rx="20" ry="8" fill="#F5E6D8" stroke="#C46877" strokeWidth="2"/>
      <rect x="12" y="20" width="40" height="24" fill="#EDD5C5" stroke="#C46877" strokeWidth="2"/>
      <ellipse cx="32" cy="44" rx="20" ry="8" fill="#EDD5C5" stroke="#C46877" strokeWidth="2"/>
      {/* Líneas enrollado */}
      <path d="M12 26 Q32 22 52 26" stroke="#C46877" strokeWidth="1" opacity="0.5" fill="none"/>
      <path d="M12 32 Q32 28 52 32" stroke="#C46877" strokeWidth="1" opacity="0.5" fill="none"/>
      <path d="M12 38 Q32 34 52 38" stroke="#C46877" strokeWidth="1" opacity="0.5" fill="none"/>
      {/* Manjar asomando */}
      <ellipse cx="32" cy="44" rx="10" ry="4" fill="#C46877" opacity="0.7"/>
      {/* Ojos */}
      <ellipse cx="27" cy="33" rx="2" ry="2.5" fill="#3D1A0A"/>
      <ellipse cx="37" cy="33" rx="2" ry="2.5" fill="#3D1A0A"/>
      <path d="M27 38 Q32 41 37 38" stroke="#3D1A0A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),
}

export const productos = [
  {
    id: 'alfajores',
    slug: 'alfajores',
    name: 'Alfajores',
    icon: 'alfajores',
    tagline: 'Clásicos irresistibles de manjar o chocolate',
    desc: 'Clásicos de maicena con manjar o chocolate, suaves y esponjosos. ¡Irresistibles!',
    tag: 'Más pedido',
    imagen: '/img/alfajores.jpg',
    color: '#FFF5EC',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Maicena', 'Manjar', 'Chocolate', 'Azúcar flor'],
    precio_unidad: 1500,
    precio_docena: 15000,
    descuento_mayor: 'Consultar por cantidades',
    tiempo_encargo: '2 días',
  },
  {
    id: 'queques',
    slug: 'queques',
    name: 'Queques',
    icon: 'queques',
    tagline: 'Húmedos, esponjosos y en mil sabores',
    desc: 'Húmedos, esponjosos y en mil sabores: vainilla, limón, chocolate, zanahoria y más.',
    tag: 'Clásico',
    imagen: '/img/queques.jpg',
    color: '#FDF0E8',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Harina', 'Huevos', 'Mantequilla', 'Azúcar', 'Esencia de vainilla'],
    precio_referencia: 'Desde $8.000',
    precio_nota: 'Precio varía según tamaño y relleno',
    tiempo_encargo: '3 días',
  },
  {
    id: 'brownies',
    slug: 'brownies',
    name: 'Brownies',
    icon: 'brownies',
    tagline: 'Intensos, chocolatosos y con el punto perfecto',
    desc: 'Intensos, chocolatosos y con el punto perfecto entre húmedo y crocante. 10/10.',
    tag: 'Fan favorite',
    imagen: '/img/brownies.jpg',
    color: '#F5EBE0',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Chocolate', 'Mantequilla', 'Huevos', 'Harina', 'Azúcar'],
    precio_unidad: 2000,
    precio_docena: 20000,
    tiempo_encargo: '2 días',
  },
  {
    id: 'brazo_reina',
    slug: 'brazo-reina',
    name: 'Brazo de Reina',
    icon: 'brazo_reina',
    tagline: 'Suave, cremoso y con manjar artesanal',
    desc: 'Bizcochuelo enrollado relleno de crema y manjar. Suave, húmedo y hecho con cariño.',
    tag: 'Nuevos!',
    imagen: '/img/brazo_reina.jpg',
    color: '#FFF0F2',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Bizcochuelo', 'Crema', 'Manjar', 'Azúcar flor'],
    precio_referencia: 'Desde $10.000',
    precio_nota: 'Precio según tamaño',
    tiempo_encargo: '2 días',
  },
  {
    id: 'tortas',
    slug: 'tortas',
    name: 'Tortas Personalizadas',
    icon: 'tortas',
    tagline: 'Diseños únicos para cada ocasión',
    desc: 'Tortas para cada ocasión. Diseños únicos y sabores a tu elección. ¡Pide la tuya!',
    tag: 'Especial',
    imagen: '/img/tortas.jpg',
    color: '#F8EEF5',
    border: '#C46877',
    shadow: '#8B1A2E',
    ingredientes: ['Bizcochuelo', 'Crema', 'Frutas', 'Decoración personalizada'],
    precio_referencia: 'Desde $25.000',
    precio_nota: 'Precio según diseño y tamaño',
    tiempo_encargo: '5 días',
  },
  {
    id: 'cuchuflies',
    slug: 'cuchuflies',
    name: 'Cuchuflís',
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
    tiempo_encargo: '2 días',
  },
]

export function getProducto(id) {
  return productos.find((p) => p.id === id)
}