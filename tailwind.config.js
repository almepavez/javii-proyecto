/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50:  '#fff0f5',
          100: '#ffe0ec',
          200: '#ffb8d2',
          300: '#ff8ab4',
          400: '#ff5c96',
          500: '#ff2e78',
        },
        candy: {
          pink:   '#ffb3cc',
          rose:   '#ff85ad',
          hot:    '#ff4488',
          light:  '#ffe4ef',
          pale:   '#fff5f9',
        },
        pixel: {
          blue:   '#6ec6ff',
          navy:   '#3a7bd5',
          cream:  '#fff8f0',
        },
        strawberry: '#e8304a',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        cute:  ['"Nunito"', 'sans-serif'],
        title: ['"Fredoka One"', 'cursive'],
      },
      boxShadow: {
        pixel:     '4px 4px 0px #ff4488',
        pixelBlue: '4px 4px 0px #3a7bd5',
        kawaii:    '0 8px 32px rgba(255,100,170,0.25)',
        card:      '0 4px 20px rgba(255,100,170,0.15)',
      },
    },
  },
  plugins: [],
}