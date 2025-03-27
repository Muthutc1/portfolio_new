/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'navy': '#000080',
        'dark-blue': '#040113',
        'sky-blue': '#87CEEB',
        'light-blue': '#ADD8E6',
        'dusty-rose': '#D8BFD8',
        'white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      animation: {
        slideRight: 'slideRight 1s ease-out',
        slideLeft: 'slideLeft 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
        fadeIn: 'fadeIn 1s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 3s ease-in-out infinite',
        pattern: 'patternMove 20s linear infinite',
        gradientBG: 'gradientBG 15s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin-once': 'spin 0.5s ease-in-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};