/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require( '@tailwindcss/typography' )
  ],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    extend: {
      spacing: {
        '18': '4.5rem'
      }
    }
  }
};