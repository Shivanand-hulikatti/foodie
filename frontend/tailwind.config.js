/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans' :['outFit','Open-Sans', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'lora': ['"Lora"', 'serif'],
      },
      backgroundImage: {
        'hero': "url('header_img.png')",
      },
      height: {
        'custom': '500px',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer and Edge */
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      });
    },
  ],
}