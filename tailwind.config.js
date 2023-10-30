/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'), require('@tailwindcss/forms')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1d4ed8',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff'
        }
      }
    ]
  }
}
