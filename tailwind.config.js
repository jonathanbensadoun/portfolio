/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#23153C',
      },
      animation: {
        'slide-down': 'slideDown 1s ease-in-out',
        'slide-up': 'slideUp 1s ease-in-out',
        opacity: 'opacity 0.5s ease-in-out',
        boxShadow: {
          white: '0 0 100px rgba(255, 255, 255, 0.5)',
        },
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-30%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        opacity: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.2' },
          '75%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
