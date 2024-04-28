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
        blink: 'blink 2s linear infinite ',
      },
      boxShadow: {
        white: '0 0 100px rgba(255, 255, 255, 0.5)',
        neon: '0 0 5px #ddd, 0 0 10px #ddd, 0 0 15px #ddd, 0 0 20px #ddd',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
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
    variants: {
      extend: {
        boxShadow: ['hover'],
      },
    },
  },
  plugins: [],
};
