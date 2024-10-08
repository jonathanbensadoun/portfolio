/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#bbd3ea',
        secondary: '#465bdd',
        tertiary: '#ff6e00',
        primaryDark: '#01012d',
        secondaryDark: '#0f0f59',
        tertiaryDark: '#731fd4',
        text: '#052b3f',
        textDark: '#fff',
      },
      animation: {
        'slide-down': 'slideDown 1s ease-in-out',
        'slide-up': 'slideUp 1s ease-in-out',
        opacity: 'opacity 0.5s ease-in-out',
        blink: 'blink 2s linear infinite ',
        bounce: 'bounce 4s ease-in-out infinite',
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      boxShadow: {
        white: '0 3px 8px -0.5px rgba(O, 0, 0, 0.3 )',
        neon: '0 0 5px #ddd, 0 0 10px #ddd, 0 0 15px #ddd, 0 0 20px #ddd',
      },
      textShadow: {
        default: '0 4px 10px rgba(0, 0, 0, 1)',
        lg: '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Noto Sans Myanmar', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
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
